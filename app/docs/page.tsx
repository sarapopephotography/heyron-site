import Link from 'next/link'
import Image from 'next/image'

const docSections = [
  {
    title: 'Getting Started',
    links: [
      { title: 'What is HeyRon?', href: '/docs/what-is-heyron' },
      { title: 'Create your first agent', href: '/docs/create-first-agent' },
      { title: 'Connect Discord', href: '/docs/connect-discord' },
      { title: 'Connect Telegram', href: '/docs/connect-telegram' }
    ]
  },
  {
    title: 'How It Works',
    links: [
      { title: 'Memory system', href: '/docs/how-memory-works' },
      { title: 'Channels & context', href: '/docs/channels-context' },
      { title: 'Tools & skills', href: '/docs/tools-skills' }
    ]
  },
  {
    title: 'Integrations',
    links: [
      { title: 'Google Workspace', href: '/docs/gmail-calendar' },
      { title: 'Stripe', href: '/docs/stripe' },
      { title: 'Airtable', href: '/docs/airtable' }
    ]
  },
  {
    title: 'Automation',
    links: [
      { title: 'Heartbeats', href: '/docs/heartbeats' },
      { title: 'Cron jobs', href: '/docs/cron-jobs' },
      { title: 'Sub-agents', href: '/docs/sub-agents' }
    ]
  }
]

export default function DocsPage() {
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

          <h1 className="text-3xl font-bold mb-4">Docs</h1>
          <p className="text-text-secondary mb-8">
            Everything you need to build with HeyRon.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {docSections.map((section) => (
              <div key={section.title} className="p-4 rounded-lg border border-border">
                <h2 className="font-semibold mb-3">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-text-secondary hover:text-white text-sm transition-colors">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}