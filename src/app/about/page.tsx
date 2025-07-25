'use client';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                🏛️ Bulgarian Heritage Sites
              </Link>
            </div>
            <nav className="flex space-x-8">
              <Link 
                href="/" 
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Map
              </Link>
              <Link 
                href="/about" 
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium border-b-2 border-blue-500"
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Bulgarian Heritage Sites
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preserving and showcasing Bulgaria&aposs rich cultural heritage through modern technology
          </p>
        </div>

        {/* Project Overview */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="mb-4">
              This platform serves as a comprehensive digital archive and interactive map of Bulgaria&aposs 
              cultural heritage sites. Our mission is to make cultural heritage more accessible to 
              researchers, tourists, and cultural enthusiasts while supporting preservation efforts.
            </p>
            <p className="mb-4">
              By centralizing data from various Excel files and databases, we&aposve created a unified 
              resource that showcases the diversity and richness of Bulgarian cultural sites, from 
              ancient Thracian tombs to medieval monasteries and modern architectural landmarks.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-blue-600 text-2xl mb-4">🗺️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Interactive Mapping</h3>
            <p className="text-gray-600">
              Explore cultural sites through an intuitive map interface with detailed markers, 
              location information, and filtering capabilities.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-green-600 text-2xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Database</h3>
            <p className="text-gray-600">
              Cleaned and organized data from multiple sources, providing accurate information 
              about ownership, condition, and historical significance.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-purple-600 text-2xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Detailed Information</h3>
            <p className="text-gray-600">
              Each site includes metadata such as historical context, current condition, 
              ownership status, and preservation needs.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-orange-600 text-2xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Admin Management</h3>
            <p className="text-gray-600">
              Administrative interface for cultural heritage professionals to add, edit, 
              and manage site information with proper authentication.
            </p>
          </div>
        </div>

        {/* Technical Stack */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Implementation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Frontend Technologies</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  React + Next.js for modern web framework
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  TailwindCSS for responsive styling
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Leaflet.js for interactive mapping
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Backend & Data</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  PostgreSQL with PostGIS for geospatial data
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Next.js API routes for backend services
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  OpenStreetMap for geographic data
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact/Contribution */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            This project is part of ongoing efforts to digitize and preserve Bulgarian cultural heritage. 
            If you have additional data, corrections, or would like to contribute to the project, 
            we&aposd love to hear from you.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/admin"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Admin Access
            </Link>
            <Link 
              href="/"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Explore Map
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}