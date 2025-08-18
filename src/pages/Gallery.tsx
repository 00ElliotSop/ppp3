import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { src: '/20250804_192508408.jpg', description: '360 Photobooth in action at a wedding reception with guests enjoying the experience' },
    { src: '/20250804_212732774.jpg', description: 'Mobile photobooth setup with professional lighting and backdrop at corporate event' },
    { src: '/20250804_205503768.jpg', description: 'Birthday party celebration with colorful props and happy guests' },
    { src: '/20250804_180956852.jpg', description: 'Elegant wedding setup with white flower wall backdrop and professional lighting' },
    { src: '/20250804_193822216.jpg', description: 'Corporate gala event featuring our premium photobooth package' },
    { src: '/20250804_200807927.jpg', description: 'Outdoor wedding ceremony with portable power station and wireless setup' },
    { src: '/20250804_204137279.jpg', description: 'Anniversary celebration with gold sequin backdrop and romantic lighting' },
    { src: '/20250804_205236101.jpg', description: 'Graduation party with fun props and instant photo printing' },
    { src: '/20250804_210506449.jpg', description: 'Holiday party setup with seasonal decorations and themed props' },
    { src: '/20250804_204450963.jpg', description: 'Baby shower event with pastel backdrop and delicate lighting' },
    { src: '/20250804_204900014.jpg', description: 'Corporate team building event with interactive photobooth experience' },
    { src: '/20250804_194812971.jpg', description: 'Sweet 16 party with vibrant lighting and trendy backdrop' },
    { src: '/20250804_193618221.jpg', description: 'Wedding reception with red carpet entrance and stanchions' },
    { src: '/20250804_181238676.jpg', description: 'Charity gala featuring our premium lighting package' },
    { src: '/20250804_192508408.jpg', description: 'Engagement party with romantic floral backdrop and soft lighting' },
    { src: '/20250804_212732774.jpg', description: 'Corporate product launch with branded backdrop and professional setup' },
    { src: '/20250804_205503768.jpg', description: 'Quinceañera celebration with elegant gold and pink theme' },
    { src: '/20250804_180956852.jpg', description: 'Retirement party with classic backdrop and timeless props' },
    { src: '/20250804_193822216.jpg', description: 'New Year\'s Eve party with glittery backdrop and festive props' },
    { src: '/20250804_200807927.jpg', description: 'Bridal shower with white and gold theme and delicate flowers' },
    { src: '/20250804_204137279.jpg', description: 'Bar Mitzvah celebration with traditional and modern elements' },
    { src: '/20250804_205236101.jpg', description: 'Company anniversary event with professional branding and setup' },
    { src: '/20250804_210506449.jpg', description: 'Prom night setup with glamorous backdrop and elegant lighting' },
    { src: '/20250804_204450963.jpg', description: 'Family reunion with multi-generational fun and classic props' },
    { src: '/20250804_204900014.jpg', description: 'Fundraising event with branded backdrop and professional presentation' },
    { src: '/20250804_194812971.jpg', description: 'Wedding anniversary with vintage-inspired backdrop and romantic ambiance' },
    { src: '/20250804_212404754.jpg', description: 'Corporate holiday party with festive decorations and seasonal props' },
    { src: '/20250804_212404754.jpg', description: 'Professional event setup with premium lighting and backdrop' },
    { src: '/20250804_210722523.jpg', description: 'Guests enjoying the interactive photobooth experience' },
    { src: '/20250804_210332810.jpg', description: 'Behind the scenes of our professional event service' },
    { src: '/20250804_210043845.jpg', description: 'Event highlights showcasing memorable guest interactions' },
    { src: '/20250804_205655968.jpg', description: 'Professional photography capturing special moments at the event' },
    { src: '/20250804_214331446.jpg', description: 'Behind the scenes of our photobooth experience in action' },
    { src: '/DSC_0376 2.JPG', description: 'Professional event setup showcasing our premium service quality' },
    { src: '/20250804_213017940.jpg', description: 'Event highlights capturing memorable moments and guest interactions' }
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
        <link rel="preload" as="image" href="/20250804_204800341.jpg" />
        <img
          src="/20250804_204800341.jpg"
          alt="Gallery Hero"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="sync"
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
          {/* Preload first few gallery images */}
          <link rel="preload" as="image" href={galleryImages[0].src} />
          <link rel="preload" as="image" href={galleryImages[1].src} />
          <link rel="preload" as="image" href={galleryImages[2].src} />
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
                    loading={index < 6 ? "eager" : "lazy"}
                    decoding={index < 6 ? "sync" : "async"}
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