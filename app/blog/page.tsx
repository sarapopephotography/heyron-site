import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// Sample blog posts - in production, these would come from MDX files or a CMS
const blogPosts = [
  {
    slug: 'introducing-heyron',
    title: 'Introducing HeyRon: Your Personal AI Agent',
    excerpt: 'We\'re launching HeyRon to help you automate your workflow, manage communications, and grow your business — all through a customizable AI agent.',
    date: 'April 24, 2026',
    readTime: '5 min read',
    category: 'Announcements'
  },
  {
    slug: 'getting-started-guide',
    title: 'Getting Started with Your First Agent',
    excerpt: 'A step-by-step guide to setting up your HeyRon agent, connecting channels, and having your first conversation.',
    date: 'April 20, 2026',
    readTime: '8 min read',
    category: 'Tutorials'
  },
  {
    slug: 'memory-best-practices',
    title: 'How to Make Your Agent Remember What Matters',
    excerpt: 'Deep dive into HeyRon\'s memory system. Learn how to use SOUL.md, MEMORY.md, and daily notes effectively.',
    date: 'April 15, 2026',
    readTime: '6 min read',
    category: 'Guides'
  },
  {
    slug: 'discord-integration',
    title: 'Connecting Your Agent to Discord',
    excerpt: 'Everything you need to know about setting up your HeyRon agent on Discord, including permissions and troubleshooting.',
    date: 'April 10, 2026',
    readTime: '10 min read',
    category: 'Tutorials'
  },
  {
    slug: 'automation-workflows',
    title: 'Building Automation Workflows with Heartbeats',
    excerpt: 'Learn how to set up heartbeat tasks, cron jobs, and automated reminders to keep your agent proactive.',
    date: 'April 5, 2026',
    readTime: '7 min read',
    category: 'Guides'
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-content mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-text-secondary text-lg mb-12 max-w-2xl">
          Latest updates, tutorials, and guides from the HeyRon team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="p-6 rounded-xl border border-border bg-surface hover:border-secondary transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-1 rounded-md bg-primary/30 text-text-secondary text-xs">
                  {post.category}
                </span>
                <span className="text-text-secondary text-sm">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
                {post.title}
              </h2>
              <p className="text-text-secondary mb-4">{post.excerpt}</p>
              <span className="text-text-secondary text-sm">{post.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
