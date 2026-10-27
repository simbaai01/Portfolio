import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { portfolioPath } from "@/lib/site-paths"
import "./globals.css"

export const metadata: Metadata = {
  title: "Anubhav Dhawan Portfolio",
  description: "AI/ML product leadership.",
  icons: {
    icon: [{ url: portfolioPath("/profile-photo.jpg"), type: "image/jpeg" }],
    apple: [{ url: portfolioPath("/profile-photo.jpg"), type: "image/jpeg" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
