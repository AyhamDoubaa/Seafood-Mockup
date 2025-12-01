import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'OceanCrest Seafood & Grill | Premium Coastal Dining',
    template: '%s | OceanCrest Seafood & Grill',
  },
  description: 'Experience the finest seafood at OceanCrest. Fresh catches, expertly prepared with passion. Reserve your table for an unforgettable coastal dining experience.',
  keywords: ['seafood restaurant', 'coastal dining', 'fresh seafood', 'fine dining', 'reservations', 'Marina Bay'],
  authors: [{ name: 'OceanCrest' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oceancrest.com',
    siteName: 'OceanCrest Seafood & Grill',
    title: 'OceanCrest Seafood & Grill | Premium Coastal Dining',
    description: 'Experience the finest seafood at OceanCrest. Fresh catches, expertly prepared with passion.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OceanCrest Seafood & Grill',
    description: 'Premium coastal dining experience with the freshest seafood.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

