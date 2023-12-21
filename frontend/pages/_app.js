import React, { useState } from "react";
import "../styles/globals.css";

import Footer from "../components/footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
        <Component {...pageProps} />
        <Footer />
    </div>
  )
}