import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'

export const metadata = {
  title: 'Getting Started with Your First HeyRon Agent',
  description: 'A step-by-step guide to setting up your HeyRon agent, connecting channels, and having your first conversation in under 2 minutes.',
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image src="/logo.jpg" alt="HeyRon" width={32} height={32} className="rounded" />
            <span>HeyRon</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm text-text-secondary">
            <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-text-secondary hover:text-white mb-8 transition-colors text-sm">
            ← Back to Blog
          </Link>

          <article>
            <div className="flex items-center gap-4 text-sm text-text-secondary mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                April 20, 2026
              </span>
              <span className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Tutorials
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">Getting Started with Your First HeyRon Agent</h1>
            
            <div className="space-y-6 text-text-secondary">
              <p className="text-xl">
                This guide walks you through setting up your HeyRon agent, connecting channels, and having your first conversation. You'll be up and running in under 2 minutes.
              </p>

              <h2 className="text-xl font-semibold text-white mt-8">What You Will Need</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>An email address</li>
                <li>A channel you want to connect (Discord, Telegram, Signal, WhatsApp, or Slack)</li>
                <li>About 2 minutes of time</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-8">Step 1: Sign Up</h2>
              <p>
                Go to <Link href="/signup" className="text-white underline">heyron.ai/signup</Link> and create your account. You will choose a name for your AI agent — this is the only setup required.
              </p>
              <p>Choose a name that fits your use case:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>"Executive Assistant" — for business productivity</li>
                <li>"Research Partner" — for market research and analysis</li>
                <li>"Content Creator" — for writing and social media</li>
                <li>Or just use your name</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-8">Step 2: Connect a Channel</h2>
              <p>
                Once signed up, connect your preferred chat channel.
              </p>

              <h3 className="text-lg font-medium text-white">Discord</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Create a Discord bot in the Developer Portal</li>
                <li>Copy the bot token</li>
                <li>Add it to your server</li>
                <li>Start chatting</li>
              </ol>
              <p><Link href="/docs" className="text-white underline">Full Discord setup guide</Link></p>

              <h3 className="text-lg font-medium text-white mt-4">Telegram</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Message BotFather on Telegram</li>
                <li>Use /newbot to create your bot</li>
                <li>Copy the API token</li>
                <li>Start chatting</li>
              </ol>
              <p><Link href="/docs" className="text-white underline">Full Telegram setup guide</Link></p>

              <h2 className="text-xl font-semibold text-white mt-8">Step 3: Give Your Agent Context</h2>
              <p>
                This is the most important step. Your agent needs to know who you are and what you want. Create a simple SOUL.md file with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your name and role</li>
                <li>Your communication style preference</li>
                <li>Your goals and what you need help with</li>
              </ul>
              <p><Link href="/blog/memory-best-practices" className="text-white underline">Learn more about memory</Link></p>

              <h2 className="text-xl font-semibold text-white mt-8">Step 4: Start Chatting</h2>
              <p>That is it. Open your chat channel and say hello.</p>
              <p>Example: "Hey Agent, can you help me with..."</p>
              <p>Your agent will respond, remember your context, and start building a working relationship with you.</p>

              <h2 className="text-xl font-semibold text-white mt-8">Pro Tips</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Be specific</strong> — "Schedule a meeting with John next week" works better than "help me"</li>
                <li><strong>Use context</strong> — Tell your agent about ongoing projects and it will remember</li>
                <li><strong>Connect tools</strong> — Add Gmail, Calendar, Notion for maximum productivity</li>
                <li><strong>Join the community</strong> — Our Discord has thousands of members sharing tips</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-8">What is Next</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/memory-best-practices" className="text-white underline">Memory Best Practices</Link></li>
                <li><Link href="/blog/automation-workflows" className="text-white underline">Automation Workflows</Link></li>
                <li><Link href="/docs" className="text-white underline">Full Documentation</Link></li>
              </ul>

              <div className="mt-8 pt-8 border-t border-border">
                <Link href="/blog" className="text-white underline">← Back to Blog</Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}