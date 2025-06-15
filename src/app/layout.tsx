// src/app/layout.tsx
import './globals.css'
import '../styles/custom.css';
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'

export const metadata: Metadata = {
  title: 'Active Solution',
  description: 'Site officiel de l’agence Active Solution',
  icons: {
    icon: '/logo.jpg', // ← chemin vers ton logo
  },}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
