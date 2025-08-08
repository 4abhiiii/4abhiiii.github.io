import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { DisclaimerGate } from '@/components/layout/DisclaimerGate'

export const metadata: Metadata = {
  title: {
    default: 'BEYOND BAR | Delhi Law Firm',
    template: '%s | BEYOND BAR'
  },
  description: 'BEYOND BAR is a full-service Delhi-based law firm delivering litigation, corporate, and regulatory counsel across India.',
  metadataBase: new URL('https://beyondbar.in'),
  openGraph: {
    title: 'BEYOND BAR | Delhi Law Firm',
    description: 'Full-service Delhi law firm: litigation, corporate, and regulatory counsel.',
    url: 'https://beyondbar.in',
    siteName: 'BEYOND BAR',
    locale: 'en_IN',
    type: 'website'
  },
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <DisclaimerGate>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </DisclaimerGate>
      </body>
    </html>
  )
}