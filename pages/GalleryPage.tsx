import React, { useState, useMemo } from 'react';
import { PhotoCategory, GalleryImage } from '../types';
import { GALLERY_IMAGES } from '../constants';

const GalleryPage: React.FC = () => {
  const categories = ['All', ...Object.values(PhotoCategory)];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') {
      return GALLERY_IMAGES;
    }
    return GALLERY_IMAGES.filter(img => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-20 md:py-28 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 pt-12">
          <h1 className="font-garamond text-5xl md:text-7xl font-bold">Our Portfolio</h1>
          <p className="text-lg text-light-text/70 dark:text-dark-text/70 mt-4 max-w-2xl mx-auto">
            A curated collection of moments, stories, and emotions, captured through our lens. Explore the breadth of our work across various styles.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-light-accent text-white dark:bg-dark-accent dark:text-black'
                  : 'bg-light-secondary-bg dark:bg-dark-secondary-bg hover:bg-light-text/10 dark:hover:bg-dark-text/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredImages.map((image) => (
            <div key={image.id} className="break-inside-avoid group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                 <p className="text-white font-garamond text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;