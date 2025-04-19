import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, BoltIcon, CrownIcon } from '@heroicons/react/24/solid'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-dark-900/90 backdrop-blur-md border-b border-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <BoltIcon className="h-6 w-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-700" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-700">
              TikSave Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              <Link 
                href="/" 
                className="text-sm font-medium text-slate-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r from-primary to-primary-700 after:transition-all"
              >
                Home
              </Link>
              <Link 
                href="#features" 
                className="text-sm font-medium text-slate-400 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r from-primary to-primary-700 after:transition-all"
              >
                Features
              </Link>
              <Link 
                href="#how-it-works" 
                className="text-sm font-medium text-slate-400 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r from-primary to-primary-700 after:transition-all"
              >
                How It Works
              </Link>
              <Link 
                href="#faq" 
                className="text-sm font-medium text-slate-400 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r from-primary to-primary-700 after:transition-all"
              >
                FAQ
              </Link>
            </div>
            
            <button className="btn btn-primary rounded-full text-sm px-5 py-2 font-semibold shadow-lg">
              <CrownIcon className="h-4 w-4" />
              Upgrade to Pro
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-900 border-b border-slate-800 py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <Link
              href="/"
              className="block px-4 py-2 text-sm font-medium text-white hover:bg-slate-800/50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="block px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800/50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="block px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800/50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#faq"
              className="block px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800/50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-2 pb-1">
              <button className="w-full btn btn-primary rounded-full text-sm px-5 py-2.5 font-semibold shadow-lg">
                <CrownIcon className="h-4 w-4" />
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}