import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface WeddingHighlightSectionProps {
  navigateTo: (page: string) => void;
}

const WeddingHighlightSection: React.FC<WeddingHighlightSectionProps> = ({ navigateTo }) => {
  const videoUrl = 'https://www.youtube.com/embed/JrO0EPgTT3Q?autoplay=1&mute=1&loop=1&playlist=JrO0EPgTT3Q&controls=0&showinfo=0&rel=0';
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={sectionRef}
      className={`bg-light-cream dark:bg-dark-bg py-16 md:py-24 overflow-hidden relative transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-5'}`}
      style={{ paddingBottom: 'calc(6vw + var(--sqs-site-gutter, 4vw))' }}
    >
      {/* Section Divider */}
      <div
        className="absolute bottom-0 left-0 w-full h-[6vw] z-[5]"
        style={{
          clipPath: 'url(#section-divider-wedding-highlight)',
        }}
      >
        <svg className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none">
          <clipPath id="section-divider-wedding-highlight" clipPathUnits="objectBoundingBox">
            <path d="M1.897,0.913 L1.897,0.913 l0,0 l-0.75,0.087 l-0.25,-0.087 l0,0 l-0.75,0.087 l-0.25,-0.087 l0,0 l-0.75,0.087 l-0.25,-0.087 L-0.897,-1 L1.897,-1 z" />
          </clipPath>
        </svg>
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1 1" preserveAspectRatio="none">
          <path
            className="fill-none stroke-none"
            d="M-100,0.5 L-100,1.5 M1.897,0.913 L1.897,0.913 l0,0 l-0.75,0.087 l-0.25,-0.087 l0,0 l-0.75,0.087 l-0.25,-0.087 l0,0 l-0.75,0.087 l-0.25,-0.087"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Trapezium-Shaped Video Frame */}
      <div className="relative z-10 mx-auto mt-12 w-11/12">
        <div
          className="relative aspect-video overflow-hidden rounded-lg"
          style={{
            clipPath: 'url(#trapezium-video-frame)',
          }}
        >
          <iframe
            className="w-full h-full object-cover"
            src={videoUrl}
            title="Amrutha & Sandeep Engagement Teaser"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {/* Overlay Text on Video */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 mix-blend-overlay"></div>
        </div>
        <svg className="hidden">
          <clipPath id="trapezium-video-frame" clipPathUnits="objectBoundingBox">
            <path d="M0.1,0 L0.9,0 L1,1 L0,1 Z" />
          </clipPath>
        </svg>
      </div>

      {/* Content Wrapper */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 items-start">
          {/* Logo Text */}
          <div className="text-center lg:text-left mt-8">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 dark:text-dark-text font-medium uppercase tracking-wider">
              Arif Photography
            </h2>
          </div>

          {/* Text Block */}
          <div className="mt-8 text-center lg:text-left">
            <p className="text-lg md:text-xl text-stone-700 dark:text-dark-text/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We capture the essence of your love story with cinematic precision and soulful artistry. Our wedding films and photos are crafted to reflect your unique journey, blending emotion with elegance.
            </p>
          </div>
        </div>

        {/* Navigation Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigateTo('blog')}
            className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-light text-base tracking-wider rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative z-10">Explore Our Stories</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="fixed top-10 right-10 w-24 h-24 bg-gradient-to-br from-amber-200/20 to-stone-300/20 rounded-full blur-xl"></div>
        <div className="fixed bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-stone-200/30 to-amber-200/30 rounded-full blur-lg"></div>
      </div>
    </section>
  );
};

export default WeddingHighlightSection;