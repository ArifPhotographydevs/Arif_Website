import React, { useRef } from 'react';
import { CREATIVE_PROCESS_IMAGES } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const VisionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-light-accent dark:text-dark-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-1.125 6.011 6.011 0 001.125-1.5m-2.625 2.625a6.01 6.01 0 01-1.5-1.125 6.011 6.011 0 01-1.125-1.5m2.625 2.625v-2.625m0 0h-2.625m2.625 0h2.625M9.75 6.75h4.5M9.75 9V6.75M9.75 9h4.5m-4.5 0v2.25m4.5 0V9m-4.5 2.25h4.5M12 18.75a.75.75 0 00.75-.75V18a.75.75 0 00-.75-.75h0a.75.75 0 00-.75.75v.001c0 .414.336.75.75.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 21a3 3 0 013-3h0a3 3 0 013 3v-1.5a3 3 0 01-3-3h0a3 3 0 01-3 3V21z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM17.25 6a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM6.75 6a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 016.75 6z" />
    </svg>
);

const SessionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-light-accent dark:text-dark-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
    </svg>
);

const CurationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-light-accent dark:text-dark-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 013.388-1.62" />
    </svg>
);

const processSteps = [
    {
        icon: <VisionIcon />,
        title: 'Consultation & Vision',
        description: 'We start with a conversation to understand your story and vision, ensuring every detail is planned to perfection.'
    },
    {
        icon: <SessionIcon />,
        title: 'The Photo Session',
        description: 'A relaxed and enjoyable experience where we guide you naturally, capturing authentic emotions and beautiful compositions.'
    },
    {
        icon: <CurationIcon />,
        title: 'Curation & Artistry',
        description: 'Each image is meticulously selected and artfully edited to enhance its beauty, resulting in a timeless gallery of memories.'
    }
];

const CreativeProcess: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-light-bg dark:bg-dark-bg overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Image Column */}
                    <div className={`relative transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
                            <img 
                                src={CREATIVE_PROCESS_IMAGES.main}
                                alt="Photographer collaborating with a client"
                                className="w-full h-full object-cover rounded-lg shadow-2xl"
                            />
                            <div className="absolute -bottom-8 -right-8 w-48 h-56 hidden lg:block">
                                <img
                                    src={CREATIVE_PROCESS_IMAGES.detail}
                                    alt="Close-up of a camera lens"
                                    className="w-full h-full object-cover rounded-lg shadow-xl border-4 border-light-bg dark:border-dark-bg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className={`transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <h2 className="font-garamond text-4xl md:text-5xl font-bold">From Vision to Masterpiece</h2>
                        <p className="text-lg text-light-text/70 dark:text-dark-text/70 mt-4 mb-10">
                            Our creative process is a collaborative journey. We combine meticulous planning with spontaneous artistry to capture the true essence of your story.
                        </p>

                        <div className="space-y-8">
                            {processSteps.map((step, index) => (
                                <div key={index} className="flex items-start gap-6">
                                    <div className="flex-shrink-0 mt-1">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-garamond text-xl font-bold">{step.title}</h3>
                                        <p className="text-light-text/70 dark:text-dark-text/70 mt-1">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreativeProcess;
