'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import L from 'leaflet';

// Fix default markers in react-leaflet
delete (L.Icon.Default.prototype as L.Icon.Default & { _getIconUrl?: () => string })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom icon for heritage sites
const heritageIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface Site {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  ownership: string;
  condition: string;
}

export default function Map() {
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/sites')
      .then(res => {
        setSites(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching sites:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading heritage sites...</p>
        </div>
      </div>
    );
  }

  return (
    <MapContainer 
      center={[42.7339, 25.4858]} // Center of Bulgaria
      zoom={6} // Unzoomed to show more of the country
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={true}
      className="rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {sites.map(site => (
        <Marker 
          key={site.id} 
          position={[site.latitude, site.longitude]}
          icon={heritageIcon}
        >
          <Popup className="custom-popup">
            <div className="min-w-[250px] p-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {site.name}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <span className="font-medium text-gray-600 mr-2">📍</span>
                  <span className="text-gray-700">{site.address}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-gray-600 mr-2">👤</span>
                  <span className="text-gray-700">{site.ownership}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-gray-600 mr-2">🏗️</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    site.condition === 'Excellent' ? 'bg-green-100 text-green-800' :
                    site.condition === 'Good' ? 'bg-blue-100 text-blue-800' :
                    site.condition === 'Protected' ? 'bg-purple-100 text-purple-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {site.condition}
                  </span>
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                View Details
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}