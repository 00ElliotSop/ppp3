import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photosDropdownOpen, setPhotosDropdownOpen] = useState(false);
  const [rentalsDropdownOpen, setRentalsDropdownOpen] = useState(false);
  const [mobilePhotosOpen, setMobilePhotosOpen] = useState(false);
  const [mobileRentalsOpen, setMobileRentalsOpen] = useState(false);

  const toggleMobilePhotos = () => {
    setMobilePhotosOpen(!mobilePhotosOpen);
    setMobileRentalsOpen(false); // Close other dropdown
  };

  const toggleMobileRentals = () => {
    setMobileRentalsOpen(!mobileRentalsOpen);
    setMobilePhotosOpen(false); // Close other dropdown
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobilePhotosOpen(false);
    setMobileRentalsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      {/* Top bar with contact info */}
      <div className="bg-[#B5A99A] text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-end items-center space-x-6 text-sm">
          <a href="tel:647-957-2057" className="flex items-center space-x-1 hover:text-[#F7E7CE]">
            <span>647-957-2057</span>
          </a>
          <a href="mailto:info@projectpartyproductions.com" className="flex items-center space-x-1 hover:text-[#F7E7CE]">
            <span>info@projectpartyproductions.com</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              className="h-16 w-auto"
              src="/full-logo-black.png"
              alt="Project Party Productions"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-gray-800 hover:text-[#B5A99A] px-3 py-2 text-sm font-medium transition-colors">
                HOME
              </Link>
              <Link to="/backdrops" className="text-gray-800 hover:text-[#B5A99A] px-3 py-2 text-sm font-medium transition-colors">
                BACKDROPS
              </Link>
              
              {/* Photobooths Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setPhotosDropdownOpen(true)}
                onMouseLeave={() => setPhotosDropdownOpen(false)}
              >
                <button className="text-gray-800 hover:text-[#B5A99A] px-3 py-2 text-sm font-medium transition-colors flex items-center">
                  PHOTOBOOTHS
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {photosDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                    <Link
                      to="/360-photobooth"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#F7E7CE] hover:text-gray-800 transition-colors"
                    >
                      360 PHOTOBOOTH
                    </Link>
                    <Link
                      to="/mobile-photobooth"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#F7E7CE] hover:text-gray-800 transition-colors"
                    >
                      MOBILE PHOTOBOOTH
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/gallery" className="text-gray-800 hover:text-[#B5A99A] px-3 py-2 text-sm font-medium transition-colors">
                GALLERY
              </Link>
              <Link to="/faq" className="text-gray-800 hover:text-[#B5A99A] px-3 py-2 text-sm font-medium transition-colors">
                FAQ
              </Link>
              <Link to="/about-us" className="text-gray-800 hover:text-[#B5A99A] px-3 py-2 text-sm font-medium transition-colors">
                ABOUT US
              </Link>
              
              {/* Other Rentals Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setRentalsDropdownOpen(true)}
                onMouseLeave={() => setRentalsDropdownOpen(false)}
              >
                <button className="text-gray-800 hover:text-[#B5A99A] px-3 py-2 text-sm font-medium transition-colors flex items-center">
                  OTHER RENTALS
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {rentalsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                    <Link
                      to="/speakers"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#F7E7CE] hover:text-gray-800 transition-colors"
                    >
                      SPEAKERS
                    </Link>
                    <Link
                      to="/stanchions"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#F7E7CE] hover:text-gray-800 transition-colors"
                    >
                      STANCHIONS + RED CARPET
                    </Link>
                    <Link
                      to="/power-station"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#F7E7CE] hover:text-gray-800 transition-colors"
                    >
                      POWER STATION
                    </Link>
                    <Link
                      to="/props"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#F7E7CE] hover:text-gray-800 transition-colors"
                    >
                      PROPS
                    </Link>
                    <Link
                      to="/lighting"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#F7E7CE] hover:text-gray-800 transition-colors"
                    >
                      LIGHTING
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/book-now"
                className="bg-[#B5A99A] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#F7E7CE] hover:text-black transition-all duration-300"
              >
                BOOK NOW
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-[#B5A99A] focus:outline-none focus:text-[#B5A99A] p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="text-gray-800 hover:text-[#B5A99A] block px-3 py-2 text-base font-medium transition-colors"
              >
                HOME
              </Link>
              <Link
                to="/backdrops"
                onClick={closeMobileMenu}
                className="text-gray-800 hover:text-[#B5A99A] block px-3 py-2 text-base font-medium transition-colors"
              >
                BACKDROPS
              </Link>
              
              {/* Mobile Photobooths Dropdown */}
              <div>
                <button
                  onClick={toggleMobilePhotos}
                  className="text-gray-800 hover:text-[#B5A99A] block px-3 py-2 text-base font-medium transition-colors w-full text-left flex items-center justify-between"
                >
                  PHOTOBOOTHS
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobilePhotosOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobilePhotosOpen && (
                  <div className="pl-6">
                    <Link
                      to="/360-photobooth"
                      onClick={closeMobileMenu}
                      className="text-gray-600 hover:text-[#B5A99A] block px-3 py-2 text-sm transition-colors"
                    >
                      360 Photobooth
                    </Link>
                    <Link
                      to="/mobile-photobooth"
                      onClick={closeMobileMenu}
                      className="text-gray-600 hover:text-[#B5A99A] block px-3 py-2 text-sm transition-colors"
                    >
                      Mobile Photobooth
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/gallery"
                onClick={closeMobileMenu}
                className="text-gray-800 hover:text-[#B5A99A] block px-3 py-2 text-base font-medium transition-colors"
              >
                GALLERY
              </Link>
              <Link
                to="/faq"
                onClick={closeMobileMenu}
                className="text-gray-800 hover:text-[#B5A99A] block px-3 py-2 text-base font-medium transition-colors"
              >
                FAQ
              </Link>
              
              {/* Mobile Other Rentals Dropdown */}
              <div>
                <button
                  onClick={toggleMobileRentals}
                  className="text-gray-800 hover:text-[#B5A99A] block px-3 py-2 text-base font-medium transition-colors w-full text-left flex items-center justify-between"
                >
                  OTHER RENTALS
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileRentalsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileRentalsOpen && (
                  <div className="pl-6">
                    <Link
                      to="/speakers"
                      onClick={closeMobileMenu}
                      className="text-gray-600 hover:text-[#B5A99A] block px-3 py-2 text-sm transition-colors"
                    >
                      Speakers
                    </Link>
                    <Link
                      to="/stanchions"
                      onClick={closeMobileMenu}
                      className="text-gray-600 hover:text-[#B5A99A] block px-3 py-2 text-sm transition-colors"
                    >
                      Stanchions + Red Carpet
                    </Link>
                    <Link
                      to="/power-station"
                      onClick={closeMobileMenu}
                      className="text-gray-600 hover:text-[#B5A99A] block px-3 py-2 text-sm transition-colors"
                    >
                      Power Station
                    </Link>
                    <Link
                      to="/props"
                      onClick={closeMobileMenu}
                      className="text-gray-600 hover:text-[#B5A99A] block px-3 py-2 text-sm transition-colors"
                    >
                      Props
                    </Link>
                    <Link
                      to="/lighting"
                      onClick={closeMobileMenu}
                      className="text-gray-600 hover:text-[#B5A99A] block px-3 py-2 text-sm transition-colors"
                    >
                      Lighting
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/about-us"
                onClick={closeMobileMenu}
                className="text-gray-800 hover:text-[#B5A99A] block px-3 py-2 text-base font-medium transition-colors"
              >
                ABOUT US
              </Link>
              
              <Link
                to="/book-now"
                onClick={closeMobileMenu}
                className="bg-[#B5A99A] text-white block px-6 py-3 rounded-full text-base font-medium hover:bg-[#F7E7CE] hover:text-black transition-all duration-300 mx-3 mt-4 text-center"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;