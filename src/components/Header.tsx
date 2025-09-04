import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/full-logo-black.png"
              alt="Project Party Productions"
              className="h-16 w-auto"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-[#B5A99A] font-semibold transition-colors">
              HOME
            </Link>
            
            {/* Photobooths Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-800 hover:text-[#B5A99A] font-semibold transition-colors"
                onMouseEnter={() => setActiveDropdown('photobooths')}
              >
                PHOTOBOOTHS
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border transition-all duration-200 ${
                  activeDropdown === 'photobooths' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setActiveDropdown('photobooths')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to="/360-photobooth" className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#F7E7CE] transition-colors">
                  360 PHOTOBOOTH
                </Link>
                <Link to="/mobile-photobooth" className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#F7E7CE] transition-colors">
                  MOBILE PHOTOBOOTH
                </Link>
              </div>
            </div>

            <Link to="/backdrops" className="text-gray-800 hover:text-[#B5A99A] font-semibold transition-colors">
              BACKDROPS
            </Link>
            
            {/* Other Rentals Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-800 hover:text-[#B5A99A] font-semibold transition-colors"
                onMouseEnter={() => setActiveDropdown('rentals')}
              >
                OTHER RENTALS
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border transition-all duration-200 ${
                  activeDropdown === 'rentals' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setActiveDropdown('rentals')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to="/speakers" className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#F7E7CE] transition-colors">
                  SPEAKERS
                </Link>
                <Link to="/stanchions" className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#F7E7CE] transition-colors">
                  STANCHIONS
                </Link>
                <Link to="/power-station" className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#F7E7CE] transition-colors">
                  POWER STATION
                </Link>
                <Link to="/props" className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#F7E7CE] transition-colors">
                  PROPS
                </Link>
                <Link to="/lighting" className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#F7E7CE] transition-colors">
                  LIGHTING
                </Link>
              </div>
            </div>

            <Link to="/gallery" className="text-gray-800 hover:text-[#B5A99A] font-semibold transition-colors">
              GALLERY
            </Link>
            <Link to="/faq" className="text-gray-800 hover:text-[#B5A99A] font-semibold transition-colors">
              FAQ
            </Link>
            <Link to="/about-us" className="text-gray-800 hover:text-[#B5A99A] font-semibold transition-colors">
              ABOUT US
            </Link>
            
            <Link 
              to="/book-now"
              className="bg-[#B5A99A] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#F7E7CE] hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-[#B5A99A] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-800 hover:text-[#B5A99A] font-semibold transition-colors"
            >
              HOME
            </Link>
            
            {/* Photobooths Section */}
            <div className="py-2">
              <div className="px-3 py-1 text-xs font-bold text-gray-500 uppercase tracking-wider">
                Photobooths
              </div>
              <Link 
                to="/360-photobooth" 
                className="block px-6 py-2 text-gray-700 hover:text-[#B5A99A] transition-colors"
              >
                360 PHOTOBOOTH
              </Link>
              <Link 
                to="/mobile-photobooth" 
                className="block px-6 py-2 text-gray-700 hover:text-[#B5A99A] transition-colors"
              >
                MOBILE PHOTOBOOTH
              </Link>
            </div>

            <Link 
              to="/backdrops" 
              className="block px-3 py-2 text-gray-800 hover:text-[#B5A99A] font-semibold transition-colors"
            >
              BACKDROPS
            </Link>
            
            {/* Other Rentals Section */}
            <div className="py-2">
              <div className="px-3 py-1 text-xs font-bold text-gray-500 uppercase tracking-wider">
                Other Rentals
              </div>
              <Link 
                to="/speakers" 
                className="block px-6 py-2 text-gray-700 hover:text-[#B5A99A] transition-colors"
              >
                SPEAKERS
              </Link>
              <Link 
                to="/stanchions" 
                className="block px-6 py-2 text-gray-700 hover:text-[#B5A99A] transition-colors"
              >
                STANCHIONS
              </Link>
              <Link 
                to="/power-station" 
                className="block px-6 py-2 text-gray-700 hover:text-[#B5A99A] transition-colors"
              >
                POWER STATION
              </Link>
              <Link 
                to="/props" 
                className="block px-6 py-2 text-gray-700 hover:text-[#B5A99A] transition-colors"
              >
                PROPS
              </Link>
              <Link 
                to="/lighting" 
                className="block px-6 py-2 text-gray-700 hover:text-[#B5A99A] transition-colors"
              >
                LIGHTING
              </Link>
            </div>

            <Link 
              to="/gallery" 
              className="block px-3 py-2 text-gray-800 hover:text-[#B5A99A] font-semibold transition-colors"
            >
              GALLERY
            </Link>
            <Link 
              to="/faq" 
              className="block px-3 py-2 text-gray-800 hover:text-[#B5A99A] font-semibold transition-colors"
            >
              FAQ
            </Link>
            <Link 
              to="/about-us" 
              className="block px-3 py-2 text-gray-800 hover:text-[#B5A99A] font-semibold transition-colors"
            >
              ABOUT US
            </Link>
            
            <div className="pt-4">
              <Link 
                to="/book-now"
                className="block w-full text-center bg-[#B5A99A] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#F7E7CE] hover:text-black transition-all duration-300"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;