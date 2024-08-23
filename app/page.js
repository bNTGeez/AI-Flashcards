"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Hero from "./components/Hero.js";
import Pricing from "./components/Pricing.js";
import Features from "./components/Features.js";
import { useRef } from "react";

export default function Home() {
  const router = useRouter();
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 384,
      behavior: "smooth",
    });
  };

  return (
    <Container maxWidth="lg">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create Flashcard from your text" />
      </Head>

      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard SaaS{" "}
          </Typography>
          <Button style={{ color: 'white' }} onClick={() => scrollToRef(heroRef)}>Home</Button>
          <Button style={{ color: 'white' }} onClick={() => scrollToRef(featuresRef)}>Features</Button>
          <Button style={{ color: 'white' }} onClick={() => scrollToRef(pricingRef)}>Pricing</Button>
          <SignedOut>
            <Button color="inherit" href="/sign-in">
              Login
            </Button>
            <Button color="inherit" href="/sign-up">
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={featuresRef}>
        <Features />
      </div>

      <div ref={pricingRef}>
        <Pricing />
      </div>
    </Container>
  );
}
