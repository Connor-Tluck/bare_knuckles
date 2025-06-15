import Link from 'next/link';
import Image from '@/components/Image';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <Image
            src="/images/photos/man_with_gloves_general.png"
            alt="BareKnuckle Golf Logo"
            width={500}
            height={300}
            className="w-full h-full"
          />
        </div>
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          Looks like you've hit a rough patch. Let's get you back on the fairway.
        </p>
        <Link 
          href="/"
          className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
} 