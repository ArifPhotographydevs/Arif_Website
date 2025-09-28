import React, { useEffect, useRef, useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import Awards from '../components/Awards';
import TopPicks from '../components/TopPicks';
import Gallery from '../components/Gallery';
import Faq from '../components/Faq';
import Blog from '../components/Blog';
import Newsletter from '../components/Newsletter';
import OurApproach from '../components/OurApproach';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import CreativeProcess from '../components/CreativeProcess';
import ModernApproach from '../components/ModernApproach';
import { Page } from '../App';
import WeddingPhoto from '@/components/WeddingPhoto';
import WeddingStoriesSection from '@/components/WeddingStoriesSection';
import WeddingHighlightSection from '@/components/WeddingHighlightSection';
import WeddingVideoGallerySection from '@/components/WeddingVideoGallerySection';
import { Instagram, Youtube, Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface HomePageProps {
  navigateTo: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Start open for mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle auto-collapse after 3 seconds on mobile/tablet
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    if (isMobile) {
      const timer = setTimeout(() => {
        setIsSidebarOpen(false);
      }, 3000);
      return () => clearTimeout(timer);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  // Toggle sidebar on hamburger click
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Intersection Observer for sidebar positioning
  useEffect(() => {
    const sidebar = sidebarRef.current;
    const newsletter = newsletterRef.current;

    if (!sidebar || !newsletter) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sidebar.style.position = 'absolute';
          sidebar.style.top = `${newsletter.offsetTop - sidebar.offsetHeight - 16}px`;
        } else {
          sidebar.style.position = 'fixed';
          sidebar.style.top = '40%';
          sidebar.style.transform = 'translateY(0.5rem)';
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(newsletter);

    return () => observer.unobserve(newsletter);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden font-['EB_Garamond']">
      {/* Social Media Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed left-2 sm:left-4 top-[40%] translate-y-2 z-50 max-h-screen"
      >
        {/* Hamburger Button - Mobile/Tablet Only */}
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-black dark:bg-white rounded-full flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 mb-2 sm:mb-4"
            aria-label={isSidebarOpen ? 'Close social media menu' : 'Open social media menu'}
            tabIndex={0}
          >
            {isSidebarOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-gray-900" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-gray-900" />
            )}
          </button>
        )}

        {/* Social Media Icons */}
        <div
          className={`flex flex-col space-y-2 sm:space-y-4 p-0 left-0 bg-transparent transition-all duration-300 ${
            isMobile
              ? isSidebarOpen
                ? 'opacity-100 max-h-screen'
                : 'opacity-0 max-h-0 overflow-hidden'
              : 'opacity-100 max-h-screen'
          }`}
        >
          {[
            { Icon: Instagram, label: 'Instagram', href: 'https://share.google/iT09vihBt3C1LgZ8O' },
            { Icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@ArifPhotography' },
            { Icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/+918341079140' },
          ].map(({ Icon, label, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-black dark:bg-white rounded-full flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 animate-fade-in-up"
              aria-label={`Follow us on ${label}`}
              tabIndex={isMobile && !isSidebarOpen ? -1 : 0}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-gray-900" />
            </a>
          ))}
        </div>
      </div>

      {/* Book Now Button - Mobile Only */}
      <button
        onClick={() => {
          if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="lg:hidden fixed bottom-4 right-4 bg-orange-500 dark:bg-white text-white dark:text-gray-900 font-['EB_Garamond'] font-medium text-lg rounded-full px-6 py-3 shadow-lg hover:bg-orange-600 dark:hover:bg-gray-200 transition-colors animate-bounce z-50"
        aria-label="Book Now"
      >
        Book Now
      </button>

      {/* Main Content */}
      <main className="flex flex-col">
        <HeroSlider />
        <ModernApproach />
        <Gallery navigateTo={navigateTo} />
        <WeddingPhoto />
        <WeddingHighlightSection />
        <WeddingStoriesSection />
        <WeddingVideoGallerySection />
        <CreativeProcess />
        <OurApproach />
        <Awards />
        <Stats />
        <Testimonials />
        <Faq />
        <Newsletter ref={newsletterRef} formRef={formRef} />
      </main>
    </div>
  );
};

export default HomePage;