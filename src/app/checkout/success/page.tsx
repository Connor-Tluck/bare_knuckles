'use client';

import Link from 'next/link';

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. We've sent a confirmation email with your order details.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">What's Next?</h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center text-white font-bold mr-3">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">Order Processing</h3>
                <p className="text-gray-600 text-sm">
                  We'll start processing your order right away. You'll receive updates on your order status.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center text-white font-bold mr-3">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">Shipping Updates</h3>
                <p className="text-gray-600 text-sm">
                  Once your order ships, you'll receive tracking information via email.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center text-white font-bold mr-3">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Your order will be delivered within 3-5 business days.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            href="/products"
            className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </Link>
          <p className="text-sm text-gray-500">
            Need help? Contact our support team at{' '}
            <a href="mailto:support@bareknucklegolf.com" className="text-black hover:underline">
              support@bareknucklegolf.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 