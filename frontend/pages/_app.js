import React from "react";
import "../styles/globals.css";

import NavBar from "../components/navbar";
 
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
        <NavBar></NavBar>
        <Component {...pageProps} />
    </div>
  )
}