import Link from 'next/link'
import Image from 'next/image'
import { MessageSquare, Zap, Shield, Code, Users, Heart, Home as HomeIcon, BookOpen, Lock, HelpCircle, CheckCircle, ArrowRight, Sparkles, Globe, Clock } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Gradient background effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image src="/logo.jpg" alt="HeyRon" width={32} height={32} className="rounded-lg" />
            <span>HeyRon</span>
            <span className="px-2 py-0.5 text-xs bg-primary/30 text-text-secondary rounded">Beta</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/docs" className="text-text-secondary hover:text-white transition-colors">Docs</Link>
            <Link href="/blog" className="text-text-secondary hover:text-white transition-colors">Blog</Link>
            <Link href="#faq" className="text-text-secondary hover:text-white transition-colors">FAQ</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-text-secondary hover:text-white transition-colors">
              Log in
            </Link>
            <Link href="/signup" className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
              Get Yours · $29/mo
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-sm text-text-secondary mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>Now with GPT-4o & Claude integration</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Your AI teammate.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-secondary to-white">
              Works when you can't.
            </span>
          </h1>
          
          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8 leading-relaxed">
            Connect HeyRon to Discord, Telegram, Slack, and more. It handles messages, manages tasks, and grows with you to improve your life or business. Whether you're a total AI newbie or a tech pro, HeyRon meets you where you are and grows as you grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all hover:scale-105">
              Get Yours · $29/mo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#faq" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border hover:border-white/50 rounded-lg transition-colors text-text-secondary hover:text-white">
              Questions?
            </Link>
          </div>
        </div>
      </section>

      {/* Beta Notice */}
      <section className="py-10 px-6 border-y border-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-text-secondary">
            <span className="text-yellow-400 font-medium">We're in beta.</span>{' '}
            HeyRon is live and growing fast, but we're still building. You may hit rough edges, slow responses, or the occasional bug. That's the tradeoff: you get in early, at the ground floor, while we make it great. Our team fixes issues daily and your feedback shapes what we build next.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 border-t border-border/50" id="features">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4 text-center">What it does</h2>
          <p className="text-text-secondary text-center mb-12 max-w-xl mx-auto">
            From handling messages to managing your entire workflow, HeyRon is your personal assistant that never sleeps.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-border bg-surface/30 hover:border-white/20 hover:bg-surface/50 transition-all group">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Multi-Channel</h3>
              <p className="text-sm text-text-secondary">
                Discord, Telegram, WhatsApp, Signal. One agent, everywhere you are.
              </p>
            </div>
            
            <div className="p-5 rounded-xl border border-border bg-surface/30 hover:border-white/20 hover:bg-surface/50 transition-all group">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-3 group-hover:bg-amber-500/30 transition-colors">
                <Zap className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-semibold mb-2">Memory</h3>
              <p className="text-sm text-text-secondary">
                Remembers context, preferences, and important details. No repeating yourself.
              </p>
            </div>
            
            <div className="p-5 rounded-xl border border-border bg-surface/30 hover:border-white/20 hover:bg-surface/50 transition-all group">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-3 group-hover:bg-green-500/30 transition-colors">
                <Shield className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-semibold mb-2">Private</h3>
              <p className="text-sm text-text-secondary">
                Your data stays yours. Clear boundaries, configurable security.
              </p>
            </div>
            
            <div className="p-5 rounded-xl border border-border bg-surface/30 hover:border-white/20 hover:bg-surface/50 transition-all group">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3 group-hover:bg-blue-500/30 transition-colors">
                <Code className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">60+ Skills</h3>
              <p className="text-sm text-text-secondary">
                Gmail, Calendar, Stripe, Airtable, and more. Connect your tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Not Just for Business */}
      <section className="py-24 bg-surface/20 border-y border-border/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4 text-center">Not just for business</h2>
          <p className="text-text-secondary text-center mb-12">HeyRon works for your whole life, not just work.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-border bg-surface/30 hover:border-rose-500/30 transition-all group">
              <Heart className="w-8 h-8 text-rose-400 mb-3" />
              <h3 className="font-semibold mb-2 text-lg">Family & Relationships</h3>
              <p className="text-sm text-text-secondary">
                Track family birthdays, remember important dates, help plan gatherings, manage household schedules.
              </p>
            </div>
            
            <div className="p-6 rounded-xl border border-border bg-surface/30 hover:border-amber-500/30 transition-all group">
              <HomeIcon className="w-8 h-8 text-amber-400 mb-3" />
              <h3 className="font-semibold mb-2 text-lg">Home Life</h3>
              <p className="text-sm text-text-secondary">
                Manage grocery lists, track home projects, organize photos and memories, plan vacations.
              </p>
            </div>
            
            <div className="p-6 rounded-xl border border-border bg-surface/30 hover:border-blue-500/30 transition-all group">
              <BookOpen className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="font-semibold mb-2 text-lg">Learning & Growth</h3>
              <p className="text-sm text-text-secondary">
                Learn new skills, get book summaries, practice languages, track personal goals.
              </p>
            </div>
            
            <div className="p-6 rounded-xl border border-border bg-surface/30 hover:border-green-500/30 transition-all group">
              <Users className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="font-semibold mb-2 text-lg">Community</h3>
              <p className="text-sm text-text-secondary">
                Join thousands of others building with AI. Share what you're making, learn together, grow together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-24 border-y border-border/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm mb-6">
            <Globe className="w-4 h-4" />
            <span>2,000+ Active Agents</span>
          </div>
          
          <h2 className="text-3xl font-semibold mb-4">You're not alone</h2>
          <p className="text-text-secondary mb-8 text-lg">
            Every member gets access to our private Discord community. Thousands of people building with their own AI. Share what you're making, get help, see what others are doing. Learn together, grow together.
          </p>
          <Link href="/signup" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all hover:scale-105">
            Get Started · $29/mo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-surface/20 border-y border-border/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative p-6 rounded-xl border border-border bg-surface/30 hover:border-white/20 transition-all">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center text-sm">1</div>
              <h3 className="font-semibold mb-2 mt-2">Sign up and pick a name</h3>
              <p className="text-sm text-text-secondary">Your AI gets a name you choose. Sign up and go.</p>
            </div>
            
            <div className="relative p-6 rounded-xl border border-border bg-surface/30 hover:border-white/20 transition-all">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center text-sm">2</div>
              <h3 className="font-semibold mb-2 mt-2">We set up your private AI server</h3>
              <p className="text-sm text-text-secondary">Your own dedicated instance. Private. Isolated. Just for you.</p>
            </div>
            
            <div className="relative p-6 rounded-xl border border-border bg-surface/30 hover:border-white/20 transition-all">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center text-sm">3</div>
              <h3 className="font-semibold mb-2 mt-2">Start talking in 2 minutes</h3>
              <p className="text-sm text-text-secondary">No setup. No code. Just open the chat and go.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24" id="pricing">
        <div className="max-w-md mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4 text-center">Simple pricing</h2>
          <p className="text-text-secondary text-center mb-8">One plan. Your own AI.</p>
          
          <div className="p-8 rounded-2xl border-2 border-white bg-surface relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full"></div>
            
            <h3 className="text-xl font-semibold mb-1">One Plan</h3>
            <div className="text-5xl font-bold mb-1">$29<span className="text-xl font-normal text-text-secondary">/mo</span></div>
            <p className="text-sm text-text-secondary mb-6">Cancel anytime. No contracts.</p>
            
            <ul className="text-sm space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                Your own private AI instance
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                Generous monthly usage
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                Persistent memory across sessions
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                Web search, file creation, real tools
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                Private Discord community
              </li>
            </ul>
            
            <Link href="/signup" className="block w-full py-4 bg-white text-black font-medium text-center rounded-lg hover:bg-gray-200 transition-all hover:scale-[1.02]">
              Get Yours · $29/mo
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface/20 border-t border-border/50" id="faq">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">Questions</h2>
          
          <div className="space-y-4">
            <div className="p-5 rounded-xl border border-border bg-surface/30">
              <h3 className="font-medium mb-2">How is this different from ChatGPT?</h3>
              <p className="text-sm text-text-secondary">
                ChatGPT is shared. Everyone talks to the same model, and it forgets you between sessions. HeyRon is your own private AI instance. It remembers every conversation, creates real files you can download, searches the web, and saves work to your personal workspace. It's not a chatbot. It's a worker.
              </p>
            </div>
            
            <div className="p-5 rounded-xl border border-border bg-surface/30">
              <h3 className="font-medium mb-2">Can't I just use ChatGPT Plus and a notes app?</h3>
              <p className="text-sm text-text-secondary">
                You could. But you'd spend your time copy-pasting context, re-explaining your situation, organizing files yourself, and hoping the AI remembers what you told it. With HeyRon, context is automatic. Your AI already knows your projects, your preferences, and your history. It picks up right where you left off.
              </p>
            </div>
            
            <div className="p-5 rounded-xl border border-border bg-surface/30">
              <h3 className="font-medium mb-2">Do I need to be technical?</h3>
              <p className="text-sm text-text-secondary">
                No. You talk to it like a person. We handle all the infrastructure. You sign up, name your AI, and start chatting in under 2 minutes.
              </p>
            </div>
            
            <div className="p-5 rounded-xl border border-green-500/30 bg-green-500/5">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4 text-green-400" />
                Is my data private?
              </h3>
              <p className="text-sm text-text-secondary">
                Yes. Your instance is completely isolated on its own server. Your conversations and files don't train any models and aren't shared with anyone. It's just yours. HeyRon only has access to what you explicitly give it. It won't go looking for your credit card info or any other data unless you ask it to help with those things.
              </p>
            </div>
            
            <div className="p-5 rounded-xl border border-border bg-surface/30">
              <h3 className="font-medium mb-2">What happens after I pay?</h3>
              <p className="text-sm text-text-secondary">
                We spin up your private AI in about 2 minutes. You name it, start a conversation, and you're off. You also get access to our private Discord community where other members share what they're building.
              </p>
            </div>
            
            <div className="p-5 rounded-xl border border-border bg-surface/30">
              <h3 className="font-medium mb-2">Can I cancel?</h3>
              <p className="text-sm text-text-secondary">
                Anytime. No contracts. You can manage your subscription and export your data at heyron.ai/account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <Image src="/logo.jpg" alt="HeyRon" width={24} height={24} className="rounded-lg" />
              <span>HeyRon</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-text-secondary">
              <a href="/docs" className="hover:text-white transition-colors">Docs</a>
              <a href="/blog" className="hover:text-white transition-colors">Blog</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              <a href="https://github.com/heyron-ai" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}