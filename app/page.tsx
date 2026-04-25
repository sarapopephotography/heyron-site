import Link from 'next/link'
import { ArrowRight, Zap, Shield, Users, MessageSquare, Brain, Code } from 'lucide-react'

export default function Home() {
  return (
    <div className="animated-gradient">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-content mx-auto px-6 text-center">
          <div className="fade-in">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/30 text-text-secondary text-sm font-mono mb-6">
              🚀 Now with GPT-4o & Claude integration
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in" style={{ animationDelay: '0.1s' }}>
            Your AI Agent.
            <br />
            <span className="gradient-text">Works while you sleep.</span>
          </h1>
          
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
            Connect HeyRon to Discord, Telegram, Slack, and more. 
            It handles messages, manages tasks, and grows your business — 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{ animationDelay: '0.3s' }}>
            <Link href="/signup" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-secondary rounded-lg transition-colors font-semibold text-lg group">
              Get Your Agent
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/docs" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border hover:border-secondary rounded-lg transition-colors font-semibold text-lg">
              Read the Docs
            </Link>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 relative fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="max-w-4xl mx-auto rounded-xl border border-border bg-surface/50 backdrop-blur p-4 glow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-text-secondary text-sm font-mono">HeyRon Terminal</span>
              </div>
              <div className="font-mono text-sm text-left space-y-2">
                <div className="text-text-secondary">// Your agent handling your business</div>
                <div><span className="text-secondary">user@heyron</span>:<span className="text-text-secondary">~</span>$ <span className="text-green-400">HeyRon, any new leads today?</span></div>
                <div className="text-text-secondary ml-4">📬 3 new inquiries from your website!</div>
                <div className="text-text-secondary ml-4">• Sarah — interested in newborn photography session</div>
                <div className="text-text-secondary ml-4">• Mike — asking about family portraits</div>
                <div className="text-text-secondary ml-4">• Lisa — wants cake smash package info</div>
                <div className="text-text-secondary ml-4">→ I've added them to your 17Hats CRM and sent follow-up emails.</div>
                <div><span className="text-secondary">user@heyron</span>:<span className="text-text-secondary">~</span>$ <span className="text-green-400">Thanks! 🎉</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              More Than Just a Chatbot
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              HeyRon is a full-featured AI agent that integrates with your existing tools and workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {[
              {
                icon: MessageSquare,
                title: 'Multi-Channel',
                description: 'Connect to Discord, Telegram, WhatsApp, Signal, and more. One agent, everywhere.'
              },
              {
                icon: Brain,
                title: 'Memory That Sticks',
                description: 'Your agent remembers important details, preferences, and context across conversations.'
              },
              {
                icon: Zap,
                title: 'Proactive Automation',
                description: 'Set up heartbeats and cron jobs. Your agent checks in, sends reminders, and acts on schedule.'
              },
              {
                icon: Shield,
                title: 'Privacy First',
                description: 'Your data stays yours. Configurable security settings and clear data boundaries.'
              },
              {
                icon: Code,
                title: 'Tool Integration',
                description: 'Connect to 60+ skills including Gmail, Calendar, Stripe, Airtable, and custom APIs.'
              },
              {
                icon: Users,
                title: 'Team Collaboration',
                description: 'Deploy sub-agents for specific tasks. Manager-worker patterns for complex workflows.'
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-xl border border-border bg-surface hover:border-secondary transition-colors">
                <feature.icon className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-surface">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              From sign-up to your first agent interaction — it's that fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Create Your Agent', description: 'Sign up and customize your agent\'s name, personality, and behavior.' },
              { step: '02', title: 'Connect Channels', description: 'Link Discord, Telegram, or other platforms where you want to chat.' },
              { step: '03', title: 'Watch It Work', description: 'Your agent is ready to help. Teach it your preferences and it learns.' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/20 font-mono">{item.step}</div>
                <div className="absolute top-0 left-0">
                  <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                  <p className="text-text-secondary mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Start free. Upgrade when you're ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Free */}
            <div className="p-6 rounded-xl border border-border bg-surface">
              <h3 className="text-lg font-semibold text-text-secondary">Starter</h3>
              <div className="text-4xl font-bold mt-4 mb-2">$0</div>
              <p className="text-text-secondary text-sm mb-6">Forever free</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">✓ 1 AI Agent</li>
                <li className="flex items-center gap-2">✓ 2 Channels</li>
                <li className="flex items-center gap-2">✓ Basic memory</li>
                <li className="flex items-center gap-2">✓ Community support</li>
              </ul>
              <Link href="/signup" className="mt-6 block w-full py-3 border border-border hover:border-secondary rounded-lg transition-colors text-center">
                Get Started
              </Link>
            </div>

            {/* Pro */}
            <div className="p-6 rounded-xl border-2 border-primary bg-surface relative glow-accent">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-lg font-semibold text-white">Pro</h3>
              <div className="text-4xl font-bold mt-4 mb-2">$29</div>
              <p className="text-text-secondary text-sm mb-6">per month</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">✓ Unlimited agents</li>
                <li className="flex items-center gap-2">✓ Unlimited channels</li>
                <li className="flex items-center gap-2">✓ Advanced memory</li>
                <li className="flex items-center gap-2">✓ Priority support</li>
                <li className="flex items-center gap-2">✓ Custom skills</li>
              </ul>
              <Link href="/signup" className="mt-6 block w-full py-3 bg-primary hover:bg-secondary rounded-lg transition-colors text-center font-semibold">
                Upgrade to Pro
              </Link>
            </div>

            {/* Team */}
            <div className="p-6 rounded-xl border border-border bg-surface">
              <h3 className="text-lg font-semibold text-text-secondary">Team</h3>
              <div className="text-4xl font-bold mt-4 mb-2">$99</div>
              <p className="text-text-secondary text-sm mb-6">per month</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">✓ Everything in Pro</li>
                <li className="flex items-center gap-2">✓ 5 team members</li>
                <li className="flex items-center gap-2">✓ Shared workspaces</li>
                <li className="flex items-center gap-2">✓ Admin controls</li>
                <li className="flex items-center gap-2">✓ Dedicated support</li>
              </ul>
              <Link href="/signup" className="mt-6 block w-full py-3 border border-border hover:border-secondary rounded-lg transition-colors text-center">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to meet your AI agent?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Join thousands of users who've already transformed their workflow with HeyRon.
          </p>
          <Link href="/signup" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-secondary rounded-lg transition-colors font-semibold text-lg group">
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
