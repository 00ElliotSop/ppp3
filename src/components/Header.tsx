import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone, Mail, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Preload critical page images
  useEffect(() => {
    const criticalImages = [
      '/profile/20250804_204800341.jpg',
      '/profile/DSC_0161.JPG',
      '/profile/360.jpg',
      '/profile/360-1.jpg'
    ];
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close dropdown when mobile menu closes
  useEffect(() => {
    if (!isMenuOpen) setActiveDropdown(null);
  }, [isMenuOpen]);

  // Close menus/dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetNode = event.target as Node;
      if (navRef.current && !navRef.current.contains(targetNode)) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus/dropdowns on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setActiveDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top contact bar */}
      <div
        className={`bg-[#B5A99A] text-white py-2 px-4 transition-all duration-300 ${
          isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'
        }`}
      >
        <div
          className="max-w-7xl mx-auto flex justify-end items-center"
          style={{ fontSize: 'clamp(0.625rem, 1.5vw, 0.875rem)' }}
        >
          <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>647-957-2057</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>info@projectpartyproductions.com</span>
            </div>
            <a
              href="https://instagram.com/projectpartyproductions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white px-4 py-4 overflow-x-hidden" ref={navRef}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-2">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/profile/full-logo-black.png"
              alt="Project Party Productions"
              className="h-12 sm:h-16 md:h-[67px] w-auto rounded-full"
              fetchpriority="high"
              loading="eager"
              decoding="sync"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1rem)' }}>
              HOME
            </Link>
            <Link to="/backdrops" className="text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1rem)' }}>
              BACKDROPS
            </Link>

            {/* Photobooths Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('photobooths')}
                className="flex items-center space-x-1 text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium"
              >
                <span>PHOTOBOOTHS</span>
                <ChevronDown size={16} />
              </button>
              {activeDropdown === 'photobooths' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border overflow-hidden">
                  <Link to="/360-videobooth" className="block px-4 py-2 text-gray-700 hover:bg-[#F7E7CE] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>
                    360 Videobooth
                  </Link>
                  <Link to="/mobile-photobooth" className="block px-4 py-2 text-gray-700 hover:bg-[#F7E7CE] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>
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
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border overflow-hidden">
                  <Link to="/speakers" className="block px-4 py-2 text-gray-700 hover:bg-[#F7E7CE] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>
                    Speakers
                  </Link>
                  <Link to="/stanchions" className="block px-4 py-2 text-gray-700 hover:bg-[#F7E7CE] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>
                    Stanchions + Red Carpet
                  </Link>
                  <Link to="/power-station" className="block px-4 py-2 text-gray-700 hover:bg-[#F7E7CE] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>
                    Power Station
                  </Link>
                  <Link to="/props" className="block px-4 py-2 text-gray-700 hover:bg-[#F7E7CE] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>
                    Props
                  </Link>
                  <Link to="/lighting" className="block px-4 py-2 text-gray-700 hover:bg-[#F7E7CE] hover:text-white transition-colors" onClick={() => setActiveDropdown(null)}>
                    Lighting
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/book-now"
              className="bg-[#B5A99A] text-red-600 px-6 py-2 rounded-full hover:bg-[#F7E7CE] hover:text-red-700 transition-colors font-medium text-center"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden bg-[#B5A99A] text-red-600 px-6 py-2 rounded-full hover:bg-[#F7E7CE] hover:text-red-700 transition-colors font-medium"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="lg:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              <Link to="/" className="text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium">HOME</Link>
              <Link to="/backdrops" className="text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium">BACKDROPS</Link>

              {/* Photobooths Dropdown - Mobile */}
              <div className="relative">
                <button onClick={() => toggleDropdown('photobooths')} className="flex items-center justify-between w-full text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium" aria-expanded={activeDropdown === 'photobooths'} aria-controls="dd-photobooths">
                  <span>PHOTOBOOTHS</span>
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === 'photobooths' && (
                  <div id="dd-photobooths" className="mt-2 ml-4 space-y-2">
                    <Link to="/360-videobooth" className="block text-gray-600 hover:text-[#F7E7CE] transition-colors" onClick={() => setActiveDropdown(null)}>360 Videobooth</Link>
                    <Link to="/mobile-photobooth" className="block text-gray-600 hover:text-[#F7E7CE] transition-colors" onClick={() => setActiveDropdown(null)}>Mobile Photobooth</Link>
                  </div>
                )}
              </div>

              <Link to="/faq" className="text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium">FAQ</Link>
              <Link to="/gallery" className="text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium">GALLERY</Link>

              {/* Other Rentals Dropdown - Mobile */}
              <div className="relative">
                <button onClick={() => toggleDropdown('rentals')} className="flex items-center justify-between w-full text-gray-700 hover:text-[#F7E7CE] transition-colors font-medium" aria-expanded={activeDropdown === 'rentals'} aria-controls="dd-rentals">
                  <span>OTHER RENTALS</span>
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === 'rentals' && (
                  <div id="dd-rentals" className="mt-2 ml-4 space-y-2">
                    <Link to="/speakers" className="block text-gray-600 hover:text-[#F7E7CE] transition-colors" onClick={() => setActiveDropdown(null)}>Speakers</Link>
                    <Link to="/stanchions" className="block text-gray-600 hover:text-[#F7E7CE] transition-colors" onClick={() => setActiveDropdown(null)}>Stanchions + Red Carpet</Link>
                    <Link to="/power-station" className="block text-gray-600 hover:text-[#F7E7CE] transition-colors" onClick={() => setActiveDropdown(null)}>Power Station</Link>
                    <Link to="/props" className="block text-gray-600 hover:text-[#F7E7CE] transition-colors" onClick={() => setActiveDropdown(null)}>Props</Link>
                    <Link to="/lighting" className="block text-gray-600 hover:text-[#F7E7CE] transition-colors" onClick={() => setActiveDropdown(null)}>Lighting</Link>
                  </div>
                )}
              </div>

              <Link
                to="/book-now"
                className="bg-[#B5A99A] text-red-600 px-6 py-2 rounded-full hover:bg-[#F7E7CE] hover:text-red-700 transition-colors font-medium text-center"
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
