export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin" />
        
        {/* Loading Text */}
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold text-gray-600">Loading...</p>
        </div>
      </div>
    </div>
  );
} 