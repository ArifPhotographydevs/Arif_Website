import React from 'react';
import { PHOTOGRAPHER_PORTRAIT, ABOUT_TEXT, VALUES } from '../constants';
import { Value } from '../types';

const ValueCard: React.FC<{ value: Value }> = ({ value }) => {
    const Icon = value.icon;
    return (
        <div className="text-center p-6">
            <Icon className="w-12 h-12 mx-auto mb-4 text-light-accent dark:text-dark-accent" />
            <h3 className="font-serif text-2xl font-bold mb-2">{value.title}</h3>
            <p className="text-light-text/70 dark:text-dark-text/70">{value.description}</p>
        </div>
    );
};

const AboutPage: React.FC = () => {
  return (
    <div className="bg-light-bg dark:bg-dark-bg">
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative order-2 lg:order-1 flex justify-center">
               <div className="relative w-80 h-96 md:w-96 md:h-[480px] z-10">
                  <div className="absolute -top-4 -left-4 w-full h-full bg-light-secondary-bg dark:bg-dark-secondary-bg rounded-lg"></div>
                  <img 
                      src={PHOTOGRAPHER_PORTRAIT} 
                      alt="Arif, the photographer"
                      className="relative w-full h-full rounded-lg object-cover shadow-2xl"
                  />
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2 text-center lg:text-left z-20">
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight">{ABOUT_TEXT.intro.title}</h1>
               <div className="w-24 h-1 bg-light-accent dark:bg-dark-accent my-8 mx-auto lg:mx-0"></div>
              <div className="space-y-6 text-lg text-light-text/80 dark:text-dark-text/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                <p>{ABOUT_TEXT.intro.p1}</p>
                <p>{ABOUT_TEXT.intro.p2}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

       <section className="py-16 md:py-24 bg-light-secondary-bg dark:bg-dark-secondary-bg">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">My Core Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {VALUES.map(value => (
                        <ValueCard key={value.title} value={value} />
                    ))}
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-3 text-center lg:text-left">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">{ABOUT_TEXT.process.title}</h2>
                    <div className="space-y-6 text-lg text-light-text/80 dark:text-dark-text/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                        <p>{ABOUT_TEXT.process.p1}</p>
                        <p className="font-semibold text-light-text dark:text-dark-text text-xl mt-4">{ABOUT_TEXT.process.p2}</p>
                    </div>
                </div>
                <div className="lg:col-span-2 flex justify-center lg:justify-end">
                    <p className="font-serif text-5xl italic text-light-text/80 dark:text-dark-text/80" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Arif
                    </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;