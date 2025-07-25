'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Map = dynamic(() => import('./components/Map'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                🏛️ Bulgarian Heritage Sites
              </h1>
            </div>
            <nav className="flex space-x-8">
              <Link 
                href="/" 
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium border-b-2 border-blue-500"
              >
                Map
              </Link>
              <Link 
                href="/about" 
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                About
              </Link>
              <Link 
                href="/admin" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Admin
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Page Title Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Explore Cultural Heritage Sites
            </h2>
            <p className="mt-2 text-gray-600">
              Discover and learn about Bulgaria&aposs rich cultural heritage through our interactive map
            </p>
          </div>
        </div>

        {/* Map Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-[600px] w-full">
              <Map />
            </div>
          </div>
        </div>

        {/* Quick Stats or Info Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">40000+</div>
              <div className="text-sm text-gray-600">Cultural Sites</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600">265</div>
              <div className="text-sm text-gray-600">Municipalities</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-sm text-gray-600">UNESCO Sites</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}