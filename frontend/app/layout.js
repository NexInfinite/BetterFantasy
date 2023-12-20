import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export const metadata = {
  title: 'Better F1 Fantasy',
  description: '(Hopefully) A better f1 fantasy which aims to be as customizable as possible, not affiliated with F1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>{children}</body>
    </html>
  )
}
