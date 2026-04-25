import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { User, Settings, CreditCard, MessageSquare, Bot, Plus, ExternalLink } from 'lucide-react'

export default function DashboardPage() {
  const { userId } = auth()

  if (!userId) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-content mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-text-secondary">Manage your HeyRon agents and subscription</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Agent Card */}
          <div className="md:col-span-2 p-6 rounded-xl border border-border bg-surface">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Bot className="w-5 h-5 text-secondary" />
                Your Agents
              </h2>
              <button className="px-4 py-2 bg-primary hover:bg-secondary rounded-lg transition-colors flex items-center gap-2 text-sm">
                <Plus className="w-4 h-4" />
                New Agent
              </button>
            </div>

            <div className="p-4 rounded-lg border border-border bg-background/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">My HeyRon</h3>
                  <p className="text-text-secondary text-sm">Active • Connected to 2 channels</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                  Online
                </span>
              </div>
              <div className="mt-4 flex gap-2">
                <Link href="#" className="px-3 py-1.5 rounded-lg border border-border hover:border-secondary transition-colors text-sm">
                  Configure
                </Link>
                <Link href="#" className="px-3 py-1.5 rounded-lg border border-border hover:border-secondary transition-colors text-sm">
                  View Chats
                </Link>
              </div>
            </div>
          </div>

          {/* Subscription Card */}
          <div className="p-6 rounded-xl border border-border bg-surface">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-secondary" />
              Subscription
            </h2>
            <div className="p-4 rounded-lg border border-primary bg-primary/10 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">Pro Plan</span>
                <span className="text-green-400 text-sm">Active</span>
              </div>
              <p className="text-text-secondary text-sm">$29/month • Renews May 24, 2026</p>
            </div>
            <button className="w-full py-2 border border-border hover:border-secondary rounded-lg transition-colors text-sm">
              Manage Subscription
            </button>
          </div>

          {/* Connected Channels */}
          <div className="md:col-span-2 p-6 rounded-xl border border-border bg-surface">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-secondary" />
              Connected Channels
            </h2>
            <div className="space-y-3">
              {[
                { name: 'Discord', status: 'Active', icon: '💬' },
                { name: 'Telegram', status: 'Active', icon: '✈️' }
              ].map((channel) => (
                <div key={channel.name} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{channel.icon}</span>
                    <span>{channel.name}</span>
                  </div>
                  <span className="text-green-400 text-sm">{channel.status}</span>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full py-2 border border-border hover:border-secondary rounded-lg transition-colors text-sm">
              Add Channel
            </button>
          </div>

          {/* Account Settings */}
          <div className="p-6 rounded-xl border border-border bg-surface">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-secondary" />
              Account
            </h2>
            <div className="space-y-3">
              <Link href="#" className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-secondary transition-colors">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Profile
                </span>
                <ExternalLink className="w-4 h-4 text-text-secondary" />
              </Link>
              <Link href="#" className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-secondary transition-colors">
                <span className="flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Settings
                </span>
                <ExternalLink className="w-4 h-4 text-text-secondary" />
              </Link>
              <Link href="#" className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-secondary transition-colors">
                <span className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Billing
                </span>
                <ExternalLink className="w-4 h-4 text-text-secondary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
