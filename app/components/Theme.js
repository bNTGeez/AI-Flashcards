"use client";
import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#556cd6', 
    },
  },
  typography: {
    fontFamily: "Fira Sans, sans-serif, Arial",
  },
  h1: {
    fontFamily: "Fira Sans",
  },
  h2: {
    fontFamily: "Fira Sans",
  },
  h3: {
    fontFamily: "Fira Sans",
  },
  h4: {
    fontFamily: "Fira Sans",
  },
  h5: {
    fontFamily: "Fira Sans",
  },
  h6: {
    fontFamily: "Fira Sans",
  },
});

export default darkTheme;
