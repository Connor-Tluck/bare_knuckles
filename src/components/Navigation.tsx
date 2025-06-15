import React from 'react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              BareKnuckle Golf
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/shop" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Shop
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/community" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 