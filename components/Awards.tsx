import React, { useRef } from 'react';
import { AWARDS, AWARD_SECTION_IMAGE } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Awards: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2, triggerOnce: true });

  return (
    <section className="bg-light-secondary-bg dark:bg-dark-secondary-bg" ref={ref}>
      <div className={`container mx-auto px-6 py-12 md:py-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative overflow-hidden rounded-lg shadow-xl aspect-[4/5] w-full">
              <img 
                src={AWARD_SECTION_IMAGE}
                alt="Award winning photography example"
                className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${isVisible ? 'scale-100' : 'scale-110'}`}
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="font-garamond text-4xl md:text-5xl font-bold">Award-Winning Photography</h2>
            <p className="text-lg text-light-text/70 dark:text-dark-text/70 mt-4 mb-10">
              Our dedication to the craft has been recognized by some of the most prestigious awards in the industry.
            </p>
            <div className="space-y-6">
              {AWARDS.map((award, index) => (
                <div 
                  key={index}
                  className={`border-l-4 border-light-accent dark:border-dark-accent pl-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  <p className="text-sm font-bold uppercase tracking-wider text-light-text/50 dark:text-dark-text/50">{award.year} &bull; {award.issuer}</p>
                  <h3 className="font-garamond text-2xl font-semibold">{award.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;