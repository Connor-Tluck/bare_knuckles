import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        
        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* The Cut */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src="/images/photos/finger_glove_pic_1.jpg"
                alt="The Cut - Premium Golf Glove"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">The Cut</h2>
              <p className="text-gray-600 mb-4">Our signature fingerless design for maximum feel and control</p>
              <Link 
                href="/checkout" 
                className="block text-center bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>

          {/* The Classic */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src="/images/photos/fingerless_one_tee.png"
                alt="The Classic - Traditional Golf Glove"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">The Classic</h2>
              <p className="text-gray-600 mb-4">Traditional design with modern comfort and durability</p>
              <Link 
                href="/checkout" 
                className="block text-center bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>

          {/* The Pro */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src="/images/photos/main_finergless.png"
                alt="The Pro - Professional Grade Golf Glove"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">The Pro</h2>
              <p className="text-gray-600 mb-4">Professional grade materials for the serious golfer</p>
              <Link 
                href="/checkout" 
                className="block text-center bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>

        {/* Featured in Action */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">Featured in Action</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-video">
              <Image
                src="/images/photos/main_celebrity_promo.webp"
                alt="Professional Golfer with Bare Knuckle Gloves"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative aspect-video">
              <Image
                src="/images/photos/main_celebrity_win_1.webp"
                alt="Professional Golfer Winning with Bare Knuckle Gloves"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 