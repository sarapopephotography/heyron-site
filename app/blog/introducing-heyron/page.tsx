import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'

export const metadata = {
  title: 'Introducing HeyRon: Your Personal AI Agent',
  description: 'Meet HeyRon — your own private AI agent that remembers conversations, connects to 60+ tools, and works while you sleep. No code required.',
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
                April 24, 2026
              </span>
              <span className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Announcements
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">Introducing HeyRon: Your Personal AI Agent</h1>
            
            <div className="space-y-6 text-text-secondary">
              <p className="text-xl">
                We are launching HeyRon to help you automate your workflow, manage communications, and grow your business — while you sleep.
              </p>

              <h2 className="text-xl font-semibold text-white mt-8">What is HeyRon?</h2>
              <p>
                HeyRon is your personal AI agent — not a chatbot, but a dedicated worker that lives on its own private server. It remembers every conversation, creates real files you can download, searches the web, and saves work to your personal workspace.
              </p>

              <h2 className="text-xl font-semibold text-white mt-8">How is HeyRon Different from ChatGPT?</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Persistent Memory</strong> — HeyRon remembers context across sessions. No need to re-explain your situation every time.</li>
                <li><strong>Real Tools</strong> — It does not just chat. It creates files, sends emails, manages your calendar, and interacts with 60+ integrations.</li>
                <li><strong>Private Instance</strong> — Your own dedicated AI server. Your data never trains any models.</li>
                <li><strong>Connects to Your Channels</strong> — Talk to HeyRon via Discord, Telegram, Slack, Signal, WhatsApp, or the web.</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-8">What Can HeyRon Do?</h2>
              <p>HeyRon comes with 60+ ready-to-use skills out of the box:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Writing and Content</strong> — Human-sounding writing, article summaries, social media planning, email campaigns, SEO optimization</li>
                <li><strong>Business and Research</strong> — Market research, competitor analysis, data reports, automation workflows</li>
                <li><strong>Integrations</strong> — Gmail, Google Calendar, Notion, GitHub, Stripe, Airtable, and more</li>
                <li><strong>Daily Life</strong> — Morning briefings, journaling, habit tracking, grocery lists, home projects</li>
                <li><strong>Finance</strong> — Daily market briefs, watchlist tracking (with your own API keys)</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-8">How It Works</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Sign up</strong> — Choose a name for your AI. Takes about 30 seconds.</li>
                <li><strong>We set up your private server</strong> — Your own dedicated AI instance, completely isolated.</li>
                <li><strong>Start chatting</strong> — Connect your preferred channel and start talking.</li>
              </ol>
              <p>No code. No setup. You are chatting with your AI in under 2 minutes.</p>

              <h2 className="text-xl font-semibold text-white mt-8">Who is HeyRon For?</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Solopreneurs</strong> who need help managing their business</li>
                <li><strong>Small business owners</strong> who want to automate workflows</li>
                <li><strong>Professionals</strong> who want an AI that knows their context</li>
                <li><strong>Anyone tired of copy-pasting</strong> context to ChatGPT every session</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-8">Getting Started</h2>
              <p>
                Ready to meet your new AI partner? <Link href="/signup" className="text-white underline">Sign up today</Link> for $29/month — cancel anytime.
              </p>
              <p>You also get access to our private Discord community where thousands of members share what they are building with their AI agents.</p>

              <h2 className="text-xl font-semibold text-white mt-8">Learn More</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/docs" className="text-white underline">Read the documentation</Link> — Full setup guides and skill references</li>
                <li><Link href="/blog/getting-started-guide" className="text-white underline">Getting Started Guide</Link> — Step-by-step to your first conversation</li>
                <li><Link href="/blog/memory-best-practices" className="text-white underline">Memory Best Practices</Link> — How to make your agent remember what matters</li>
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