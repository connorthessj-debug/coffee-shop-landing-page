import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'Coffee Shop Landing Page', description: 'Build a modern landing page for Sunrise Coffee Co. Features: hero section, menu display, location ma' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
