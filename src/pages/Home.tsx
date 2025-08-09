import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const heroImages = [
    '/1f.png',
    '/2a.png',
    '/3a.png',
    '/4a.png'
  ];

  const testimonials = [
    {
      name: "Samantha D.",
      location: "Edmonton, AB",
      rating: 5,
      text: "SO WORTH IT — 10/10 WOULD BOOK AGAIN! If you're thinking about getting a photo booth — just do it! Forever Photobooth's setup looked premium and added so much fun to our wedding. The touchscreen was easy to use, and the print quality blew me away."
    },
    {
      name: "Emily R.",
      location: "Toronto, ON",
      rating: 5,
      text: "GREAT EXPERIENCE FROM START TO FINISH! We had the mirror booth at our reception and it was a total hit! Guests of all ages were lining up to use it. The props, quality of photos, and instant prints were amazing. I highly recommend them to anyone looking for that wow-factor at their event."
    },
    {
      name: "Ahmed K.",
      location: "Mississauga, ON",
      rating: 5,
      text: "PROFESSIONAL, FUN, AND COMPLETELY HASSLE-FREE! I booked them for my engagement party and everything was seamless. They responded quickly, customized the photo strip with our names and date, and even helped us with a guestbook using the prints. Best decision we made."
    },
    {
      name: "Jessica M.",
      location: "Vaughan, ON",
      rating: 5,
      text: "Amazing service and quality! The 360 booth was the highlight of our corporate event. Everyone loved it and the videos came out incredible."
    },
    {
      name: "Michael T.",
      location: "Brampton, ON",
      rating: 5,
      text: "Professional team, great equipment, and fantastic results. Our wedding guests are still talking about the photobooth!"
    },
    {
      name: "Sarah L.",
      location: "Oakville, ON",
      rating: 5,
      text: "Exceeded all expectations! The props were fun, the quality was amazing, and the team was so helpful throughout the entire process."
    },
    {
      name: "David P.",
      location: "Richmond Hill, ON",
      rating: 5,
      text: "Best photobooth experience ever! The mobile setup was perfect for our outdoor event and the prints were instant and high quality."
    },
    {
      name: "Lisa K.",
      location: "Markham, ON",
      rating: 5,
      text: "The team was incredibly professional and the equipment was top-notch. Our guests had a blast and we got amazing memories!"
    },
    {
      name: "Robert S.",
      location: "Toronto, ON",
      rating: 5,
      text: "From booking to the actual event, everything was seamless. The 360 booth added such a unique element to our celebration."
    },
    {
      name: "Amanda W.",
      location: "Etobicoke, ON",
      rating: 5,
      text: "Outstanding service! The backdrop options were beautiful and the final photos were magazine quality. Highly recommended!"
    }
  ];

  const whyChooseUsFeatures = [
    {
      image: '/3a.png',
      title: 'Forever Photobooth brings a professional studio ambience to your event',
      description: 'Professional lighting and high-quality equipment for stunning photos.'
    },
    {
      image: '/3b.png',
      title: 'High-Definition Images: Our photo booths deliver high-definition images, ensuring every smile and detail is captured in stunning clarity.',
      description: 'Crystal clear photos that capture every moment perfectly.'
    },
    {
      image: '/3c.png',
      title: 'We offer a variety of backdrops to suit any taste, ensuring your photos are unique and memorable.',
      description: 'Choose from our extensive collection of beautiful backdrops.'
    },
    {
      image: '/5a.png',
      title: 'Our modern, fun props will create hilarious photo opportunities and keep your guests entertained.',
      description: 'Extensive prop collection to make your photos fun and memorable.'
    },
    {
      image: '/5b.png',
      title: 'We create a seamless and easy booking process.',
      description: 'Simple booking process from start to finish.'
    },
    {
      image: '/5c.png',
      title: 'Excellent customer service and a first-class experience is our top priority.',
      description: 'Dedicated support team ensuring your event runs smoothly.'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="pt-24">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
            </div>
          ))}
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
            <div className="max-w-4xl px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                PROJECT PARTY PRODUCTIONS
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Creating Unforgettable Moments with Professional Photobooth Services
              </p>
              <Link
                to="/book-now"
                className="bg-[#F7E7CE] text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#B5A99A] hover:text-white transition-all duration-300 inline-block"
              >
                BOOK NOW
              </Link>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all z-20"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all z-20"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
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
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/1b.png"
                alt="Meet the Team"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">MEET THE TEAM</h2>
              <p className="text-[#B5A99A] text-xl font-semibold mb-6">
                WE BRING THE ENERGY, HANDLE EVERY DETAIL, AND CRAFT UNFORGETTABLE MOMENTS. PROFESSIONALLY, PASSIONATELY, AND ALWAYS WITH A SMILE
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At Project Party Productions, we're not just a team—we're owner-operators who live and breathe events. We know what it takes to make a party unforgettable because we've been to enough events to know what works (and what doesn't). You'll never see us just standing around like mannequins—we bring the energy, entertainment, and interaction that keeps guests laughing, spinning, and snapping all night long. Our crew is here to cater to every request with a smile, ensuring your event is not only seamless but full of life and fun. Because at the end of the day, your celebration deserves more than just a photo booth—it deserves an experience!
              </p>
              <Link
                to="/about-us"
                className="bg-[#B5A99A] text-white px-8 py-3 rounded-full hover:bg-[#F7E7CE] hover:text-gray-900 transition-all duration-300 inline-block font-semibold"
              >
                ABOUT US
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">WHY CHOOSE US?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg mx-auto"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 leading-tight">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">TESTIMONIALS</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-[#B5A99A] rounded-2xl p-8 text-white min-h-[300px] flex flex-col justify-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-center mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="text-center">
                <p className="text-[#F7E7CE] font-semibold text-lg">
                  {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>

            {/* Testimonial Controls */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#F7E7CE] text-gray-900 p-3 rounded-full hover:bg-white transition-all shadow-lg"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#F7E7CE] text-gray-900 p-3 rounded-full hover:bg-white transition-all shadow-lg"
            >
              <ChevronRight size={20} />
            </button>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-[#B5A99A]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;