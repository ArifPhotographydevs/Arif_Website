import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { Page } from '../App';

// SVG icons remain unchanged
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

interface HeaderProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo }) => {
  const [theme, toggleTheme] = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Set dark mode as default on component mount
  useEffect(() => {
    // Check if theme is not already dark to avoid unnecessary toggling
    if (theme !== 'dark') {
      toggleTheme(); // Toggle to dark mode
    }
  }, []); // Empty dependency array ensures this runs only on mount

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: Page }[] = [
    { name: 'Home' },
    { name: 'Gallery' },
    { name: 'About' },
    { name: 'Blog' },
    { name: 'Contact' },
  ];

  const handleNavClick = (page: Page) => {
    navigateTo(page);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        <button onClick={() => handleNavClick('Home')} className="flex items-center">
          <img
            src="https://arifphotography.vercel.app/images/logo.png"
            alt="Arif Photography Logo"
            className="w-24 sm:w-28 h-auto transition-transform duration-300 hover:scale-105"
          />
        </button>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.name)}
              className={`relative text-sm uppercase tracking-widest transition-colors duration-300 ${
                currentPage === link.name ? 'text-light-accent dark:text-dark-accent' : 'hover:text-light-accent dark:hover:text-dark-accent'
              }`}
            >
              {link.name}
              {currentPage === link.name && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-light-accent dark:bg-dark-accent"></span>
              )}
            </button>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full hover:bg-light-secondary-bg dark:hover:bg-dark-secondary-bg transition-colors duration-300"
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Open menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-light-bg dark:bg-dark-bg py-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.name)}
                className={`text-md uppercase tracking-widest ${
                  currentPage === link.name ? 'text-light-accent dark:text-dark-accent' : 'hover:text-light-accent dark:hover:text-dark-accent'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;