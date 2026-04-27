import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <span className="text-2xl">🦝</span>
        </Link>

        <h1 className="text-xl font-semibold text-center mb-6">Log in</h1>

        <div className="space-y-3">
          <input 
            type="email" 
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:border-white outline-none transition-colors"
          />
          <input 
            type="password" 
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:border-white outline-none transition-colors"
          />
          <button className="w-full py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors">
            Continue
          </button>
        </div>

        <p className="text-center text-text-secondary text-sm mt-6">
          Don't have an account?{' '}
          <Link href="/signup" className="text-white hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}