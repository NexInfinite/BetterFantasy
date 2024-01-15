import { Inter } from "next/font/google";
import "../styles/globals.css";

export const metadata = {
  title: "Better F1 Fantasy",
  description:
    "(Hopefully) A better f1 fantasy which aims to be as customizable as possible, not affiliated with F1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
