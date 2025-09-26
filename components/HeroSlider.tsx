import React, { useState, useEffect, useCallback } from 'react';
import { HERO_SLIDES } from '../constants';

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [goToNext]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {HERO_SLIDES.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <img 
              src={slide.image} 
              alt={slide.title} 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'grayscale(100%) brightness(0.8) contrast(1.2)', // Black-and-white with adjusted brightness and contrast
              }}
              className="relative z-10"
            />
            {/* Old TV screen effect with scanlines and static */}
            <div 
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                background: 'linear-gradient(rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.3) 50%)',
                backgroundSize: '100% 4px', // Scanlines
                opacity: 0.5,
                mixBlendMode: 'overlay',
                animation: 'tvStatic 0.3s infinite steps(1), tvFlicker 2s infinite ease-in-out',
                boxShadow: 'inset 0 0 60px rgba(0, 0, 0, 0.7)', // Vignette for TV effect
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 z-30"></div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 md:p-10">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ease-in-out absolute ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="font-serif text-lg md:text-2xl mb-4 tracking-widest font-bold text-yellow-200">{slide.subtitle}</p>
            <h2 className="font-serif font-black text-4xl md:text-5xl lg:text-6xl uppercase leading-tight text-yellow-100 drop-shadow-lg">
              {slide.title}
            </h2>
          </div>
        ))}
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-4">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-yellow-200 scale-150' : 'bg-yellow-100/50'
            }`}
          ></button>
        ))}
      </div>

      {/* Inline styles for old TV animations */}
      <style>
        {`
          @keyframes tvStatic {
            0% { transform: translate(0, 0); }
            25% { transform: translate(-1px, -1px); }
            50% { transform: translate(1px, 1px); }
            75% { transform: translate(-1px, 1px); }
            100% { transform: translate(1px, -1px); }
          }
          @keyframes tvFlicker {
            0% { opacity: 0.5; }
            2% { opacity: 0.45; }
            4% { opacity: 0.55; }
            6% { opacity: 0.48; }
            8% { opacity: 0.52; }
            50% { opacity: 0.5; }
            100% { opacity: 0.5; }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSlider;