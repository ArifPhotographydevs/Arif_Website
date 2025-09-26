
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

export type Page = 'Home' | 'Gallery' | 'About' | 'Blog' | 'Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage navigateTo={navigateTo} />;
      case 'Gallery':
        return <GalleryPage />;
      case 'About':
        return <AboutPage />;
      case 'Blog':
        return <BlogPage />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="text-light-text dark:text-dark-text font-sans selection:bg-light-accent selection:text-white dark:selection:bg-dark-accent dark:selection:text-black">
      <Header currentPage={currentPage} navigateTo={navigateTo} />
      <main>
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;
