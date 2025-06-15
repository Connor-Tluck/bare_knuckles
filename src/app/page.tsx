'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/photos/main_celebrity_promo.webp"
          alt="Bare Knuckle Golf Gloves"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          priority
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            NOT YOUR DAD'S
            <br />
            GOLF GLOVES
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-light">
            Revolutionizing the game with fingerless design and premium performance
          </p>
          <div className="space-y-4">
            <Link 
              href="/products" 
              className="block bg-white text-black px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              ENTER THE REVOLUTION
            </Link>
            <p className="text-sm text-gray-400">Warning: May cause extreme grip and control</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">FINGERLESS DESIGN</h3>
              <p className="text-gray-400">Maximum feel, minimum restriction</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">PREMIUM MATERIALS</h3>
              <p className="text-gray-400">Built to last, designed to perform</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">PRO APPROVED</h3>
              <p className="text-gray-400">Trusted by the best in the game</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video">
              <Image
                src="/images/photos/main_celebrity_promo_2.webp"
                alt="Professional Golfer with Bare Knuckle Gloves"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">TRUSTED BY PROS</h2>
              <p className="text-xl text-gray-400 mb-8">
                "These gloves changed my game. The feel and control is unmatched."
              </p>
              <Link 
                href="/about" 
                className="text-white font-bold hover:underline"
              >
                SEE THE DIFFERENCE →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center bg-black">
        <h2 className="text-4xl font-bold mb-6">READY TO REVOLUTIONIZE YOUR GAME?</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Join the movement. Experience the difference.
        </p>
        <Link 
          href="/products" 
          className="inline-block bg-white text-black px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors transform hover:scale-105"
        >
          SHOP NOW
        </Link>
      </section>
    </main>
  )
} 