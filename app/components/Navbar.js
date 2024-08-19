import { Button, Toolbar, AppBar, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Flashcard App
        </Typography>
        <Button color="inherit" onClick={handleHomeClick}>
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
}
