import React from 'react';
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
import { Facebook, Twitter, MessageCircle, Instagram } from 'lucide-react'; // Assuming you're using Lucide icons

interface HomePageProps {
  navigateTo: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  return (
    <div className="relative">
      {/* Social Media Icons - Fixed Left Sidebar */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 p-4 bg-transparent z-50">
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
          <Facebook className="w-6 h-6 text-white" />
        </div>
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
          <Twitter className="w-6 h-6 text-white" />
        </div>
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
          <Instagram className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Main Content */}
      <HeroSlider />
      <ModernApproach />
      <Gallery navigateTo={navigateTo} />
      <WeddingPhoto />
      <WeddingHighlightSection />
      <WeddingStoriesSection />
      <WeddingVideoGallerySection />
      {/* <TopPicks /> */}
      {/* <Blog navigateTo={navigateTo} /> */}
      <CreativeProcess />
      <OurApproach />
      <Awards />
      <Stats />
      <Testimonials />
      <Faq />
      <Newsletter />
    </div>
  );
};

export default HomePage;