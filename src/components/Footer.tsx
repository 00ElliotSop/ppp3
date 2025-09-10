import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-gray-900 text-white overflow-x-hidden">
      <div className="bg-[#F7E7CE] text-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="mb-6">Subscribe to get the latest news and updates from Project Party Productions</p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B5A99A]"
              required
            />
            <button
              type="submit"
              className="bg-[#B5A99A] text-white px-6 py-2 rounded-r-lg hover:bg-gray-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <img
              src="/Logo-wide-white-footer.png"
              alt="Project Party Productions"
              className="h-16 w-auto mb-4 rounded-lg"
              fetchpriority="high"
              loading="lazy"
              decoding="async"
            />
            <p className="text-gray-300 mb-4">
              Creating unforgettable moments with professional photobooth services and event rentals.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/projectpartyproductions"
                className="text-gray-300 hover:text-[#F7E7CE] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          {/* rest unchanged */}
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Project Party Productions. Developed and Designed by{' '}
            <a
              href="https://elliotsop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F7E7CE] transition-colors"
            >
              ElliotSop
            </a>.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms-of-service" onClick={scrollToTop} className="text-gray-400 hover:text-[#F7E7CE] text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
