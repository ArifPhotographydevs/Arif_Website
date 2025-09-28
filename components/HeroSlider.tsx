import React, { useState, useEffect, useCallback, useRef } from 'react';
import { HERO_SLIDES } from '../constants';

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [goToNext]);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollPosition = window.scrollY;
        const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
        const parallaxOffset = (scrollPosition - sectionTop) * 0.5;
        const images = sectionRef.current.querySelectorAll('.parallax-image');
        images.forEach((img) => {
          (img as HTMLElement).style.transform = `translateY(${parallaxOffset}px) scale(1.1)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Swipe gesture handling
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) {
      touchStartX.current = e.touches[0].clientX;
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) {
      touchEndX.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = () => {
    if (window.innerWidth < 768 && touchStartX.current !== null && touchEndX.current !== null) {
      const deltaX = touchStartX.current - touchEndX.current;
      const threshold = 50; // Minimum swipe distance in pixels
      if (deltaX > threshold) {
        goToNext(); // Swipe left -> next slide
      } else if (deltaX < -threshold) {
        goToPrevious(); // Swipe right -> previous slide
      }
      touchStartX.current = null;
      touchEndX.current = null;
    }
  };

  return (
    <section ref={sectionRef} className="relative w-full h-screen">
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {HERO_SLIDES.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="relative z-10 parallax-image"
              style={{
                width: '100%',
                height: '110%',
                objectFit: 'cover',
                objectPosition: 'center',
                willChange: 'transform',
              }}
            />
            <div
              className={`absolute inset-0 flex sm:justify-center justify-end items-center z-20 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              } font-garamond text-2xl sm:text-4xl md:text-5xl font-medium uppercase leading-tight tracking-wider sm:mt-8 lg:mt-0 text-white text-shadow-sm pr-4`}
            >
              {slide.subtitle}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-4 z-30">
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
    </section>
  );
};

export default HeroSlider;