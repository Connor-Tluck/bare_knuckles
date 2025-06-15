import React from 'react'
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen py-12 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 uppercase">Our Story & Mission</h1>

        {/* Revolutionizing Golf Gloves Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video">
              <Image
                src="/images/photos/main_celebrity_promo.webp"
                alt="Bare Knuckle Golf Story"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 uppercase">Unconventional Grip. Unmatched Game.</h2>
              <p className="text-lg text-gray-300 mb-4">
                Bare Knuckle Golf was born from defiance. We looked at traditional golf gloves 
                and saw a stale, restrictive past. We envisioned a future where golfers could 
                feel every fiber of their club, every nuance of their swing, without compromise.
              </p>
              <p className="text-lg text-gray-300">
                Our fingerless design isn't just a statement; it's a revolution. It's for players 
                who crave raw connection, unfiltered power, and a game unbound by convention.
              </p>
            </div>
          </div>
        </section>

        {/* The Mission Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 uppercase">Our Vow: Disrupt. Dominate. Deliver.</h2>
              <p className="text-lg text-gray-300 mb-4">
                We're not just selling gloves; we're forging a movement. Our mission is to disrupt 
                the status quo of golf equipment, pushing boundaries and challenging every norm. 
                We deliver tools for domination, crafted with relentless precision and an unyielding 
                commitment to performance.
              </p>
              <p className="text-lg text-gray-300">
                Every stitch, every material choice, is a testament to our dedication to those 
                who play by their own rules. We believe in brutal honesty and unwavering quality.
              </p>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/images/photos/main_celebrity_win_1.webp"
                alt="Bare Knuckle Golf Mission - Winning"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Professional Endorsement Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8 uppercase">Feared by Tradition, Embraced by Greatness.</h2>
          <div className="relative aspect-video max-w-4xl mx-auto">
            <Image
              src="/images/photos/man_with_gloves_general.png"
              alt="Professional Golfer with Bare Knuckle Gloves"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
          <p className="text-lg text-gray-300 mt-8 max-w-2xl mx-auto">
            From underground circuits to championship greens, the elite choose Bare Knuckle. 
            They don't just play the game; they conquer it. This isn't just a glove; it's a weapon.
          </p>
        </section>
      </div>
    </main>
  )
} 