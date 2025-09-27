import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import { Page } from '../App';

interface FooterProps {
  navigateTo: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const instaImages = GALLERY_IMAGES.slice(0, 6).map(img => img.src);
  
  const navLinks: { name: string, page: Page }[] = [
    { name: 'Portfolio', page: 'Gallery' },
    { name: 'About Us', page: 'About' },
    { name: 'Contact', page: 'Contact' },
    { name: 'Blog', page: 'Blog' },
  ];

  return (
    <footer className="bg-light-bg dark:bg-dark-bg border-t border-light-text/10 dark:border-dark-text/10">
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-4">Arif Photography</h3>
            <p className="text-light-text/70 dark:text-dark-text/70 mb-6">Capturing life's most precious moments with artistry and passion.</p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2 text-light-text/70 dark:text-dark-text/70">
              {navLinks.map(link => (
                <li key={link.name}>
                  <button
                    onClick={() => navigateTo(link.page)}
                    className="hover:text-light-accent dark:hover:text-dark-accent"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-bold uppercase tracking-widest mb-4">Follow on Instagram</h4>
            <div className="grid grid-cols-3 gap-2">
              {instaImages.map((src, i) => (
                <a
                  href="#"
                  key={i}
                  className="block overflow-hidden rounded-md aspect-square"
                >
                  <img
                    src={src}
                    alt={`Instagram post ${i}`}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-light-text/50 dark:text-dark-text/50 pt-8 mt-8 border-t border-light-text/10 dark:border-dark-text/10">
          <p>&copy; {new Date().getFullYear()} Arif Photography. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;