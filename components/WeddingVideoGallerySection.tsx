import React, { useRef, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface WeddingVideoGallerySectionProps {
  navigateTo: (page: string) => void;
}

const WeddingVideoGallerySection: React.FC<WeddingVideoGallerySectionProps> = ({ navigateTo }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

  // Video data with YouTube video IDs
  const videos = [
    { videoId: 'DKUbJeSndW0', thumbnail: 'https://img.youtube.com/vi/DKUbJeSndW0/maxresdefault.jpg' },
    { videoId: 'wgmpuUHY_hU', thumbnail: 'https://img.youtube.com/vi/wgmpuUHY_hU/maxresdefault.jpg' },
    { videoId: 'VpUbo8v47cg', thumbnail: 'https://img.youtube.com/vi/VpUbo8v47cg/maxresdefault.jpg' },
    { videoId: 'fddQFaASOLA', thumbnail: 'https://img.youtube.com/vi/fddQFaASOLA/maxresdefault.jpg' },
  ];

  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handlePlay = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  return (
    <section
      ref={sectionRef}
      className={`bg-[#f5ece4] dark:bg-dark-bg py-4 md:py-8 overflow-hidden relative transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-5'}`}
      style={{ marginLeft: 'var(--sqs-site-gutter, 2vw)', marginRight: 'var(--sqs-site-gutter, 2vw)', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}
    >
      {/* Content Wrapper */}
      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
          {videos.map((video, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
              {playingVideo === video.videoId ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="aspect-video"
                ></iframe>
              ) : (
                <>
                  <img
                    src={video.thumbnail}
                    alt={`${video.videoId} Thumbnail`}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white"
                    onClick={() => handlePlay(video.videoId)}
                  >
                    <div className="w-10 h-10 sm:w-12 h-12 bg-white/90 rounded-full flex items-center justify-center mt-2 sm:mt-4 group-hover:bg-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 sm:w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingVideoGallerySection;