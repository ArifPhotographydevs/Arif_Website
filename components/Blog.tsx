import React from 'react';
import BlogCard from './BlogCard';

interface BlogProps {
  navigateTo: (page: string) => void;
}

export const TOP_PICKS = [
  {
    image: 'https://i.postimg.cc/DZv2vTcX/014-A4211-Edit.jpg',
    title: 'Sunset Vows in Santorini',
    category: 'Wedding',
    description: 'An ethereal destination wedding capturing the magic of a Greek sunset.'
  },
  {
    image: 'https://i.postimg.cc/DwGf55Z8/IMG-0692.jpg',
    title: 'Urban Muse',
    category: 'Fashion',
    description: 'A high-fashion editorial shoot set against the gritty backdrop of New York City.'
  },
  {
    image: 'https://i.postimg.cc/44MTMtjt/IMG-8994.jpg',
    title: 'The Solitude of the Artist',
    category: 'Portrait',
    description: 'A powerful portrait series exploring the inner world of a painter in their studio.'
  },
  {
    image: 'https://i.postimg.cc/PxW8cT5v/IMG-0497.jpg',
    title: 'Artisanal Brew',
    category: 'Commercial',
    description: 'Crisp and clean product photography for a local coffee brand.'
  },
  {
    image: 'https://i.postimg.cc/KjmmYyrT/IMG-0695.jpg',
    title: 'Corporate Headshots',
    category: 'Commercial',
    description: 'Professional and engaging headshots for a leading tech firm.'
  },
  {
    image: 'https://i.postimg.cc/TY4htpJH/IMG-0704-2.jpg',
    title: 'Festival Vibes',
    category: 'Event',
    description: 'Capturing the energy and excitement of a summer music festival.'
  }
];

const Blog: React.FC<BlogProps> = ({ navigateTo }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">From the Journal</h2>
          <p className="text-lg text-light-text/70 dark:text-dark-text/70 mt-2">Insights, stories, and tips from the world of photography.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOP_PICKS.map(post => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button 
            onClick={() => navigateTo('Blog')}
            className="px-8 py-4 rounded-full bg-light-accent text-white dark:bg-dark-accent dark:text-black font-semibold uppercase tracking-wider hover:opacity-90 transform hover:scale-105 transition-all duration-300"
          >
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;