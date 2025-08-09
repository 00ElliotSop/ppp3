import React from 'react';
import { Link } from 'react-router-dom';

const Photobooth360 = () => {
  const galleryImages = [
    '/360.jpg', '/360-1.jpg', '/360.jpg', '/360-1.jpg', '/360.jpg',
    '/360-1.jpg', '/360.jpg', '/360-1.jpg', '/360.jpg', '/360-1.jpg',
    '/360.jpg', '/360-1.jpg', '/360.jpg', '/360-1.jpg', '/360.jpg'
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="/360.jpg"
          alt="360 Photobooth"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">360 PHOTOBOOTH</h1>
            <p className="text-xl md:text-2xl mb-8">
              Experience the ultimate 360-degree video booth that captures every angle
            </p>
            <Link
              to="/book-now"
              className="bg-[#F7E7CE] text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#B5A99A] hover:text-white transition-all duration-300 inline-block"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Ultimate Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <video
                className="w-full rounded-2xl shadow-lg"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/360-booth-demo.mp4" type="video/mp4" />
                <img src="/360-1.jpg" alt="360 Booth Demo" className="w-full rounded-2xl" />
              </video>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">The Ultimate 360 Booth Experience</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#F7E7CE] rounded-full mt-2"></div>
                  <p className="text-gray-700">Completely Wireless</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#F7E7CE] rounded-full mt-2"></div>
                  <p className="text-gray-700">Come with lighting</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#F7E7CE] rounded-full mt-2"></div>
                  <p className="text-gray-700">6 Foot cable</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#F7E7CE] rounded-full mt-2"></div>
                  <p className="text-gray-700">Signage</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#F7E7CE] rounded-full mt-2"></div>
                  <p className="text-gray-700">Led party lights</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#F7E7CE] rounded-full mt-2"></div>
                  <Link to="/props" className="text-[#B5A99A] hover:text-[#F7E7CE] transition-colors underline">
                    Comes with props!
                  </Link>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#F7E7CE] rounded-full mt-2"></div>
                  <Link to="/speakers" className="text-[#B5A99A] hover:text-[#F7E7CE] transition-colors underline">
                    Speakers
                  </Link>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#F7E7CE] rounded-full mt-2"></div>
                  <Link to="/stanchions" className="text-[#B5A99A] hover:text-[#F7E7CE] transition-colors underline">
                    Stanchions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capture Moments Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Capture The Moments From All Sides</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our 360 photobooth creates stunning slow-motion videos that capture every angle of your special moments. 
                With professional lighting and high-quality cameras, your guests will feel like celebrities as they create 
                unforgettable content that they'll want to share with everyone.
              </p>
            </div>
            <div className="relative">
              <img
                src="/360.jpg"
                alt="360 Booth in Action"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">GALLERY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Photobooth360;