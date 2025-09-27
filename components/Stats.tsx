import React, { useRef } from 'react';
import { STATS, CLIENT_LOGOS } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useCountUp } from '../hooks/useCountUp';

const AnimatedStat: React.FC<{ stat: (typeof STATS)[0] }> = ({ stat }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(ref, { threshold: 0.5, triggerOnce: true });
    const count = useCountUp(isVisible ? stat.value : 0, 2000);
    const Icon = stat.icon;

    return (
        <div ref={ref} className="text-center">
            <Icon className="w-12 h-12 mx-auto mb-4 text-light-accent dark:text-dark-accent" />
            <p className="font-garamond text-5xl font-bold">
                {count}{stat.suffix}
            </p>
            <p className="text-lg text-light-text/70 dark:text-dark-text/70 mt-2">{stat.label}</p>
        </div>
    );
};


const Stats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-16 md:py-24" ref={ref}>
        <div className={`container mx-auto px-6 transition-opacity duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-center mb-16">
                <h2 className="font-garamond text-4xl md:text-5xl font-bold">Our Impact in Numbers</h2>
                <p className="text-lg text-light-text/70 dark:text-dark-text/70 mt-2 max-w-2xl mx-auto">We are proud of the work we do and the relationships we build.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
                {STATS.map((stat, index) => (
                    <AnimatedStat key={index} stat={stat} />
                ))}
            </div>

            <div className="mt-24">
                <h3 className="text-center text-xl font-semibold uppercase text-light-text/60 dark:text-dark-text/60 tracking-widest mb-8">Trusted By</h3>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                    {CLIENT_LOGOS.map(client => (
                        <img 
                            key={client.name} 
                            src={client.logo} 
                            alt={client.name} 
                            className="h-8 md:h-10 dark:invert opacity-60 hover:opacity-100 transition-opacity duration-300" 
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Stats;