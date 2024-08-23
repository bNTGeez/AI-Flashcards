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
4;

const Features = () => {
  return (
    <Container maxWidth="100vw">
      <Box sx={{ textAlign: "center", my: 30 }}>
        <Typography variant="h4" gutterBottom sx={{ my: 10 }}>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              border: "1px solid",
              borderColor: "grey.300",
              borderRadius: "2",
              my: 4,
              p: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Easy Text Input
            </Typography>
            <Typography>
              {" "}
              Simply input your text and let our software do the rest. Creating
              flashcards has never been easier.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              border: "1px solid",
              borderColor: "grey.300",
              borderRadius: "2",
              my: 4,
              p: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Smart Flashcards
            </Typography>
            <Typography>
              {" "}
              Our AI intelligently breaks down your text into concise
              flashcards, perfect for studying
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            md={4}
            sx={{
              border: "1px solid",
              borderColor: "grey.300",
              borderRadius: "2",
              my: 4,
              p: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Accessible anywhere
            </Typography>
            <Typography>
              {" "}
              Access your flashcards from any device, at any time. Study on the
              go with ease.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Features;
