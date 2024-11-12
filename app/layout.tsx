import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
 
const inter = Inter({ subsets: ['latin'] })
 
export const metadata: Metadata = {
  title: 'PDH School - Build. Sell. Launch',
  description: "India's first-of-its-kind school where learning meets action",
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}