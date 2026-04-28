import Link from 'next/link'
import Image from 'next/image'
import { Bot, CreditCard, MessageSquare, User, Settings } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image src="/logo.jpg" alt="HeyRon" width={32} height={32} className="rounded" />
            <span>HeyRon</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-text-secondary hover:text-white transition-colors">
              Log out
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

          <div className="space-y-4">
            {/* Agents */}
            <div className="p-4 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold flex items-center gap-2">
                  <Bot className="w-4 h-4" />
                  Agents
                </h2>
                <button className="px-3 py-1 bg-white text-black text-sm font-medium rounded hover:bg-gray-200 transition-colors">
                  New
                </button>
              </div>
              <div className="p-3 rounded border border-border bg-surface/50 text-center">
                <p className="text-text-secondary text-sm">No agents yet</p>
              </div>
            </div>

            {/* Channels */}
            <div className="p-4 rounded-lg border border-border">
              <h2 className="font-semibold flex items-center gap-2 mb-4">
                <MessageSquare className="w-4 h-4" />
                Channels
              </h2>
              <div className="p-3 rounded border border-border bg-surface/50 text-center">
                <p className="text-text-secondary text-sm">Connect Discord, Telegram, and more</p>
              </div>
            </div>

            {/* Subscription */}
            <div className="p-4 rounded-lg border border-border">
              <h2 className="font-semibold flex items-center gap-2 mb-4">
                <CreditCard className="w-4 h-4" />
                Subscription
              </h2>
              <div className="flex items-center justify-between p-3 rounded border border-border bg-surface/50">
                <div>
                  <div className="font-medium">Free Plan</div>
                  <p className="text-text-secondary text-sm">Current plan</p>
                </div>
                <Link href="/signup" className="text-sm text-white hover:underline">
                  Get Yours →
                </Link>
              </div>
            </div>

            {/* Account */}
            <div className="p-4 rounded-lg border border-border">
              <h2 className="font-semibold flex items-center gap-2 mb-4">
                <User className="w-4 h-4" />
                Account
              </h2>
              <div className="space-y-2">
                <Link href="#" className="flex items-center justify-between p-3 rounded border border-border hover:border-white transition-colors">
                  <span className="text-sm">Profile</span>
                  <Settings className="w-4 h-4 text-text-secondary" />
                </Link>
                <Link href="#" className="flex items-center justify-between p-3 rounded border border-border hover:border-white transition-colors">
                  <span className="text-sm">Settings</span>
                  <Settings className="w-4 h-4 text-text-secondary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}