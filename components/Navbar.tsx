'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
              <path d="M16 2L4 8v8c0 7.732 5.12 14.936 12 18 6.88-3.064 12-10.268 12-18V8L16 2z" 
                fill="#546E8F" stroke="#273957" strokeWidth="1.5"/>
              <path d="M10 12l4 4 8-8" stroke="#D8E0EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-xl font-bold">HeyRon</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/blog" className="text-text-secondary hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/docs" className="text-text-secondary hover:text-white transition-colors">
            Docs
          </Link>
          <Link href="/#features" className="text-text-secondary hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/#pricing" className="text-text-secondary hover:text-white transition-colors">
            Pricing
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <SignedOut>
            <Link href="/login" className="text-text-secondary hover:text-white transition-colors">
              Log in
            </Link>
            <Link href="/signup" className="px-4 py-2 bg-primary hover:bg-secondary rounded-lg transition-colors font-medium">
              Get Started
            </Link>
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard" className="text-text-secondary hover:text-white transition-colors">
              Dashboard
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link href="/blog" className="text-text-secondary hover:text-white" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link href="/docs" className="text-text-secondary hover:text-white" onClick={() => setIsOpen(false)}>
              Docs
            </Link>
            <Link href="/#features" className="text-text-secondary hover:text-white" onClick={() => setIsOpen(false)}>
              Features
            </Link>
            <Link href="/#pricing" className="text-text-secondary hover:text-white" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <hr className="border-border" />
            <SignedOut>
              <Link href="/login" className="text-text-secondary hover:text-white" onClick={() => setIsOpen(false)}>
                Log in
              </Link>
              <Link href="/signup" className="px-4 py-2 bg-primary hover:bg-secondary rounded-lg transition-colors text-center font-medium" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard" className="text-text-secondary hover:text-white" onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  )
}
