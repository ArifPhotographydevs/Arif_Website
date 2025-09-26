
import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import { Page } from '../App';

const InstagramIcon = () => ( <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>);
const FacebookIcon = () => ( <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>);
const TwitterIcon = () => ( <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.216 3.793 4.65-1.002.272-1.928.31-2.786.105.59 1.838 2.303 3.198 4.342 3.234-1.711 1.336-3.869 2.133-6.222 2.133-.404 0-.799-.024-1.187-.07 2.199 1.408 4.821 2.228 7.661 2.228 9.142 0 14.307-7.721 13.995-14.646.958-.693 1.787-1.56 2.457-2.549z"/></svg>);

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
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-4">Arif Photography</h3>
            <p className="text-light-text/70 dark:text-dark-text/70 mb-6">Capturing life's most precious moments with artistry and passion.</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:opacity-75 transition-opacity" aria-label="Instagram"><InstagramIcon/></a>
              <a href="#" className="hover:opacity-75 transition-opacity" aria-label="Facebook"><FacebookIcon/></a>
              <a href="#" className="hover:opacity-75 transition-opacity" aria-label="Twitter"><TwitterIcon/></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2 text-light-text/70 dark:text-dark-text/70">
                {navLinks.map(link => (
                    <li key={link.name}>
                        <button onClick={() => navigateTo(link.page)} className="hover:text-light-accent dark:hover:text-dark-accent">
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
                <a href="#" key={i} className="block overflow-hidden rounded-md aspect-square">
                  <img src={src} alt={`Instagram post ${i}`} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-light-text/50 dark:text-dark-text/50 pt-12 mt-12 border-t border-light-text/10 dark:border-dark-text/10">
          <p>&copy; {new Date().getFullYear()} Arif Photography. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
