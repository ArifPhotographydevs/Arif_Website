import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const QuoteIcon = () => (
    <svg className="w-8 h-8 text-light-text/10 dark:text-dark-text/20" fill="currentColor" viewBox="0 0 32 32">
        <path d="M9.333 22.667h-5.333v-10h6.667c0-3.68-2.987-6.667-6.667-6.667h0v-2.667c5.147 0 9.333 4.187 9.333 9.333v10zM28 22.667h-5.333v-10h6.667c0-3.68-2.987-6.667-6.667-6.667h0v-2.667c5.147 0 9.333 4.187 9.333 9.333v10z"></path>
    </svg>
);


const Testimonials: React.FC = () => {
    return (
        <section className="py-8 md:py-12 bg-light-bg dark:bg-dark-bg">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-8">
                    <h2 className="font-garamond text-4xl md:text-5xl font-bold">Kind Words</h2>
                    <p className="text-lg text-light-text/70 dark:text-dark-text/70 mt-2">What our clients say about their experience.</p>
                </div>
                <div className="relative max-w-2xl mx-auto">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        navigation={{
                            nextEl: '.swiper-button-next-testimonials',
                            prevEl: '.swiper-button-prev-testimonials',
                        }}
                        className="testimonials-swiper"
                    >
                        {TESTIMONIALS.map((testimonial, index) => (
                             <SwiperSlide key={index}>
                                <div className="bg-light-secondary-bg dark:bg-dark-secondary-bg p-8 md:p-12 rounded-lg shadow-sm text-center">
                                    {testimonial.avatar && (
                                        <img src={testimonial.avatar} alt={testimonial.author} className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-light-bg dark:border-dark-bg shadow-md"/>
                                    )}
                                    <div className="relative">
                                        <div className="absolute -top-4 left-0"><QuoteIcon /></div>
                                        <p className="text-lg md:text-xl italic text-light-text/90 dark:text-dark-text/90 leading-relaxed z-10 relative">
                                            {testimonial.quote}
                                        </p>
                                        <div className="absolute -bottom-4 right-0 transform scale-x-[-1]"><QuoteIcon /></div>
                                    </div>
                                    <div className="mt-8">
                                        <p className="font-garamond font-bold text-xl">{testimonial.author}</p>
                                        <p className="text-light-text/60 dark:text-dark-text/60">{testimonial.event}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                     {/* Custom Navigation */}
                    <div className="swiper-button-prev-testimonials absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-10 cursor-pointer p-3 bg-light-bg dark:bg-dark-bg rounded-full shadow-md hover:bg-light-secondary-bg dark:hover:bg-dark-secondary-bg transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                    </div>
                    <div className="swiper-button-next-testimonials absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-10 cursor-pointer p-3 bg-light-bg dark:bg-dark-bg rounded-full shadow-md hover:bg-light-secondary-bg dark:hover:bg-dark-secondary-bg transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;