import React from "react";
import { ICONIC_WEDDING_IMAGES } from "../constants";
import { Page } from "../App";

interface GalleryProps {
  navigateTo: (page: Page) => void;
}

const GalleryImageItem: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => (
  <div className={`group relative overflow-hidden ${className}`}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

const Gallery: React.FC<GalleryProps> = ({ navigateTo }) => {
  return (
    <section className="py-8 md:py-12 bg-light-secondary-bg dark:bg-dark-secondary-bg">
      <div className="container mx-auto px-0 sm:px-4 lg:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-0 grid-auto-rows-[calc(100vw/2*4/3)] sm:grid-auto-rows-[calc(100vw/3*4/3)] md:grid-auto-rows-[calc(100vw/5*4/3)] min-h-[60vh] md:min-h-[80vh]">
          {/* First row */}
          <GalleryImageItem
            src={ICONIC_WEDDING_IMAGES[0]}
            alt="Wedding photo 1"
            className="md:col-start-1 md:row-start-1 aspect-[3/4]"
          />
          <GalleryImageItem
            src={ICONIC_WEDDING_IMAGES[1]}
            alt="Wedding photo 2"
            className="md:col-start-2 md:row-start-1 aspect-[3/4]"
          />
          <GalleryImageItem
            src={ICONIC_WEDDING_IMAGES[2]}
            alt="Wedding photo 3"
            className="md:col-start-3 md:row-start-1 aspect-[3/4]"
          />
          <GalleryImageItem
            src={ICONIC_WEDDING_IMAGES[3]}
            alt="Wedding photo 4"
            className="md:col-start-4 md:row-start-1 aspect-[3/4]"
          />
          <GalleryImageItem
            src={ICONIC_WEDDING_IMAGES[4]}
            alt="Wedding photo 5"
            className="md:col-start-5 md:row-start-1 aspect-[3/4]"
          />

          {/* Second row */}
          <GalleryImageItem
            src={ICONIC_WEDDING_IMAGES[5]}
            alt="Wedding photo 6"
            className="md:col-start-1 md:row-start-2 aspect-[3/4]"
          />
          <GalleryImageItem
            src={ICONIC_WEDDING_IMAGES[6]}
            alt="Wedding photo 7"
            className="md:col-start-2 md:row-start-2 aspect-[3/4]"
          />

          <div className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text flex flex-col justify-center items-center text-center p-2 sm:p-3 md:p-4 md:col-start-3 md:col-span-2 md:row-start-2">
            <p className="text-xs sm:text-sm md:text-base leading-tight">
              some of the most
            </p>
            <h2 className="font-garamond text-lg sm:text-xl md:text-8xl font-black tracking-tighter">
              “ICONIC”
            </h2>
            <p className="text-xs sm:text-sm md:text-base tracking-widest leading-tight">
              wedding images
            </p>
          </div>

          <GalleryImageItem
            src={ICONIC_WEDDING_IMAGES[7]}
            alt="Wedding photo 8"
            className="md:col-start-5 md:row-start-2 aspect-[3/4]"
          />

          {/* Third row */}
          <GalleryImageItem
            src={ICONIC_WEDDING_IMAGES[8]}
            alt="Wedding photo 9"
            className="md:col-start-1 md:row-start-3 aspect-[3/4]"
          />
          <GalleryImageItem
            src={ICONIC_WEDDING_IMAGES[9]}
            alt="Wedding photo 10"
            className="md:col-start-2 md:row-start-3 aspect-[3/4]"
          />
          <GalleryImageItem
            src={ICONIC_WEDDING_IMAGES[10]}
            alt="Wedding photo 11"
            className="md:col-start-3 md:row-start-3 aspect-[3/4]"
          />
          <GalleryImageItem
            src={ICONIC_WEDDING_IMAGES[11]}
            alt="Wedding photo 12"
            className="md:col-start-4 md:row-start-3 aspect-[3/4]"
          />
          <GalleryImageItem
            src={ICONIC_WEDDING_IMAGES[12]}
            alt="Wedding photo 13"
            className="md:col-start-5 md:row-start-3 aspect-[3/4]"
          />
        </div>

        <div className="text-center mt-8 md:mt-10">
          <button
            onClick={() => navigateTo("Gallery")}
            className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-light-accent text-white dark:bg-dark-accent dark:text-black font-semibold uppercase tracking-wider hover:opacity-90 transform hover:scale-105 transition-all duration-300"
          >
            Explore the Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
