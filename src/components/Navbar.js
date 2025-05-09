import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Bars3Icon,
  XMarkIcon,
  BoltIcon,
  CrownIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

export default function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [legalDropdownOpen, setLegalDropdownOpen] = useState(false);
  const [supportDropdownOpen, setSupportDropdownOpen] = useState(false);

  // Check if current path matches
  const isActive = (path) => router.pathname === path;

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
                className={`text-sm font-medium ${isActive("/") ? "text-white after:w-full" : "text-slate-300"} hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r from-primary to-primary-700 after:transition-all`}
              >
                Home
              </Link>
              <Link
                href="/features"
                className={`text-sm font-medium ${isActive("/features") ? "text-white after:w-full" : "text-slate-300"} hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r from-primary to-primary-700 after:transition-all`}
              >
                Features
              </Link>
              <Link
                href="/how-it-works"
                className={`text-sm font-medium ${isActive("/how-it-works") ? "text-white after:w-full" : "text-slate-300"} hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r from-primary to-primary-700 after:transition-all`}
              >
                How It Works
              </Link>
              <Link
                href="/faq"
                className={`text-sm font-medium ${isActive("/faq") ? "text-white after:w-full" : "text-slate-300"} hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r from-primary to-primary-700 after:transition-all`}
              >
                FAQ
              </Link>

              {/* Legal Dropdown */}
              <div className="relative group z-20">
                <button
                  className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 group-hover:after:w-full after:bg-gradient-to-r from-primary to-primary-700 after:transition-all cursor-pointer"
                  onClick={() => setLegalDropdownOpen(!legalDropdownOpen)}
                  onMouseEnter={() => setLegalDropdownOpen(true)}
                  onMouseLeave={() => setLegalDropdownOpen(false)}
                >
                  Legal
                  <ChevronDownIcon className="h-4 w-4" />
                </button>

                {/* Legal Dropdown Menu */}
                <div
                  className={`absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-dark-800 ring-1 ring-black ring-opacity-5 transition-all duration-200 z-20 ${legalDropdownOpen ? "opacity-100 transform-none" : "opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto"}`}
                  onMouseEnter={() => setLegalDropdownOpen(true)}
                  onMouseLeave={() => setLegalDropdownOpen(false)}
                >
                  <div className="py-1 border border-slate-700 rounded-md">
                    <Link
                      href="/privacy-policy"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/terms-of-service"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Terms of Service
                    </Link>
                    <Link
                      href="/dmca"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      DMCA
                    </Link>
                    <Link
                      href="https://www.facebook.com/1O2OO4"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

              {/* Support Dropdown */}
              <div className="relative group z-20">
                <button
                  className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 group-hover:after:w-full after:bg-gradient-to-r from-primary to-primary-700 after:transition-all cursor-pointer"
                  onClick={() => setSupportDropdownOpen(!supportDropdownOpen)}
                  onMouseEnter={() => setSupportDropdownOpen(true)}
                  onMouseLeave={() => setSupportDropdownOpen(false)}
                >
                  Support
                  <ChevronDownIcon className="h-4 w-4" />
                </button>

                {/* Support Dropdown Menu */}
                <div
                  className={`absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-dark-800 ring-1 ring-black ring-opacity-5 transition-all duration-200 z-20 ${supportDropdownOpen ? "opacity-100 transform-none" : "opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto"}`}
                  onMouseEnter={() => setSupportDropdownOpen(true)}
                  onMouseLeave={() => setSupportDropdownOpen(false)}
                >
                  <div className="py-1 border border-slate-700 rounded-md">
                    <Link
                      href="/help-center"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Help Center
                    </Link>
                    <Link
                      href="/community"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Community
                    </Link>
                    <Link
                      href="/feedback"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Feedback
                    </Link>
                    <Link
                      href="/report-bug"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Report Bug
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/pricing"
              className="btn btn-primary rounded-full text-sm px-5 py-2 font-semibold shadow-lg"
            >
              <CrownIcon className="h-4 w-4" />
              Contact Us
            </Link>
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
          <div className="container mx-auto px-4 flex flex-col gap-2">
            <div className="flex items-center justify-between px-4 py-2 mb-2">
              <div className="text-sm font-semibold text-slate-300">Menu</div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full hover:bg-slate-800 text-slate-400"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            <Link
              href="/"
              className={`block px-4 py-2.5 text-sm font-medium ${isActive("/") ? "text-white bg-slate-800/50" : "text-slate-300"} hover:bg-slate-800/50 hover:text-white rounded-md`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/features"
              className={`block px-4 py-2.5 text-sm font-medium ${isActive("/features") ? "text-white bg-slate-800/50" : "text-slate-300"} hover:bg-slate-800/50 hover:text-white rounded-md`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className={`block px-4 py-2.5 text-sm font-medium ${isActive("/how-it-works") ? "text-white bg-slate-800/50" : "text-slate-300"} hover:bg-slate-800/50 hover:text-white rounded-md`}
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/faq"
              className={`block px-4 py-2.5 text-sm font-medium ${isActive("/faq") ? "text-white bg-slate-800/50" : "text-slate-300"} hover:bg-slate-800/50 hover:text-white rounded-md`}
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/pricing"
              className={`block px-4 py-2.5 text-sm font-medium ${isActive("/pricing") ? "text-white bg-slate-800/50" : "text-slate-300"} hover:bg-slate-800/50 hover:text-white rounded-md`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>

            {/* Legal section - collapsible */}
            <div className="border-t border-slate-800/50 mt-2 pt-2 z-10">
              <button
                className="w-full px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-800/50 hover:text-white rounded-md flex items-center justify-between cursor-pointer"
                onClick={() => setLegalDropdownOpen(!legalDropdownOpen)}
              >
                <span>Legal</span>
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform ${legalDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`pl-4 mt-1 space-y-1 transition-all duration-300 overflow-hidden ${legalDropdownOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <Link
                  href="/privacy-policy"
                  className={`block px-4 py-2 text-sm font-medium ${isActive("/privacy-policy") ? "text-white bg-slate-800/50" : "text-slate-300"} hover:bg-slate-800/50 hover:text-white rounded-md`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className={`block px-4 py-2 text-sm font-medium ${isActive("/terms-of-service") ? "text-white bg-slate-800/50" : "text-slate-300"} hover:bg-slate-800/50 hover:text-white rounded-md`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Terms of Service
                </Link>
                <Link
                  href="/dmca"
                  className={`block px-4 py-2 text-sm font-medium ${isActive("/dmca") ? "text-white bg-slate-800/50" : "text-slate-300"} hover:bg-slate-800/50 hover:text-white rounded-md`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  DMCA
                </Link>
                <Link
                  href="/contact-us"
                  className={`block px-4 py-2 text-sm font-medium ${isActive("/contact-us") ? "text-white bg-slate-800/50" : "text-slate-300"} hover:bg-slate-800/50 hover:text-white rounded-md`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Support section - collapsible */}
            <div className="border-t border-slate-800/50 mt-2 pt-2 z-10">
              <button
                className="w-full px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-800/50 hover:text-white rounded-md flex items-center justify-between cursor-pointer"
                onClick={() => setSupportDropdownOpen(!supportDropdownOpen)}
              >
                <span>Support</span>
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform ${supportDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`pl-4 mt-1 space-y-1 transition-all duration-300 overflow-hidden ${supportDropdownOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <Link
                  href="/help-center"
                  className={`block px-4 py-2 text-sm font-medium ${isActive("/help-center") ? "text-white bg-slate-800/50" : "text-slate-300"} hover:bg-slate-800/50 hover:text-white rounded-md`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Help Center
                </Link>
                <Link
                  href="/community"
                  className={`block px-4 py-2 text-sm font-medium ${isActive("/community") ? "text-white bg-slate-800/50" : "text-slate-300"} hover:bg-slate-800/50 hover:text-white rounded-md`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Community
                </Link>
                <Link
                  href="/feedback"
                  className={`block px-4 py-2 text-sm font-medium ${isActive("/feedback") ? "text-white bg-slate-800/50" : "text-slate-300"} hover:bg-slate-800/50 hover:text-white rounded-md`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Feedback
                </Link>
                <Link
                  href="/report-bug"
                  className={`block px-4 py-2 text-sm font-medium ${isActive("/report-bug") ? "text-white bg-slate-800/50" : "text-slate-300"} hover:bg-slate-800/50 hover:text-white rounded-md`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Report Bug
                </Link>
              </div>
            </div>

            <div className="border-t border-slate-800/50 mt-3 pt-3 pb-1">
              <Link
                href="/pricing"
                className="w-full btn btn-primary rounded-full text-sm px-5 py-2.5 font-semibold shadow-lg flex items-center justify-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <CrownIcon className="h-4 w-4" />
                Upgrade to Pro
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
