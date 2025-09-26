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

interface HomePageProps {
  navigateTo: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  return (
    <>
      <HeroSlider />
      <ModernApproach />
      <Gallery navigateTo={navigateTo} />
      <WeddingPhoto />
      <WeddingHighlightSection />
      <WeddingStoriesSection />
      <WeddingVideoGallerySection />

      <TopPicks />
      <Blog navigateTo={navigateTo} />
      <CreativeProcess />
      <OurApproach />
      <Awards />
      <Stats />
      <Testimonials />
      <Faq />
      <Newsletter />
      
    </>
  );
};

export default HomePage;