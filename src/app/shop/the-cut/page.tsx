import React from 'react'

export default function TheCutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <h1 className="text-6xl font-bold">The Cut</h1>
            <p className="text-2xl text-gray-300">
              More breathability. More feel. More attitude.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Premium leather construction</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Enhanced grip and control</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Built for the rebels</span>
              </div>
            </div>
            <div className="pt-6">
              <p className="text-3xl font-bold mb-4">$24.99</p>
              <button className="w-full bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-200 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="relative aspect-square bg-zinc-800 rounded-lg">
            {/* Placeholder for product image */}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Why The Cut?</h2>
            <p className="text-xl text-gray-300">
              Tired of sweaty, restrictive gloves that feel like they're suffocating your game? 
              The Cut is here to liberate your swing.
            </p>
            <p className="text-xl text-gray-300">
              We took a traditional golf glove and gave it the middle finger. The result? 
              Maximum breathability, enhanced feel, and a look that says "I don't play by your rules."
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Specs</h2>
            <ul className="space-y-4 text-xl text-gray-300">
              <li>• Premium Cabretta leather</li>
              <li>• Reinforced palm for durability</li>
              <li>• Available in S, M, L, XL</li>
              <li>• Machine washable</li>
            </ul>
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-8">What Golfers Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                "Finally, a glove that doesn't feel like it's judging my swing."
              </p>
              <p className="font-bold">- Range Rat Mike</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                "The country club members hate it. That's how you know it's good."
              </p>
              <p className="font-bold">- Rebel Golfer Sarah</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                "More feel, more control, more attitude. What's not to love?"
              </p>
              <p className="font-bold">- Weekend Warrior Dave</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 