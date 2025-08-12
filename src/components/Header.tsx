import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone, Mail, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top contact bar */}
      <div className={`bg-[#B5A99A] text-white py-2 px-4 transition-all duration-300 ${
        isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-end items-center text-sm">
          <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>416-616-1121</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>info@projectpartyproductions.com</span>
            </div>
            <a 
              href="https://instagram.com/projectpartyproductions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/full-logo-black.png" 
              alt="Project Party Productions" 
              className="h-[67px] w-auto rounded-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium">
              HOME
            </Link>
            <Link to="/backdrops" className="text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium">
              BACKDROPS
            </Link>
            
            {/* Photobooth Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('photobooth')}
                className="flex items-center space-x-1 text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium"
              >
                <span>PHOTOBOOTH</span>
                <ChevronDown size={16} />
              </button>
              {activeDropdown === 'photobooth' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border">
                  <Link
                    to="/360-photobooth"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#F7E7CE] hover:text-white transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    360 Photobooth
                  </Link>
                  <Link
                    to="/mobile-photobooth"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#F7E7CE] hover:text-white transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Mobile Photobooth
                  </Link>
                </div>
              )}
            </div>

            <Link to="/faq" className="text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium">
              FAQ
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium">
              GALLERY
            </Link>
            
            {/* Other Rentals Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('rentals')}
                className="flex items-center space-x-1 text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium"
              >
                <span>OTHER RENTALS</span>
                <ChevronDown size={16} />
              </button>
              {activeDropdown === 'rentals' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border">
                  <Link
                    to="/speakers"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#F7E7CE] hover:text-white transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Speakers
                  </Link>
                  <Link
                    to="/stanchions"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#F7E7CE] hover:text-white transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Stanchions + Red Carpet
                  </Link>
                  <Link
                    to="/power-station"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#F7E7CE] hover:text-white transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Power Station
                  </Link>
                  <Link
                    to="/props"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#F7E7CE] hover:text-white transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Props
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/book-now"
              className="bg-[#F7E7CE] text-white px-6 py-2 rounded-full hover:bg-[#B5A99A] transition-colors font-medium"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              <Link to="/" className="text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium">
                HOME
              </Link>
              <Link to="/backdrops" className="text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium">
                BACKDROPS
              </Link>
              <Link to="/360-photobooth" className="text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium">
                360 PHOTOBOOTH
              </Link>
              <Link to="/mobile-photobooth" className="text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium">
                MOBILE PHOTOBOOTH
              </Link>
              <Link to="/faq" className="text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium">
                FAQ
              </Link>
              <Link to="/gallery" className="text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium">
                GALLERY
              </Link>
              <Link to="/other-rentals" className="text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium">
                OTHER RENTALS
              </Link>
              <Link
                to="/book-now"
                className="bg-[#F7E7CE] text-white px-6 py-2 rounded-full hover:bg-[#B5A99A] transition-colors font-medium text-center"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;