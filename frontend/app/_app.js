import React from "react";
import "styles/global.scss";

import NavBar from "../components/navbar";
 
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
        <NavBar></NavBar>
        <Component {...pageProps} />
    </div>
  )
}