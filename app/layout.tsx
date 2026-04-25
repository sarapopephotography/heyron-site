import type { Metadata } from 'next'
import '../globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'HeyRon — Meet Your AI Agent',
  description: 'Your personal AI agent that works for you 24/7. Connect to Discord, Telegram, and more. Built on OpenClaw.',
  keywords: ['AI', 'agent', 'OpenClaw', 'Discord', 'Telegram', 'automation'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
