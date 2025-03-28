import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MR $KNOWLEDGE ',
  description: 'Created with v0',
  generator: 'v0.dev',
  icons: {
    icon: "/assets/robin-logo.png", // Chemin vers ton image
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
