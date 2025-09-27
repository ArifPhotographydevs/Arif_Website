import React, { useEffect, useRef } from 'react';
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
import { Facebook, Instagram, Youtube } from 'lucide-react';

interface HomePageProps {
  navigateTo: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const newsletter = newsletterRef.current;

    if (!sidebar || !newsletter) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When Newsletter is in view, make sidebar absolute to stop at Newsletter
          sidebar.style.position = 'absolute';
          sidebar.style.top = `${newsletter.offsetTop - sidebar.offsetHeight - 16}px`; // Stop above Newsletter
        } else {
          // Revert to fixed when Newsletter is not in view
          sidebar.style.position = 'fixed';
          sidebar.style.top = '33.33%'; // Position roughly in the middle
        }
      },
      {
        root: null,
        threshold: 0.1, // Trigger when 10% of Newsletter is visible
      }
    );

    observer.observe(newsletter);

    return () => observer.unobserve(newsletter);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Social Media Icons - Fixed Left Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed left-4 top-1/3 flex flex-col space-y-4 p-4 bg-transparent z-50 hidden lg:flex max-h-screen"
      >
        {[
          { Icon: Facebook, label: 'Facebook' },
          { Icon: Instagram, label: 'Instagram' },
          { Icon: Youtube, label: 'YouTube' },
        ].map(({ Icon, label }, index) => (
          <a
            key={index}
            href={`#${label.toLowerCase()}`} // Replace with actual social media links
            className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-label={`Follow us on ${label}`}
            tabIndex={0}
          >
            <Icon className="w-6 h-6 text-white dark:text-gray-900" />
          </a>
        ))}
      </div>

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
        <Newsletter ref={newsletterRef} />
      </main>
    </div>
  );
};

export default HomePage;