import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata = {
  title: "Портфолио Front-end Разработчика",
  description: "Мое портфолио на Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-white text-black`}>{children}</body>
    </html>
  )
}

