import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-6">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
                <path d="M16 2L4 8v8c0 7.732 5.12 14.936 12 18 6.88-3.064 12-10.268 12-18V8L16 2z" 
                  fill="#546E8F" stroke="#273957" strokeWidth="1.5"/>
                <path d="M10 12l4 4 8-8" stroke="#D8E0EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
          <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-text-secondary">Sign in to access your HeyRon dashboard</p>
        </div>

        <div className="p-6 rounded-xl border border-border bg-surface">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-text-secondary mb-2">Email</label>
              <input 
                type="email" 
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-secondary outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-text-secondary mb-2">Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-secondary outline-none transition-colors"
              />
            </div>
            <button className="w-full py-3 bg-primary hover:bg-secondary rounded-lg transition-colors font-semibold">
              Sign In
            </button>
          </div>
          <p className="text-center text-text-secondary text-sm mt-6">
            Coming soon! Sign up to get early access.
          </p>
        </div>

        <p className="text-center text-text-secondary text-sm mt-6">
          Don't have an account?{' '}
          <Link href="/signup" className="text-secondary hover:text-white">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
