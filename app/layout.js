import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkTheme from './components/Theme.js'; 
import Head from 'next/head';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ClerkProvider>
      <html lang="en">
      <Head>
          <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <body className={inter.className}>{children}</body>
      </html>
      </ClerkProvider>
    </ThemeProvider>
  );
}
