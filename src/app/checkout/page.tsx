import Image from 'next/image';
import Link from 'next/link';

export default function Checkout() {
  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - Left Column */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
          
          {/* Product Item - bareknucklegolf.shop (Example Placeholder) */}
          <div className="flex items-center space-x-6 mb-8 pb-8 border-b border-gray-200">
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src="/images/photos/finger_glove_pic_2.jpg" // Using an existing image as a placeholder
                alt="bareknucklegolf.shop item"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-semibold mb-2">bareknucklegolf.shop</h2>
              <p className="text-gray-600 mb-2">THE MORE DOMAIN NAMES YOU OWN, THE MORE PROTECTED YOUR BRAND IS.</p>
              <p className="text-gray-600 mb-4">.SHOP Domain Registration</p>
              <div className="flex items-center space-x-4">
                <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-black">
                  <option>2 Years</option>
                  <option>1 Year</option>
                  <option>3 Years</option>
                </select>
                <span className="text-lg font-bold">$61.48</span>
                <span className="text-sm text-gray-500 line-through">$119.98</span>
                <span className="text-sm text-green-600">48% off</span>
                <button className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Remove item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm6 0a1 1 0 01-2 0v6a1 1 0 112 0V8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">Auto-renews every 2 Years for $119.98</p>
            </div>
          </div>

          {/* Full Domain Protection (Example Placeholder) */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <label htmlFor="domain-protection" className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" id="domain-protection" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                  <span className="ml-3 text-lg font-semibold">Full Domain Protection</span>
                </label>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">RECOMMENDED</span>
              </div>
              <span className="text-lg font-bold">$23.98</span>
            </div>
            <p className="text-gray-600 mb-2">CHOSEN BY OVER 225,000 CUSTOMERS EACH MONTH</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Prevents hackers from stealing your domain or making any other unauthorized changes.</li>
              <li>Requires your approval via 2-factor verification for vital changes like deleting or transferring a domain.</li>
            </ul>
            <p className="text-sm text-gray-500 mt-2">Renews June 2027 for $25.98</p>
          </div>

          {/* Microsoft 365 Email Essentials (Example Placeholder) */}
          <div className="flex items-center space-x-6">
            <div className="w-12 h-12 flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-lg font-semibold mb-1">Microsoft 365 Email Essentials</h2>
              <p className="text-gray-600 text-sm mb-2">A CUSTOM EMAIL ADDRESS SHOWS YOU TAKE YOUR BUSINESS SERIOUSLY</p>
              <div className="flex items-baseline space-x-2">
                <span className="text-lg font-bold">$1.99/mo</span>
                <span className="text-sm text-gray-500 line-through">$7.99</span>
                <span className="text-sm text-green-600">With an annual term (75% savings)</span>
              </div>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 ml-4 mt-2">
                <li>10 GB email storage (approx. 50,000 emails)</li>
                <li>Up to 400 email aliases like sales@ or support@</li>
              </ul>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors">
              Get It
            </button>
          </div>
        </div>

        {/* Order Summary - Right Column */}
        <div className="lg:col-span-1 bg-white rounded-lg shadow-sm p-8 h-fit sticky top-12">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700">2 items</p>
            <p className="text-gray-700">Subtotal (USD)</p>
            <p className="text-2xl font-bold">$85.46</p>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            From $14.83/month or 4 payments at 0% interest with Klarna <span className="font-semibold text-purple-600">Klarna</span> <Link href="#" className="text-blue-600 hover:underline">Learn more</Link>
          </p>
          <p className="text-xs text-gray-500 mb-4">Subtotal does not include applicable taxes</p>
          <Link href="#" className="text-blue-600 hover:underline text-sm mb-6 block">Have a promo code?</Link>
          
          <div className="bg-green-50 p-3 rounded-md flex items-center space-x-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="text-green-800 text-sm">Nice! You saved $60.50 on your order.</p>
          </div>

          <p className="text-xs text-gray-500 mb-6">
            By clicking "Ready for Checkout" you agree that auto-renewing products will renew on the date listed. Cancel Anytime in Account Settings.
          </p>

          <button className="w-full bg-black text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-800 transition-colors">
            Ready for Checkout
          </button>

          <div className="text-center mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 mx-auto mb-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2h2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2h2zm.9-2V7a3 3 0 016 0v2H5.9z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-gray-600 font-semibold">Quality You Can Trust</p>
            <p className="text-xs text-gray-500 mt-1">Your GoDaddy Guides are available 24/7/365 to answer your questions and help you better understand your purchase.</p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg mt-8 text-center">
            <span className="bg-purple-200 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mb-3 inline-block">PLUS</span>
            <h3 className="text-lg font-bold mb-2">Get the magic of AI with every domain.</h3>
            <p className="text-gray-600 text-sm mb-4">
              Remember, your domain comes with GoDaddy Airo™, our AI-fueled experience. In seconds, it automatically generates a Coming Soon website, 
              logo, and more* — no tech skills needed. 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 