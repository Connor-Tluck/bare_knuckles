import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from '@/components/MobileMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BareKnuckle Golf - Disrupting Golf Culture',
  description: 'Premium fingerless golf gloves that break tradition. Join the movement of golfers who want to feel more connected to their game.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/photos/man_with_gloves_general.png"
                  alt="BareKnuckle Golf Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="ml-2 text-xl font-bold">BareKnuckle Golf</span>
              </Link>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <Link 
                  href="/products"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Products
                </Link>
                <Link 
                  href="/about"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  About
                </Link>
                <Link 
                  href="/community"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Community
                </Link>
                <Link 
                  href="/products"
                  className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
                >
                  Shop Now
                </Link>
              </div>

              {/* Mobile Menu */}
              <MobileMenu />
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-black text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <Image
                    src="/images/photos/man_with_gloves_general.png"
                    alt="BareKnuckle Golf Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <span className="ml-2 text-xl font-bold">BareKnuckle Golf</span>
                </div>
                <p className="text-gray-400">
                  Disrupting golf culture one fingerless glove at a time.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/community" className="text-gray-400 hover:text-white transition-colors">
                      Community
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="mailto:hello@bareknucklegolf.com"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      hello@bareknucklegolf.com
                    </a>
                  </li>
                  <li>
                    <a 
                      href="tel:+1234567890"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      (123) 456-7890
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/bareknucklegolf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://tiktok.com/@bareknucklegolf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} BareKnuckle Golf. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 