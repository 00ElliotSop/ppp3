import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Users, Clock, Award } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    { 
      src: '/main.JPG', 
      title: 'PROJECT PARTY PRODUCTIONS',
      subtitle: 'Creating Unforgettable Moments'
    },
    { 
      src: '/20250804_204800341.jpg', 
      title: '360 PHOTOBOOTH',
      subtitle: 'Interactive Video Experience'
    },
    { 
      src: '/20250804_204445724.jpg', 
      title: 'MOBILE PHOTOBOOTH',
      subtitle: 'Professional Photography'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div>
      {/* Hero Carousel */}
      <section className="relative h-screen overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
              fetchpriority={index === 0 ? "high" : "auto"}
              loading={index === 0 ? "eager" : "lazy"}
              decoding={index === 0 ? "sync" : "async"}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <div className="max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">{image.title}</h1>
                <p className="text-xl md:text-2xl lg:text-3xl mb-8">{image.subtitle}</p>
                <Link
                  to="/book-now"
                  className="inline-block bg-[#B5A99A] text-white px-12 py-6 rounded-full text-xl font-semibold hover:bg-[#F7E7CE] hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  BOOK NOW
                </Link>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all z-10"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 360 Photobooth */}
            <div className="group cursor-pointer">
              <Link to="/360-photobooth">
                <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6">
                  <img
                    src="/20250804_1829240671-ezgif.com-speed.gif"
                    alt="360 Photobooth"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">360 PHOTOBOOTH</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create stunning 360-degree videos with our state-of-the-art rotating platform. 
                  Your guests will feel like celebrities as they pose in the center while our camera 
                  captures them from every angle.
                </p>
              </Link>
            </div>

            {/* Mobile Photobooth */}
            <div className="group cursor-pointer">
              <Link to="/mobile-photobooth">
                <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6">
                  <img
                    src="/DSC_0125.JPG"
                    alt="Mobile Photobooth"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">MOBILE PHOTOBOOTH</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional photography setup with high-quality camera, studio lighting, 
                  and instant printing. Perfect for traditional photos with a modern twist 
                  and customizable templates.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Why Choose Project Party Productions?</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/DSC_0376 2.JPG"
                alt="Professional Event Setup"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#F7E7CE] p-3 rounded-full">
                  <Users className="text-gray-800" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Owner-Operators</h3>
                  <p className="text-gray-600">We're not just vendors - we're passionate owner-operators who personally ensure every event exceeds expectations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#F7E7CE] p-3 rounded-full">
                  <Award className="text-gray-800" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Professional Quality</h3>
                  <p className="text-gray-600">High-end equipment, professional lighting, and attention to detail that rivals industry leaders.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#F7E7CE] p-3 rounded-full">
                  <Clock className="text-gray-800" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Reliable Service</h3>
                  <p className="text-gray-600">We arrive early, stay late, and handle every detail so you can focus on enjoying your event.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#F7E7CE] p-3 rounded-full">
                  <Star className="text-gray-800" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Entertainment</h3>
                  <p className="text-gray-600">We don't just stand around - we engage with guests, help with poses, and create an energetic atmosphere.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#F7E7CE] p-3 rounded-full">
                  <Users className="text-gray-800" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Complete Setup</h3>
                  <p className="text-gray-600">From backdrops to props to lighting - everything is included and professionally coordinated.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#F7E7CE] p-3 rounded-full">
                  <Award className="text-gray-800" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Memorable Keepsakes</h3>
                  <p className="text-gray-600">Instant prints, digital galleries, and custom templates ensure guests have lasting memories.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/DSC_0125.JPG"
                alt="Interactive Photobooth Experience"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Meet the Team</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            At Project Party Productions, we're not just a team—we're owner-operators who live and breathe events. 
            We bring the energy, entertainment, and interaction that keeps guests laughing, spinning, and snapping all night long.
          </p>
          
          <div className="relative">
            <img
              src="/20250804_182858278 (2).jpg"
              alt="Project Party Productions Team"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Passionate Professionals</h3>
                <p className="text-lg">Creating unforgettable experiences, one event at a time</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Link
              to="/about-us"
              className="inline-block bg-[#B5A99A] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#F7E7CE] hover:text-black transition-all duration-300"
            >
              LEARN MORE ABOUT US
            </Link>
          </div>
        </div>
      </section>

      {/* Equipment Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Professional Equipment & Setup</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <Link to="/backdrops">
                <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4">
                  <img
                    src="/DSC_0381 2.JPG"
                    alt="Professional Backdrops"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Backdrops</h3>
                <p className="text-gray-600">Extensive collection of professional backdrops</p>
              </Link>
            </div>
            
            <div className="text-center group">
              <Link to="/lighting">
                <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4">
                  <img
                    src="/DSC_1148.JPG"
                    alt="Professional Lighting"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Studio Lighting</h3>
                <p className="text-gray-600">Professional lighting for perfect photos</p>
              </Link>
            </div>
            
            <div className="text-center group">
              <Link to="/props">
                <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4">
                  <img
                    src="/360.jpg"
                    alt="Fun Props"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Fun Props</h3>
                <p className="text-gray-600">Creative props for memorable photos</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#B5A99A] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Make Your Event Unforgettable?</h2>
          <p className="text-xl mb-12 leading-relaxed">
            Contact us today to check availability and discuss how we can make your special event extraordinary. 
            We're here to answer questions, provide quotes, and help you choose the perfect package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-now"
              className="bg-white text-[#B5A99A] px-12 py-4 rounded-full text-xl font-semibold hover:bg-[#F7E7CE] hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              BOOK NOW
            </Link>
            <a
              href="tel:647-957-2057"
              className="bg-transparent border-2 border-white text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-[#B5A99A] transition-all duration-300"
            >
              CALL US
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;