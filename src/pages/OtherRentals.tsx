import React from 'react';
import { Link } from 'react-router-dom';

const OtherRentals = () => {
  const rentals = [
    {
      name: 'Speakers',
      image: '/9a.png',
      description: 'Professional sound systems for any event size',
      link: '/speakers'
    },
    {
      name: 'Stanchions + Red Carpet',
      image: '/9b.png', 
      description: 'Create a VIP entrance with our elegant stanchions and red carpet',
      link: '/stanchions'
    },
    {
      name: 'Power Station',
      image: '/10a.png',
      description: 'Portable power solutions for outdoor events',
      link: '/power-station'
    },
    {
      name: 'Props',
      image: '/10b.png',
      description: 'Fun and creative props to enhance your photobooth experience',
      link: '/props'
    },
    {
      name: 'Lighting',
      image: '/11a.png',
      description: 'Professional lighting equipment to set the perfect mood',
      link: '/lighting'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#F7E7CE] to-[#B5A99A] flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">OTHER RENTALS</h1>
          <p className="text-xl">Complete your event with our additional rental services</p>
        </div>
      </section>

      {/* Rentals Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentals.map((rental, index) => (
              <Link
                key={index}
                to={rental.link}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={rental.image}
                      alt={rental.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{rental.name}</h3>
                    <p className="text-gray-600 mb-4">{rental.description}</p>
                    <div className="text-[#B5A99A] font-semibold group-hover:text-[#F7E7CE] transition-colors">
                      Learn More →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Ready to Book?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to discuss your rental needs and create the perfect event experience.
          </p>
          <Link
            to="/book-now"
            className="bg-[#F7E7CE] text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#B5A99A] hover:text-white transition-all duration-300 inline-block"
          >
            BOOK NOW
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OtherRentals;