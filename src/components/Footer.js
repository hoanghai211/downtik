import Link from "next/link";
import { BoltIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-slate-800/50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold mb-4"
            >
              <BoltIcon className="h-6 w-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-700" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-700">
                TikSave Pro
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-6 max-w-xs">
              The most advanced TikTok video downloader on the web. Save
              high-quality videos without watermarks in just a few clicks.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-900 hover:text-primary-100 transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-900 hover:text-primary-100 transition-colors"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-900 hover:text-primary-100 transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-900 hover:text-primary-100 transition-colors"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/dmca"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  DMCA
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-white mb-4">Support</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/help-center"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/feedback"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <Link
                  href="/report-bug"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  Report Bug
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800/50 pt-6 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Vchart Media. All rights reserved. This website
            is not affiliated with TikTok.
          </p>
        </div>
      </div>
    </footer>
  );
}
