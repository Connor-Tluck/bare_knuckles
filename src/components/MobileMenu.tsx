'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="md:hidden"
        aria-label="Open menu"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 6h16M4 12h16M4 18h16" 
          />
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Panel */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4"
            aria-label="Close menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex items-center mb-8">
            <Image
              src="/images/photos/man_with_gloves_general.png"
              alt="BareKnuckle Golf Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="ml-2 text-xl font-bold">BareKnuckle Golf</span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-6">
            <Link 
              href="/products"
              className="block text-lg font-semibold hover:text-gray-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/about"
              className="block text-lg font-semibold hover:text-gray-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/community"
              className="block text-lg font-semibold hover:text-gray-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Community
            </Link>
            <Link 
              href="/products"
              className="block bg-black text-white px-6 py-3 rounded-full text-center font-semibold hover:bg-gray-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Shop Now
            </Link>
          </nav>

          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-500 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/bareknucklegolf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://tiktok.com/@bareknucklegolf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 