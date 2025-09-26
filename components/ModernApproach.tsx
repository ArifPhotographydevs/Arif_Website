import React, { useRef } from 'react';
import { MODERN_APPROACH_IMAGES, FEATURED_LOGOS } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ModernApproach: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

    return (
        <section ref={sectionRef} className="bg-light-cream dark:bg-dark-bg py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-5'}`}>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 items-start">
                        {/* LEFT COLUMN */}
                        <div className="relative z-10">
                            <img src={MODERN_APPROACH_IMAGES.portrait} alt="Bride portrait" className="w-full max-w-md h-auto object-cover filter grayscale shadow-lg" />
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="lg:-ml-16 relative">
                            <div className="lg:pt-16">
                                <h2 className="font-serif text-4xl md:text-5xl font-medium uppercase leading-tight tracking-wider mt-8 lg:mt-0">
                                    A Modern Approach
                                    <span className="block text-2xl md:text-3xl italic normal-case font-light my-1 md:my-2">to an</span>
                                    AGE OLD TRADITION
                                </h2>
                                <p className="mt-8 text-light-text/80 dark:text-dark-text/80 leading-relaxed">
                                    Considered to be the epitome of Modern Photography and Filmmaking, Arif Photography has transformed the wedding landscape on a regular basis. For almost a decade we have been creating photographs and films which are timeless and have been etched in memories of thousands of people forever.
                                </p>
                                <p className="mt-4 text-light-text/80 dark:text-dark-text/80 leading-relaxed">
                                    Awarded as the Wedding Filmmaker of the year for four consecutive years, Arif Photography is the only company listed on IMDB for its award winning films.
                                </p>
                            </div>
                            <img src={MODERN_APPROACH_IMAGES.scenic} alt="Scenic wedding photo" className="w-full h-auto object-cover filter grayscale shadow-lg mt-8" />
                        </div>
                    </div>
                    
                    {/* Logos */}
                   
                </div>
            </div>
        </section>
    );
};

export default ModernApproach;