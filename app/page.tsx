import Link from 'next/link'
import { ArrowRight, MessageSquare, Zap, Shield, Code } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-semibold">
            <span className="text-xl">🦝</span>
            <span>HeyRon</span>
            <span className="px-2 py-0.5 text-xs bg-primary/30 text-text-secondary rounded">Beta</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-text-secondary">
            <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-text-secondary hover:text-white transition-colors">
              Log in
            </Link>
            <Link href="/signup" className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
              Sign up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero - Short, Sharp, Clear */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your AI teammate.
            <br />
            <span className="text-text-secondary">Works when you can't.</span>
          </h1>
          
          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
            Connect your agent to Discord, Telegram, Email, and more. 
            It handles messages, manages tasks, and keeps your business running — 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/signup" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors">
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/docs" className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border hover:border-text-secondary rounded-lg transition-colors text-text-secondary hover:text-white">
              Read the docs
            </Link>
          </div>
        </div>

        {/* Terminal Visual - Simple, Real */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="rounded-lg border border-border bg-black/50 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-surface/50">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="p-4 font-mono text-sm text-left">
              <div className="text-text-secondary">$ heyron, any new leads?</div>
              <div className="text-green-400 mt-1">→ 2 new leads from your website</div>
              <div className="text-text-secondary mt-2">$ nice, add them to crm</div>
              <div className="text-green-400">→ Done. Added to 17Hats. Follow-up emails sent.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Notice */}
      <section className="py-12 px-6 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-text-secondary">
            <span className="text-yellow-400 font-medium">We're in beta.</span>{' '}
            HeyRon is live and growing fast — but we're still building. You may hit rough edges, slow responses, or the occasional bug. That's the tradeoff: you get in early, at the ground floor, while we make it great. Our team fixes issues daily and your feedback shapes what we build next.
          </p>
        </div>
      </section>

      {/* Features - Grid, No Fluff */}
      <section className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <MessageSquare className="w-6 h-6 text-text-secondary mb-3" />
              <h3 className="font-semibold mb-2">Multi-Channel</h3>
              <p className="text-sm text-text-secondary">
                Discord, Telegram, WhatsApp, Signal — one agent, everywhere you are.
              </p>
            </div>
            <div>
              <Zap className="w-6 h-6 text-text-secondary mb-3" />
              <h3 className="font-semibold mb-2">Memory</h3>
              <p className="text-sm text-text-secondary">
                Remembers context, preferences, and important details. No repeating yourself.
              </p>
            </div>
            <div>
              <Shield className="w-6 h-6 text-text-secondary mb-3" />
              <h3 className="font-semibold mb-2">Private</h3>
              <p className="text-sm text-text-secondary">
                Your data stays yours. Clear boundaries, configurable security.
              </p>
            </div>
            <div>
              <Code className="w-6 h-6 text-text-secondary mb-3" />
              <h3 className="font-semibold mb-2">60+ Skills</h3>
              <p className="text-sm text-text-secondary">
                Gmail, Calendar, Stripe, Airtable, and more. Connect your tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 3 Steps Max */}
      <section className="py-20 bg-surface/30 border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l border-border pl-4">
              <div className="text-sm text-text-secondary mb-1">01</div>
              <h3 className="font-medium mb-2">Create agent</h3>
              <p className="text-sm text-text-secondary">Pick a name, set its personality. Done.</p>
            </div>
            <div className="border-l border-border pl-4">
              <div className="text-sm text-text-secondary mb-1">02</div>
              <h3 className="font-medium mb-2">Connect channels</h3>
              <p className="text-sm text-text-secondary">Link Discord, Telegram, email. Wherever you chat.</p>
            </div>
            <div className="border-l border-border pl-4">
              <div className="text-sm text-text-secondary mb-1">03</div>
              <h3 className="font-medium mb-2">It works</h3>
              <p className="text-sm text-text-secondary">Teach it your preferences. It learns as you go.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Simple */}
      <section className="py-20" id="pricing">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8 text-center">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="p-6 rounded-lg border border-border">
              <h3 className="font-medium text-text-secondary">Starter</h3>
              <div className="text-3xl font-bold mt-2 mb-4">$0</div>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>1 agent</li>
                <li>2 channels</li>
                <li>Basic memory</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg border-2 border-white bg-surface">
              <h3 className="font-medium">Pro</h3>
              <div className="text-3xl font-bold mt-2 mb-4">$29<span className="text-sm font-normal text-text-secondary">/mo</span></div>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>Unlimited agents</li>
                <li>Unlimited channels</li>
                <li>Advanced memory</li>
                <li>Priority support</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg border border-border">
              <h3 className="font-medium text-text-secondary">Team</h3>
              <div className="text-3xl font-bold mt-2 mb-4">$99<span className="text-sm font-normal text-text-secondary">/mo</span></div>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>Everything in Pro</li>
                <li>5 team members</li>
                <li>Shared workspaces</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <span className="text-lg">🦝</span>
              <span>HeyRon</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-text-secondary">
              <a href="/docs" className="hover:text-white transition-colors">Docs</a>
              <a href="/blog" className="hover:text-white transition-colors">Blog</a>
              <a href="https://github.com/heyron-ai" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}