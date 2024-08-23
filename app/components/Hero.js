import React from "react";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const handleStart = () => {
    router.push("/generate");
  };

  return (
    <Container maxWidth="100vw" sx={{ my: 55 }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        textAlign="center"
      >
        <Typography variant="h3" gutterBottom>
          Turn Your Texts into Easy Flashcards!
        </Typography>
        <Typography variant="h5" gutterBottom>
          Make Studying Easy!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleStart}
        >
          Try Now!
        </Button>
      </Box>
    </Container>
  );
};

export default Hero;
