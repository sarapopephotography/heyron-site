import Link from 'next/link'
import { User, Settings, CreditCard, MessageSquare, Bot, Plus, ExternalLink } from 'lucide-react'

export default function DashboardPage() {
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
                  <p className="text-text-secondary text-sm">Coming Soon</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-gray-500/20 text-gray-400 text-sm">
                  Coming
                </span>
              </div>
            </div>
          </div>

          {/* Subscription Card */}
          <div className="p-6 rounded-xl border border-border bg-surface">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-secondary" />
              Subscription
            </h2>
            <div className="p-4 rounded-lg border border-border bg-background/50 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">Free Plan</span>
                <span className="text-text-secondary text-sm">Current</span>
              </div>
              <p className="text-text-secondary text-sm">Sign up for Pro to unlock more features</p>
            </div>
            <Link href="/#pricing" className="w-full py-2 border border-border hover:border-secondary rounded-lg transition-colors text-sm text-center block">
              View Plans
            </Link>
          </div>

          {/* Connected Channels */}
          <div className="md:col-span-2 p-6 rounded-xl border border-border bg-surface">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-secondary" />
              Connected Channels
            </h2>
            <div className="p-4 rounded-lg border border-border bg-background/50 text-center">
              <p className="text-text-secondary">Coming soon — connect Discord, Telegram, and more!</p>
            </div>
          </div>

          {/* Account Settings */}
          <div className="p-6 rounded-xl border border-border bg-surface">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-secondary" />
              Account
            </h2>
            <div className="space-y-3">
              <Link href="#" className="flex items-center justify-between p-3 rounded-lg border border-border">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Profile
                </span>
                <ExternalLink className="w-4 h-4 text-text-secondary" />
              </Link>
              <Link href="#" className="flex items-center justify-between p-3 rounded-lg border border-border">
                <span className="flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Settings
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
