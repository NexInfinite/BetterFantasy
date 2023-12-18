import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
