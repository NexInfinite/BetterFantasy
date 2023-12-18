import React from "react";
import "../styles/globals.css";

import NavBar from "../components/navbar";
import Footer from "../components/footer";
 
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
    </div>
  )
}