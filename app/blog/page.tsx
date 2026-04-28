import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

const blogPosts = [
  {
    slug: 'introducing-heyron',
    title: 'Introducing HeyRon: Your Personal AI Agent',
    excerpt: 'We\'re launching HeyRon to help you automate your workflow, manage communications, and grow your business.',
    date: 'April 24, 2026',
    category: 'Announcements'
  },
  {
    slug: 'getting-started-guide',
    title: 'Getting Started with Your First Agent',
    excerpt: 'A step-by-step guide to setting up your HeyRon agent, connecting channels, and having your first conversation.',
    date: 'April 20, 2026',
    category: 'Tutorials'
  },
  {
    slug: 'memory-best-practices',
    title: 'How to Make Your Agent Remember What Matters',
    excerpt: 'Deep dive into HeyRon\'s memory system. Learn how to use SOUL.md, MEMORY.md, and daily notes effectively.',
    date: 'April 15, 2026',
    category: 'Guides'
  },
  {
    slug: 'discord-integration',
    title: 'Connecting Your Agent to Discord',
    excerpt: 'Everything you need to know about setting up your HeyRon agent on Discord.',
    date: 'April 10, 2026',
    category: 'Tutorials'
  },
  {
    slug: 'automation-workflows',
    title: 'Building Automation Workflows with Heartbeats',
    excerpt: 'Learn how to set up heartbeat tasks, cron jobs, and automated reminders.',
    date: 'April 5, 2026',
    category: 'Guides'
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-white mb-8 transition-colors text-sm">
            ← Back
          </Link>

          <h1 className="text-3xl font-bold mb-4">Blog</h1>
          <p className="text-text-secondary mb-8">
            Updates, tutorials, and guides.
          </p>

          <div className="space-y-4">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="block p-4 rounded-lg border border-border hover:border-white transition-colors"
              >
                <div className="flex items-center gap-3 mb-2 text-xs text-text-secondary">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-lg font-semibold mb-1">
                  {post.title}
                </h2>
                <p className="text-sm text-text-secondary">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}