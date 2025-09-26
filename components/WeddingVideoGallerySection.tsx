import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface WeddingVideoGallerySectionProps {
  navigateTo: (page: string) => void;
}

const WeddingVideoGallerySection: React.FC<WeddingVideoGallerySectionProps> = ({ navigateTo }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

  // Video data with thumbnails and details
  const videos = [
    { thumbnail: 'https://img.youtube.com/vi/DKUbJeSndW0/maxresdefault.jpg' },
    { thumbnail: 'https://img.youtube.com/vi/wgmpuUHY_hU/maxresdefault.jpg' },
    { thumbnail: 'https://img.youtube.com/vi/VpUbo8v47cg/maxresdefault.jpg'},
    { thumbnail: 'https://img.youtube.com/vi/fddQFaASOLA/maxresdefault.jpg' },
  ];    

  return (
    <section
      ref={sectionRef}
      className={`bg-[#f5ece4] dark:bg-dark-bg py-8 md:py-12 overflow-hidden relative transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-5'}`}
      style={{ marginLeft: 'var(--sqs-site-gutter, 4vw)', marginRight: 'var(--sqs-site-gutter, 4vw)', paddingTop: '1rem', paddingBottom: '1rem' }}
    >
      {/* Content Wrapper */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 gap-4">
          {videos.map((video, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
              <img
                src={video.thumbnail}
                alt={`${video.name} Thumbnail`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
                <h2 className="text-4xl font-bold uppercase">{video.name}</h2>
                <p className="text-sm">{video.location}</p>
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center mt-4 group-hover:bg-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingVideoGallerySection;