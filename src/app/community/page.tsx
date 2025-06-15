import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Community() {
  return (
    <main className="min-h-screen bg-black text-white py-12 px-4">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/photos/main_celebrity_promo.webp"
            alt="BareKnuckle Golf Community Hero"
            fill
            priority
            className="object-cover opacity-50"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase">
            Join the Movement
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Be part of a community that's redefining golf culture
          </p>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-4">10K+</div>
              <p className="text-xl text-gray-400">Community Members</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-4">50+</div>
              <p className="text-xl text-gray-400">Local Chapters</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-4">100+</div>
              <p className="text-xl text-gray-400">Events Hosted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 uppercase">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/photos/fingerless_one_tee.png"
                  alt="Community Events"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold uppercase">Local Events</h3>
              <p className="text-gray-600">
                Join us for meetups, tournaments, and casual rounds at courses near you. 
                Connect with fellow BareKnuckle golfers and share your passion for the game.
              </p>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/photos/main_finergless.png"
                  alt="Social Media Community"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold uppercase">Online Presence</h3>
              <p className="text-gray-600">
                Share your BareKnuckle moments on Instagram and TikTok. Tag us to be featured 
                and connect with golfers worldwide. Our community thrives online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Member Stories */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 uppercase">Hear From The Crew</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6 mx-auto border-4 border-white">
                <Image
                  src="/images/photos/finger_glove_pic_1.jpg"
                  alt="Community Member Sarah K."
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Sarah K.</h3>
              <p className="text-gray-300 text-center">
                "BareKnuckle Golf has completely changed how I feel about the game. 
                The community is welcoming and the gloves are game-changers!"
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6 mx-auto border-4 border-white">
                <Image
                  src="/images/photos/finger_glove_pic_2.jpg"
                  alt="Community Member Mike R."
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Mike R.</h3>
              <p className="text-gray-300 text-center">
                "Finally, a golf brand that gets it. The fingerless design gives me 
                the feel I've always wanted, and the community is amazing."
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6 mx-auto border-4 border-white">
                <Image
                  src="/images/photos/man_with_gloves_general.png"
                  alt="Community Member Alex T."
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Alex T.</h3>
              <p className="text-gray-300 text-center">
                "I've met so many great people through BareKnuckle events. It's more 
                than just a glove – it's a movement."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 uppercase">Ready to Join the Rebellion?</h2>
          <p className="text-xl mb-12 font-light">
            Be part of something bigger. Join our community of golfers who are redefining 
            what it means to play the game we love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://instagram.com/bareknucklegolf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Follow on Instagram
            </a>
            <a 
              href="https://tiktok.com/@bareknucklegolf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors transform hover:scale-105"
            >
              Follow on TikTok
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 uppercase text-black">Stay Connected. Stay Edgy.</h2>
          <p className="text-xl text-gray-600 mb-12 font-light">
            Subscribe to our newsletter for updates on new products, exclusive community events, 
            and offers that break the mold.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-black text-black"
              />
              <button
                type="submit"
                className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors transform hover:scale-105"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
} 