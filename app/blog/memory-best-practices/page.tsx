import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'

export const metadata = {
  title: 'How to Make Your HeyRon Agent Remember What Matters',
  description: 'Deep dive into HeyRon memory system. Learn how to use SOUL.md, MEMORY.md, and daily notes to make your agent remember what matters.',
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
                April 15, 2026
              </span>
              <span className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Guides
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">How to Make Your Agent Remember What Matters</h1>
            
            <div className="space-y-6 text-text-secondary">
              <p className="text-xl">
                One of HeyRon's most powerful features is its memory system. Unlike ChatGPT, which forgets everything between sessions, HeyRon can remember context across conversations — if you set it up right.
              </p>

              <h2 className="text-xl font-semibold text-white mt-8">The Memory System Explained</h2>
              <p>HeyRon has three types of memory:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>SOUL.md</strong> — Your agent's personality and identity</li>
                <li><strong>MEMORY.md</strong> — Long-term knowledge that persists</li>
                <li><strong>Daily Notes</strong> — Session-specific context</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-8">SOUL.md — Your Agent Identity</h2>
              <p>
                Think of SOUL.md as your agent's personality file. It defines who your agent is, how it behaves, and what it knows about you. Your agent reads this at the start of EVERY conversation.
              </p>
              <p>Include in SOUL.md:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Agent name and role</li>
                <li>Your communication preferences</li>
                <li>Your goals and priorities</li>
                <li>Important context about your work</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-8">MEMORY.md — Long-Term Knowledge</h2>
              <p>
                MEMORY.md is where you store information your agent should remember forever. Think of it as your agent's long-term memory — it has access in every session.
              </p>
              <p>Store in MEMORY.md:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Key people and their preferences</li>
                <li>Ongoing projects and deadlines</li>
                <li>Business info (prices, policies, processes)</li>
                <li>Important dates and recurring events</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-8">Best Practices</h2>
              <h3 className="text-lg font-medium text-white">Do:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Keep SOUL.md concise</strong> — 500 words max</li>
                <li><strong>Update MEMORY.md regularly</strong> — Add new info as it changes</li>
                <li><strong>Be specific</strong> — "John prefers calls" beats "John is nice"</li>
                <li><strong>Review monthly</strong> — Remove outdated info</li>
              </ul>

              <h3 className="text-lg font-medium text-white mt-4">Do Not:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Overload SOUL.md</strong> — Important details get lost</li>
                <li><strong>Assume it remembers everything</strong> — Put key info in MEMORY.md</li>
                <li><strong>Use vague language</strong> — Be specific about names and dates</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-8">Troubleshooting</h2>
              <p>If your agent forgets things:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Check the file is saved in the right location</li>
                <li>Be more specific in your prompts</li>
                <li>Say "Remember this for future sessions" for key details</li>
                <li>Verify you're in the right channel/context</li>
              </ol>

              <h2 className="text-xl font-semibold text-white mt-8">Ready to Try?</h2>
              <p>
                <Link href="/signup" className="text-white underline">Sign up for HeyRon</Link> and start building your agent memory today.
              </p>

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