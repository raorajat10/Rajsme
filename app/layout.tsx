import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RAJSME',
  // description: 'Created with v0',
  // generator: 'v0.dev',
  icons: {
    icon: '/logoo.png',
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
