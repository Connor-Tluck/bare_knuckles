'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function TheCut() {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select both size and color');
      return;
    }

    addToCart({
      id: 'the-cut',
      name: 'The Cut',
      price: 29.99,
      size: selectedSize,
      color: selectedColor,
      quantity,
      image: '/images/products/the-cut-hero.jpg',
    });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Product Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/products/the-cut-hero.jpg"
            alt="The Cut - Premium Fingerless Golf Glove"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            The Cut
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Premium fingerless golf gloves that break tradition
          </p>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/images/products/the-cut-gallery-1.jpg"
                  alt="The Cut - Front View"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/images/products/the-cut-gallery-2.jpg"
                    alt="The Cut - Side View"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/images/products/the-cut-gallery-3.jpg"
                    alt="The Cut - Detail View"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/images/products/the-cut-gallery-4.jpg"
                    alt="The Cut - In Action"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Product Details</h2>
                <p className="text-gray-600 mb-6">
                  The Cut is our signature fingerless golf glove, designed for golfers who want to feel more connected to their game. 
                  By removing the traditional finger coverage, we've created a glove that offers unparalleled feel and breathability.
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
                    <span>Superior breathability</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Available in multiple colors</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Specifications</h3>
                <div className="space-y-2">
                  <p><span className="font-semibold">Material:</span> Premium Cabretta leather</p>
                  <p><span className="font-semibold">Sizes:</span> S, M, L, XL</p>
                  <p><span className="font-semibold">Colors:</span> Black, White, Limited Edition</p>
                  <p><span className="font-semibold">Care:</span> Hand wash, air dry</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Price</h3>
                <p className="text-3xl font-bold mb-6">$24.99</p>
                <button className="w-full bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Related Product 1 */}
            <div className="group">
              <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                <img
                  src="/images/products/the-cut-white.jpg"
                  alt="The Cut - White"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">The Cut - White</h3>
              <p className="text-gray-600 mb-4">Classic white fingerless golf glove</p>
              <Link 
                href="/products/the-cut-white"
                className="inline-block border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors"
              >
                View Details
              </Link>
            </div>

            {/* Related Product 2 */}
            <div className="group">
              <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                <img
                  src="/images/products/the-cut-limited.jpg"
                  alt="The Cut - Limited Edition"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">The Cut - Limited Edition</h3>
              <p className="text-gray-600 mb-4">Exclusive limited release design</p>
              <Link 
                href="/products/the-cut-limited"
                className="inline-block border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors"
              >
                View Details
              </Link>
            </div>

            {/* Related Product 3 */}
            <div className="group">
              <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                <img
                  src="/images/products/the-cut-black.jpg"
                  alt="The Cut - Black"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">The Cut - Black</h3>
              <p className="text-gray-600 mb-4">Premium black fingerless golf glove</p>
              <Link 
                href="/products/the-cut-black"
                className="inline-block border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 