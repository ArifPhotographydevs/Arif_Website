import React from 'react';

interface WeddingPhoto {
  id: number;
  imageUrl: string;
  coupleNames: string;
  location?: string;
  date: string;
}

interface WeddingPhotoProps {
  navigateTo: (page: string) => void;
}

const weddingPhotos: WeddingPhoto[] = [
  {
    id: 1,
    imageUrl: 'https://i.postimg.cc/DZv2vTcX/014-A4211-Edit.jpg',
    coupleNames: 'Reva & Zach',
    date: 'Oct 7, 2024'
  },
  {
    id: 2,
    imageUrl: 'https://i.postimg.cc/DwGf55Z8/IMG-0692.jpg',
    coupleNames: 'Emma & James',
    date: 'Aug 25, 2024'
  },
  {
    id: 3,
    imageUrl: 'https://i.postimg.cc/44MTMtjt/IMG-8994.jpg',
    coupleNames: 'Alia & Ranbir',
    location: 'Mumbai',
    date: 'Aug 8, 2024'
  },
  {
    id: 4,
    imageUrl: 'https://i.postimg.cc/PxW8cT5v/IMG-0497.jpg',
    coupleNames: 'Kiara & Siddharth',
    date: 'Apr 24, 2024'
  }
];

const WeddingPhoto: React.FC<WeddingPhotoProps> = ({ navigateTo }) => {
  return (
    <section className="bg-light-cream dark:bg-dark-bg py-12">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-stone-800 dark:text-dark-text mb-4 tracking-wide">
            Wedding Portfolio
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto"></div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {weddingPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={`Wedding photo of ${photo.coupleNames}`}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-base font-light mb-2 tracking-wide">View Gallery</h3>
                    <div className="w-12 h-px bg-white mx-auto"></div>
                  </div>
                </div>
              </div>

              {/* Photo Details Below Image */}
              <div className="pt-3 text-center">
                <h3 className="text-base font-light mb-1 tracking-wide text-stone-800 dark:text-dark-text">
                  {photo.coupleNames}
                  {photo.location && (
                    <span className="text-amber-600 ml-1 text-xs block">
                      {photo.location}
                    </span>
                  )}
                </h3>
                <p className="text-stone-600 dark:text-dark-text/80 text-xs tracking-wider">
                  {photo.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Photography Blog Button */}
        <div className="text-center">
          <button
            onClick={() => navigateTo('blog')}
            className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-light text-base tracking-wider rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative z-10">Photography Blog</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="fixed top-10 right-10 w-24 h-24 bg-gradient-to-br from-amber-200/20 to-stone-300/20 rounded-full blur-xl"></div>
        <div className="fixed bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-stone-200/30 to-amber-200/30 rounded-full blur-lg"></div>
      </div>
    </section>
  );
}

export default WeddingPhoto;