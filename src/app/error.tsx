'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from '@/components/Image';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <Image
            src="/images/logo.png"
            alt="BareKnuckle Golf"
            width={128}
            height={128}
            className="w-full h-full"
          />
        </div>
        <h1 className="text-4xl font-bold mb-6">Something went wrong!</h1>
        <p className="text-xl text-gray-600 mb-8">
          We apologize for the inconvenience. Please try again or return to the home page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Try again
          </button>
          <Link 
            href="/"
            className="inline-block border border-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
} 