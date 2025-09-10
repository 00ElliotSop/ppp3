import React from 'react';
import Gallery, { MediaItem } from '../components/Gallery';

const MobilePhotobooth: React.FC = () => {
  // Example gallery items (update to your real media paths in /profile)
  const galleryItems: MediaItem[] = [
    { id: 1, type: 'image', src: '/profile/mobile-1.jpg', alt: 'Mobile Photobooth 1' },
    { id: 2, type: 'image', src: '/profile/mobile-2.jpg', alt: 'Mobile Photobooth 2' },
    { id: 3, type: 'video', src: '/profile/mobile-demo.mp4', poster: '/profile/mobile-demo-poster.jpg', alt: 'Mobile demo' },
  ];

  return (
    <main className="pt-[110px] overflow-x-hidden">
      {/* HERO */}
      <section className="w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <h1 className="font-extrabold leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3rem)' }}>
            Ultimate Mobile Photobooth
          </h1>
          <p className="mt-4 text-gray-700" style={{ fontSize: 'clamp(1rem, 2.6vw, 1.125rem)' }}>
            Portable, fast, and built for incredible guest experiences—anywhere.
          </p>
        </div>
      </section>

      {/* NEW SECTION: High Quality Prints, Printed Instantly */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            High Quality Prints, Printed Instantly
          </h2>

          {/* Desktop: text left / media right; Mobile: media first */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Media (mobile first) */}
            <div className="order-1 md:order-2">
              {/* Replace with your GIF or image path in /profile */}
              <img
                src="/profile/dnp-ds620a-printer.gif"
                alt="High quality instant prints"
                className="w-full h-auto rounded-lg shadow"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Text */}
            <div className="order-2 md:order-1">
              <p className="text-gray-700 mb-4">
                We use professional-grade printers to deliver studio-quality prints in seconds.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>The printer that we use is the <strong>DNP DS620A</strong>, the best and quickest in the market</li>
                <li>Print in multiple formats (<strong>2x3</strong>, <strong>4x6</strong>, <strong>5x7</strong>, <strong>6x8</strong>, and much more!)</li>
                <li>Multiple picture finishes (<strong>Glossy</strong>, <strong>semi-glossy</strong>, <strong>matte</strong>, <strong>metallic</strong>, and <strong>pearl</strong>)</li>
                <li>All pictures come with a protective sleeve</li>
                <li>Just like our photobooth, our printer can be set up anywhere</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY (mixed media; click to open, no autoplay) */}
      <section className="w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <Gallery items={galleryItems} title="Mobile Photobooth Gallery" />
        </div>
      </section>
    </main>
  );
};

export default MobilePhotobooth;
