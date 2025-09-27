import React from 'react';
import { TOP_PICKS } from '../constants';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const TopPicks: React.FC = () => {
  return (
    <section className="py-8 md:py-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="font-garamond text-4xl md:text-5xl font-bold">Featured Stories</h2>
          <p className="text-lg text-light-text/70 dark:text-dark-text/70 mt-2">A curated selection of our favorite shoots.</p>
        </div>
        
        <div className="relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: '.swiper-pagination-top-picks',
                    clickable: true,
                }}
                navigation={{
                    nextEl: '.swiper-button-next-top-picks',
                    prevEl: '.swiper-button-prev-top-picks',
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="top-picks-swiper"
            >
                {TOP_PICKS.map((pick, index) => (
                    <SwiperSlide key={index}>
                        <div className="group relative w-full h-[450px] overflow-hidden rounded-lg shadow-lg">
                        <img src={pick.image} alt={pick.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                            <span className="text-xs uppercase tracking-widest bg-white/20 px-2 py-1 rounded-full">{pick.category}</span>
                            <h3 className="font-garamond text-2xl font-bold mt-2">{pick.title}</h3>
                            <p className="text-sm opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out mt-2">{pick.description}</p>
                        </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            {/* Custom Navigation */}
            <div className="swiper-button-prev-top-picks absolute top-1/2 -translate-y-1/2 left-0 z-10 cursor-pointer p-4 bg-light-bg/50 dark:bg-dark-bg/50 rounded-full hover:bg-light-bg dark:hover:bg-dark-bg transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </div>
            <div className="swiper-button-next-top-picks absolute top-1/2 -translate-y-1/2 right-0 z-10 cursor-pointer p-4 bg-light-bg/50 dark:bg-dark-bg/50 rounded-full hover:bg-light-bg dark:hover:bg-dark-bg transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </div>
            
            {/* Custom Pagination */}
            <div className="swiper-pagination-top-picks text-center mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default TopPicks;