import React, { useState } from "react";
import { AnimatePresence } from 'framer-motion'
import "../styles/globals.css";

import Footer from "../components/footer";
import NavBar from "../components/navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
        <NavBar />
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
        <Footer />
    </>
  )
}