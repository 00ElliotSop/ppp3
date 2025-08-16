import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { src: '/360.jpg', description: '360 Photobooth in action at a wedding reception with guests enjoying the experience' },
    { src: '/360-1.jpg', description: 'Mobile photobooth setup with professional lighting and backdrop at corporate event' },
    { src: '/360.jpg', description: 'Birthday party celebration with colorful props and happy guests' },
    { src: '/360-1.jpg', description: 'Elegant wedding setup with white flower wall backdrop and professional lighting' },
    { src: '/360.jpg', description: 'Corporate gala event featuring our premium photobooth package' },
    { src: '/360-1.jpg', description: 'Outdoor wedding ceremony with portable power station and wireless setup' },
    { src: '/360.jpg', description: 'Anniversary celebration with gold sequin backdrop and romantic lighting' },
    { src: '/360-1.jpg', description: 'Graduation party with fun props and instant photo printing' },
    { src: '/360.jpg', description: 'Holiday party setup with seasonal decorations and themed props' },
    { src: '/360-1.jpg', description: 'Baby shower event with pastel backdrop and delicate lighting' },
    { src: '/360.jpg', description: 'Corporate team building event with interactive photobooth experience' },
    { src: '/360-1.jpg', description: 'Sweet 16 party with vibrant lighting and trendy backdrop' },
    { src: '/360.jpg', description: 'Wedding reception with red carpet entrance and stanchions' },
    { src: '/360-1.jpg', description: 'Charity gala featuring our premium lighting package' },
    { src: '/360.jpg', description: 'Engagement party with romantic floral backdrop and soft lighting' },
    { src: '/360-1.jpg', description: 'Corporate product launch with branded backdrop and professional setup' },
    { src: '/360.jpg', description: 'Quinceañera celebration with elegant gold and pink theme' },
    { src: '/360-1.jpg', description: 'Retirement party with classic backdrop and timeless props' },
    { src: '/360.jpg', description: 'New Year\'s Eve party with glittery backdrop and festive props' },
    { src: '/360-1.jpg', description: 'Bridal shower with white and gold theme and delicate flowers' },
    { src: '/360.jpg', description: 'Bar Mitzvah celebration with traditional and modern elements' },
    { src: '/360-1.jpg', description: 'Company anniversary event with professional branding and setup' },
    { src: '/360.jpg', description: 'Prom night setup with glamorous backdrop and elegant lighting' },
    { src: '/360-1.jpg', description: 'Family reunion with multi-generational fun and classic props' },
    { src: '/360.jpg', description: 'Fundraising event with branded backdrop and professional presentation' },
    { src: '/360-1.jpg', description: 'Wedding anniversary with vintage-inspired backdrop and romantic ambiance' },
    { src: '/360.jpg', description: 'Corporate holiday party with festive decorations and seasonal props' },
    { src: '/360-1.jpg', description: 'Milestone birthday celebration with personalized backdrop and special lighting' },
    { src: '/360.jpg', description: 'Grand opening event with branded materials and professional photography' },
    { src: '/360-1.jpg', description: 'Baptism celebration with elegant white backdrop and soft, natural lighting' },
    { src: '/360.jpg', description: 'School dance with energetic lighting and fun, age-appropriate props' },
    { src: '/360-1.jpg', description: 'Wedding ceremony with outdoor setup and natural backdrop integration' },
    { src: '/360.jpg', description: 'Corporate awards ceremony with sophisticated backdrop and professional ambiance' },
    { src: '/360-1.jpg', description: 'Halloween party with themed props and dramatic lighting effects' },
    { src: '/360.jpg', description: 'Valentine\'s Day event with romantic red and pink backdrop and intimate lighting' }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-96">
        <img
          src="/360.jpg"
          alt="Gallery Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">GALLERY</h1>
            <p className="text-xl md:text-2xl">
              Explore our collection of memorable moments and stunning setups
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => openModal(index)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={image.src}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={galleryImages[selectedImage].src}
              alt={`Gallery ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-3 rounded-full transition-all border-2 border-white shadow-lg"
            >
              <X size={28} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Description */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-6 py-4 rounded-lg max-w-md text-center">
              <p className="text-sm mb-2">{galleryImages[selectedImage].description}</p>
              <p className="text-xs opacity-75">{selectedImage + 1} / {galleryImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;