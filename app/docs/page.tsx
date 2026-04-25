import Link from 'next/link'
import { ArrowLeft, BookOpen, Zap, Shield, MessageSquare, Code, Wrench } from 'lucide-react'

const docSections = [
  {
    title: 'Getting Started',
    icon: Zap,
    description: 'Set up your first agent and connect to channels',
    links: [
      { title: 'What is HeyRon?', href: '/docs/what-is-heyron' },
      { title: 'Creating Your First Agent', href: '/docs/create-first-agent' },
      { title: 'Connecting to Discord', href: '/docs/connect-discord' },
      { title: 'Connecting to Telegram', href: '/docs/connect-telegram' }
    ]
  },
  {
    title: 'Core Concepts',
    icon: BookOpen,
    description: 'Understand how HeyRon works under the hood',
    links: [
      { title: 'How Memory Works', href: '/docs/how-memory-works' },
      { title: 'SOUL.md Explained', href: '/docs/soul-md' },
      { title: 'Channels & Context', href: '/docs/channels-context' },
      { title: 'Tools & Skills', href: '/docs/tools-skills' }
    ]
  },
  {
    title: 'Security & Privacy',
    icon: Shield,
    description: 'Keep your data safe and secure',
    links: [
      { title: 'Security Best Practices', href: '/docs/security' },
      { title: 'Data Privacy', href: '/docs/privacy' },
      { title: 'API Keys & Secrets', href: '/docs/api-keys' }
    ]
  },
  {
    title: 'Integrations',
    icon: MessageSquare,
    description: 'Connect HeyRon to your favorite tools',
    links: [
      { title: 'Google Workspace', href: '/docs/gmail-calendar' },
      { title: 'Stripe Payments', href: '/docs/stripe' },
      { title: 'Airtable CRM', href: '/docs/airtable' },
      { title: 'Custom Webhooks', href: '/docs/webhooks' }
    ]
  },
  {
    title: 'Automation',
    icon: Code,
    description: 'Set up automated workflows and schedules',
    links: [
      { title: 'Heartbeats Explained', href: '/docs/heartbeats' },
      { title: 'Cron Jobs', href: '/docs/cron-jobs' },
      { title: 'Sub-Agents', href: '/docs/sub-agents' }
    ]
  },
  {
    title: 'Troubleshooting',
    icon: Wrench,
    description: 'Fix common issues and get help',
    links: [
      { title: 'Agent Not Responding', href: '/docs/agent-not-responding' },
      { title: 'Memory Issues', href: '/docs/memory-issues' },
      { title: 'Channel Connection Problems', href: '/docs/channel-issues' }
    ]
  }
]

export default function DocsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-content mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-4">Documentation</h1>
        <p className="text-text-secondary text-lg mb-12 max-w-2xl">
          Everything you need to know about building with HeyRon. 
          120+ tutorials, 50+ personas, and 15+ skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docSections.map((section) => (
            <div key={section.title} className="p-6 rounded-xl border border-border bg-surface hover:border-secondary transition-colors">
              <section.icon className="w-8 h-8 text-secondary mb-4" />
              <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
              <p className="text-text-secondary text-sm mb-4">{section.description}</p>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-text-secondary hover:text-white text-sm transition-colors">
                      {link.title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
