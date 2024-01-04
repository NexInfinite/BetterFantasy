import React from "react";
import Head from "next/head"
import { AnimatePresence } from 'framer-motion'
import "../styles/globals.css";

import Footer from "../components/footer";
import NavBar from "../components/navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <div className="relative z-0">
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
      <div className="mt-32"></div>
      <Footer />
    </>
  )
}