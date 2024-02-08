import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { description, logoApp, title } from '@/constants/appInfo'
import { url } from '../constants/appInfo'

const iontserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [logoApp],
    description: description,
    url,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={iontserrat.className}>{children}</body>
    </html>
  )
}
