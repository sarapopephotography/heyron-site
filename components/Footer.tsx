import Link from 'next/link'
import { Github, Twitter, Discord } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-12">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
                  <path d="M16 2L4 8v8c0 7.732 5.12 14.936 12 18 6.88-3.064 12-10.268 12-18V8L16 2z" 
                    fill="#546E8F" stroke="#273957" strokeWidth="1.5"/>
                  <path d="M10 12l4 4 8-8" stroke="#D8E0EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-lg font-bold">HeyRon</span>
            </Link>
            <p className="text-text-secondary text-sm">
              Your personal AI agent that works for you 24/7.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link href="/docs" className="hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link href="/docs" className="hover:text-white transition-colors">API Reference</Link></li>
              <li><Link href="/docs" className="hover:text-white transition-colors">Community</Link></li>
              <li><Link href="/docs" className="hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} HeyRon. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/heyron" target="_blank" rel="noopener noreferrer" 
               className="text-text-secondary hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
               className="text-text-secondary hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" 
               className="text-text-secondary hover:text-white transition-colors">
              <Discord className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
