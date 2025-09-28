import React, { useState, useEffect, useCallback, useRef } from 'react';
import { HERO_SLIDES } from '../constants';

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section ref={sectionRef} className="relative w-full h-screen">
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
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
              className={`absolute top-1/4 left-4 right-4 z-20 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              } font-['EB_Garamond'] text-white text-xl md:text-2xl lg:text-3xl font-bold text-shadow-lg`}
            >
              {slide.overlayText}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 md:p-10 z-30">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ease-in-out absolute ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="font-['EB_Garamond'] text-lg md:text-2xl mb-4 tracking-widest font-bold text-yellow-200">
              {slide.subtitle}
            </p>
            <h2 className="font-['EB_Garamond'] font-black text-4xl md:text-5xl lg:text-6xl uppercase leading-tight text-yellow-100 drop-shadow-lg">
              {slide.title}
            </h2>
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