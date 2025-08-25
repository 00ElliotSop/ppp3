import React from 'react';
import { Link } from 'react-router-dom';

const MobilePhotobooth = () => {
  const galleryImages = [
    '/360.jpg', '/360-1.jpg', '/360.jpg', '/360-1.jpg', '/360.jpg',
    '/360-1.jpg', '/360.jpg', '/360-1.jpg', '/360.jpg', '/360-1.jpg',
    '/360.jpg', '/360-1.jpg', '/360.jpg', '/360-1.jpg', '/360.jpg'
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-screen">
        <link rel="preload" as="image" href="/360.jpg" />
        <img
          src="/360.jpg"
          alt="Mobile Photobooth"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">MOBILE PHOTOBOOTH</h1>
            <p className="text-xl md:text-2xl mb-8">
              Professional mobile photobooth with instant prints and endless fun
            </p>
            <Link
              to="/book-now"
              className="bg-[#B5A99A] text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#F7E7CE] hover:text-white transition-all duration-300 inline-block"
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
              <link rel="preload" as="image" href="/360-1.jpg" />
              <img
                src="/360-1.jpg"
                alt="Mobile Photobooth Setup"
                className="w-full rounded-2xl shadow-lg"
                loading="eager"
                decoding="sync"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">The Ultimate Mobile Photo Booth Experience</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#F7E7CE] rounded-full mt-2"></div>
                  <p className="text-gray-700">Print in multiple formats! (2x3, 4x6 & more!)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#F7E7CE] rounded-full mt-2"></div>
                  <p className="text-gray-700">Completely Wireless</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#F7E7CE] rounded-full mt-2"></div>
                  <p className="text-gray-700">The best LED party lights!</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#F7E7CE] rounded-full mt-2"></div>
                  <p className="text-gray-700">DSLR camera</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#F7E7CE] rounded-full mt-2"></div>
                  <p className="text-gray-700">DNP DS620 to print photos</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#F7E7CE] rounded-full mt-2"></div>
                  <p className="text-gray-700">Come with lighting</p>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">GALLERY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                  loading="eager"
                  decoding="sync"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobilePhotobooth;