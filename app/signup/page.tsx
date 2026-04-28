import Link from 'next/link'
import Image from 'next/image'

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <Image src="/logo.jpg" alt="HeyRon" width={48} height={48} className="rounded" />
        </Link>

        <h1 className="text-xl font-semibold text-center mb-6">Create account</h1>

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
          Already have an account?{' '}
          <Link href="/login" className="text-white hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}