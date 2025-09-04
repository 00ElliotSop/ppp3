import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'BACKDROPS', href: '/backdrops' },
    { name: '360 PHOTOBOOTH', href: '/360-photobooth' },
    { name: 'MOBILE PHOTOBOOTH', href: '/mobile-photobooth' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'FAQ', href: '/faq' },
    { name: 'ABOUT US', href: '/about-us' },
  ];

  const services = [
    { name: 'SPEAKERS', href: '/speakers' },
    { name: 'STANCHIONS', href: '/stanchions' },
    { name: 'POWER STATION', href: '/power-station' },
    { name: 'PROPS', href: '/props' },
    { name: 'LIGHTING', href: '/lighting' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/full-logo-black.png"
              alt="Project Party Productions"
              className="h-12 w-auto"
              loading="eager"
              decoding="sync"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#B5A99A] ${
                  isActive(item.href)
                    ? 'text-[#B5A99A] border-b-2 border-[#B5A99A]'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-gray-700 hover:text-[#B5A99A] transition-colors">
                SERVICES
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F7E7CE] hover:text-[#B5A99A] transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Book Now Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/book-now"
              className="bg-[#B5A99A] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#F7E7CE] hover:text-black transition-all duration-300"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#B5A99A] hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-[#B5A99A] bg-[#F7E7CE] bg-opacity-20'
                    : 'text-gray-700 hover:text-[#B5A99A] hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Services */}
            <div className="border-t pt-2">
              <p className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Services
              </p>
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#B5A99A] hover:bg-gray-50 transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile Book Now */}
            <div className="border-t pt-2">
              <Link
                to="/book-now"
                onClick={() => setIsMenuOpen(false)}
                className="block mx-3 my-2 bg-[#B5A99A] text-white px-4 py-2 rounded-full text-center font-semibold hover:bg-[#F7E7CE] hover:text-black transition-all duration-300"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;