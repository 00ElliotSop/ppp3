import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img
              src="/Logo-wide-white-footer.png"
              alt="Project Party Productions"
              className="h-16 w-auto mb-6"
              loading="lazy"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating unforgettable moments with professional photobooth services. 
              We bring energy, entertainment, and interaction that keeps guests engaged 
              throughout your special event.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-full hover:bg-[#B5A99A] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-full hover:bg-[#B5A99A] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-[#F7E7CE] transition-colors">Home</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-[#F7E7CE] transition-colors">Gallery</Link></li>
              <li><Link to="/about-us" className="text-gray-300 hover:text-[#F7E7CE] transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-[#F7E7CE] transition-colors">FAQ</Link></li>
              <li><Link to="/book-now" className="text-gray-300 hover:text-[#F7E7CE] transition-colors">Book Now</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/360-photobooth" className="text-gray-300 hover:text-[#F7E7CE] transition-colors">360 Photobooth</Link></li>
              <li><Link to="/mobile-photobooth" className="text-gray-300 hover:text-[#F7E7CE] transition-colors">Mobile Photobooth</Link></li>
              <li><Link to="/backdrops" className="text-gray-300 hover:text-[#F7E7CE] transition-colors">Backdrops</Link></li>
              <li><Link to="/speakers" className="text-gray-300 hover:text-[#F7E7CE] transition-colors">Speakers</Link></li>
              <li><Link to="/lighting" className="text-gray-300 hover:text-[#F7E7CE] transition-colors">Lighting</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Phone className="text-[#F7E7CE]" size={20} />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-300">647-957-2057</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-[#F7E7CE]" size={20} />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-300">info@projectpartyproductions.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-[#F7E7CE]" size={20} />
              <div>
                <p className="font-semibold">Service Area</p>
                <p className="text-gray-300">Greater Toronto Area</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Project Party Productions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;