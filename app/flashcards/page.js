"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  updateDoc,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../firebase.js";
import { useRouter } from "next/navigation";
import {
  Container,
  Card,
  Grid,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogContentText,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import Navbar from "../components/Navbar.js";

export default function Flashcards() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcards, setFlashcards] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedFlashcard, setSelectedFlashcard] = useState(null);

  const router = useRouter();

  useEffect(() => {
    async function getFlashcards() {
      if (!user) return;
      const docRef = doc(collection(db, "users"), user.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const collections = docSnap.data().flashcards || [];
        setFlashcards(collections);
      } else {
        await setDoc(docRef, { flashcards: [] });
      }
    }
    getFlashcards();
  }, [user]);

  if (!isLoaded || !isSignedIn) {
    return <></>;
  }

  const handleCardClick = (id) => {
    router.push(`/flashcard?id=${id}`);
  };

  const handleOpenDialog = (event, id) => {
    event.stopPropagation();
    setSelectedFlashcard(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmDelete = async () => {
    if (!selectedFlashcard) {
      console.error("No flashcard selected for deletion.");
      return;
    }

    const userRef = doc(db, "users", user.id);
    const flashcardToDelete = flashcards.find(
      (f) => f.name === selectedFlashcard
    );

    if (!flashcardToDelete) {
      console.error("Flashcard not found in local state:", selectedFlashcard);
      return;
    }

    console.log("Deleting:", flashcardToDelete);

    try {
      await updateDoc(userRef, {
        flashcards: arrayRemove(flashcardToDelete),
      });

      const updatedDoc = await getDoc(userRef);

      const updatedFlashcards = flashcards.filter(
        (f) => f.name !== selectedFlashcard
      );
      setFlashcards(updatedFlashcards);

      handleCloseDialog();
    } catch (error) {
      alert("Failed to delete the flashcard in Firebase. Please try again.");
    }
  };

  return (
    <Container maxWidth="100vw">
      <Navbar />
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {flashcards.map((flashcard, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea
                onClick={() => {
                  handleCardClick(flashcard.name);
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">{flashcard.name}</Typography>
                  <Button
                    onClick={(event) => handleOpenDialog(event, flashcard.name)}
                  >
                    Delete
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this flashcard?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleConfirmDelete} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
