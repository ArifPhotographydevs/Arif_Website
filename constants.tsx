import React from 'react';
import { HeroSlide, TopPick, PhotoCategory, GalleryImage, FaqItem, BlogPost, Testimonial, Award, Stat, ClientLogo, Value } from './types';

// Define simpleAvatar at the top to ensure it's available for BLOG_POSTS
const simpleAvatar = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNlMGUwZTAiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjQwIiByPSIyMCIgZmlsbD0iI2FhYSIvPjxwYXRoIGQ9Ik0gMjAsOTAgQyAyMCw3MCA4MCw3MCA4MCw5MCBaIiBmaWxsPSIjYWFhIi8+PC9zdmc+';

const logoPlaceholder = (name: string) => {
    const svg = `<svg width="200" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20px" font-weight="bold" fill="#888">${name}</text></svg>`;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
};

const grayscaleLogoPlaceholder = (name: string) => {
    const svg = `<svg width="200" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="serif" font-size="22px" font-weight="bold" fill="#999">${name}</text></svg>`;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
};

const genericImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUADADASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAMCAQQF/8QAIRABAQACAgICAwEAAAAAAAAAAQARAgMhBBIxQVFhcQT/xAAXAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD5vE6rYjI449ZJ2fX8yGq8+smR6O+JWey0TE/P+l46z4L3yO09d/a8MnrIj6mZ9Z72Z10wzpdZ8G49N/azvM9Z1D6mR6z3sLr0wzJ3Xbwbh039rO8z1jUPqYHrPewuvTDMyN128G4dN/a9MnrGofcwPWexgdevDLJG67f//Z';

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: 'https://i.postimg.cc/dQXLBhBN/zaya.jpg',
    subtitle:'Capturing Living Memories',
    title: 'Arif Photography'
    
    
  },
  {
    image: 'https://i.postimg.cc/4xbq3J46/IMG-6024-1.jpg',
    subtitle:'Timeless Moments',
    title: 'Arif Photography'
  },
  {
    image: 'https://i.postimg.cc/RCNkT5Gm/IMG-0838.jpg',
    subtitle:'Your Story in Frames',
    title: 'Arif Photography'
    
  }
];

export const MODERN_APPROACH_IMAGES = {
    portrait: 'https://i.postimg.cc/sfw84cKy/089A2368.jpg',
    scenic: 'https://i.postimg.cc/NjfQMMwN/24.jpg',
};

export const ICONIC_WEDDING_IMAGES: string[] = [
    'https://i.postimg.cc/d05SvR3w/014-A5716-4x5.jpg',
    'https://i.postimg.cc/2yhwqnkq/014A0588.jpg',
    'https://i.postimg.cc/GpStDNtN/IMG-5741.jpg',
    'https://i.postimg.cc/nLR8hfrs/014-A4421-Edit.jpg',
    'https://i.postimg.cc/SNTcdZn6/014-A1086-Edit.jpg',
    'https://i.postimg.cc/dVZZBJPF/014-A3530-Edit-Edit.jpg',
    'https://i.postimg.cc/Mp1KHHJn/014A7360.jpg',
    'https://i.postimg.cc/SQzK3D1L/GAN00196-Edit-Edit.jpg',
    'https://i.postimg.cc/HsgTKHyH/IMG-0846.jpg',
    'https://i.postimg.cc/qMwH5KrX/IMG-0852.jpg',
    'https://i.postimg.cc/Xqx1Qw5r/IMG-9087.jpg',
    'https://i.postimg.cc/W1ggBG3H/IMG-0963.jpg',
    'https://i.postimg.cc/Kvmn2FVS/IMG-8284.jpg'
];

export const CREATIVE_PROCESS_IMAGES = {
    main: 'https://i.postimg.cc/4xbq3J46/IMG-6024-1.jpg',
    detail: 'https://i.postimg.cc/vB0NtcFM/GAN00196-Edit-Edit.jpg',
};

export const TOP_PICKS: TopPick[] = [
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
export const GALLERY_IMAGES: GalleryImage[] = [
  // Wedding
  { id: 1, src: 'https://i.postimg.cc/bvTbZnky/014-A5698111.jpg', alt: 'Bride and groom in a tender moment', category: PhotoCategory.WEDDING, className: 'col-span-2 row-span-2' },
  { id: 2, src: 'https://i.postimg.cc/7L3v0HZY/final-05-copy.jpg', alt: 'Wedding reception details', category: PhotoCategory.WEDDING },
  { id: 3, src: 'https://i.postimg.cc/sx6CxTDY/final-2-014-A3722-copy.jpg', alt: 'Wedding rings close-up', category: PhotoCategory.WEDDING },
  { id: 19, src: 'https://i.postimg.cc/VsHhSrWW/GAN00061-Edit.jpg', alt: 'Wedding ceremony under an arch', category: PhotoCategory.WEDDING },

  // Portrait
  { id: 4, src: 'https://i.postimg.cc/vB0NtcFM/GAN00196-Edit-Edit.jpg', alt: 'Man in a suit looking sharp', category: PhotoCategory.PORTRAIT },
  { id: 5, src: 'https://i.postimg.cc/wBVf97BJ/IMG-1846.jpg', alt: 'Woman in a hat', category: PhotoCategory.PORTRAIT, className: 'col-span-2' },
  { id: 6, src: 'https://i.postimg.cc/SNMgJZsm/IMG-2866.jpg', alt: 'Photographer holding camera', category: PhotoCategory.PORTRAIT },
  { id: 20, src: 'https://i.postimg.cc/MKgr5nHb/IMG-4058.jpg', alt: 'Child smiling outdoors', category: PhotoCategory.PORTRAIT },

  // Fashion
  { id: 7, src: 'https://i.postimg.cc/RCNkT5Gm/IMG-0838.jpg', alt: 'Woman in stylish coat in the city', category: PhotoCategory.FASHION, className: 'row-span-2' },
  { id: 8, src: 'https://i.postimg.cc/2Sm9MPdV/IMG-4678-1.jpg', alt: 'Woman shopping', category: PhotoCategory.FASHION },
  { id: 9, src: 'https://i.postimg.cc/4xbq3J46/IMG-6024-1.jpg', alt: 'Fashion details shoes and bag', category: PhotoCategory.FASHION },
  { id: 21, src: 'https://i.postimg.cc/gcVvQrgH/IMG-7753.jpg', alt: 'Model in evening wear', category: PhotoCategory.FASHION },

  // Commercial
  { id: 10, src: 'https://i.postimg.cc/Kvmn2FVS/IMG-8284.jpg', alt: 'Product shot of a watch', category: PhotoCategory.COMMERCIAL, className: 'col-span-2' },
  { id: 11, src: 'https://i.postimg.cc/bvTbZnky/014-A5698111.jpg', alt: 'Team meeting in a modern office', category: PhotoCategory.COMMERCIAL },
  { id: 12, src: 'https://i.postimg.cc/7L3v0HZY/final-05-copy.jpg', alt: 'Delicious food photography', category: PhotoCategory.COMMERCIAL },
  { id: 22, src: 'https://i.postimg.cc/sx6CxTDY/final-2-014-A3722-copy.jpg', alt: 'Product launch event', category: PhotoCategory.COMMERCIAL },

  // Event
  { id: 13, src: 'https://i.postimg.cc/VsHhSrWW/GAN00061-Edit.jpg', alt: 'Conference speaker on stage', category: PhotoCategory.EVENT },
  { id: 14, src: 'https://i.postimg.cc/vB0NtcFM/GAN00196-Edit-Edit.jpg', alt: 'Concert with vibrant lights', category: PhotoCategory.EVENT, className: 'row-span-2' },
  { id: 15, src: 'https://i.postimg.cc/wBVf97BJ/IMG-1846.jpg', alt: 'Birthday party celebration', category: PhotoCategory.EVENT },
  { id: 23, src: 'https://i.postimg.cc/SNMgJZsm/IMG-2866.jpg', alt: 'Festival crowd dancing', category: PhotoCategory.EVENT },

  // Art
  { id: 16, src: 'https://i.postimg.cc/MKgr5nHb/IMG-4058.jpg', alt: 'Abstract paint textures', category: PhotoCategory.ART },
  { id: 17, src: 'https://i.postimg.cc/RCNkT5Gm/IMG-0838.jpg', alt: 'Long exposure light trails in a city', category: PhotoCategory.ART, className: 'col-span-2' },
  { id: 18, src: 'https://i.postimg.cc/2Sm9MPdV/IMG-4678-1.jpg', alt: 'Dramatic landscape of mountains and sea', category: PhotoCategory.ART },
  { id: 24, src: 'https://i.postimg.cc/4xbq3J46/IMG-6024-1.jpg', alt: 'Surreal portrait with vibrant colors', category: PhotoCategory.ART },
];

export const FAQS: { category: string; items: FaqItem[] }[] = [
  {
    category: 'Booking',
    items: [
      { question: 'How do I book a session?', answer: 'You can book a session by filling out the contact form on our website. We will get back to you within 24 hours to discuss your needs and schedule a date.' },
      { question: 'What is your availability?', answer: 'Our availability varies depending on the season. We recommend booking at least 3-6 months in advance, especially for weddings.' },
    ]
  },
  {
    category: 'Sessions',
    items: [
      { question: 'How long does a typical session last?', answer: 'A standard portrait session lasts about 1-2 hours. Wedding coverage typically ranges from 6-10 hours, depending on the package.' },
      { question: 'What should I wear for my photoshoot?', answer: 'We recommend wearing something that makes you feel comfortable and confident. We can provide a style guide upon booking to help you choose the perfect outfits.' },
    ]
  },
  {
    category: 'Delivery',
    items: [
      { question: 'When will I receive my photos?', answer: 'You will receive a sneak peek gallery within 48 hours of your session. The full gallery will be delivered within 4-6 weeks for portrait sessions and 8-12 weeks for weddings.' },
      { question: 'How are the photos delivered?', answer: 'Your high-resolution, edited photos will be delivered via a private online gallery where you can download them, share with family and friends, and order prints.' },
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    image: 'https://i.postimg.cc/HWXYvR2t/22.jpg',
    title: 'Finding the Perfect Light: A Guide to Golden Hour Shoots',
    excerpt: 'Discover the magic of golden hour and how to leverage natural light for breathtaking photos that feel warm, dreamy, and absolutely timeless...',
    author: { name: 'Arif', avatar: simpleAvatar },
    views: '1.2K',
    date: 'Aug 18, 2024'
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/NjfQMMwN/24.jpg',
    title: 'Top 5 Unforgettable Wedding Venues in the Country',
    excerpt: 'Planning your big day? We’ve curated a list of the most stunning and unique wedding venues that offer the perfect backdrop for your love story.',
    author: { name: 'Arif', avatar: simpleAvatar },
    views: '2.5K',
    date: 'Jul 25, 2024'
  },
  {
    id: 3,
    image: 'https://i.postimg.cc/28YzsG9N/25.jpg',
    title: 'The Art of Candid Photography: Capturing Authentic Moments',
    excerpt: 'Move beyond posed shots and learn the secrets to capturing genuine emotions and interactions. This guide will help you master the art of the candid.',
    author: { name: 'Arif', avatar: simpleAvatar },
    views: '890',
    date: 'Jun 12, 2024'
  }
];

export const PHOTOGRAPHER_PORTRAIT = 'https://i.postimg.cc/VNwn5pRs/arif.jpg';

export const ABOUT_TEXT = {
  intro: {
    title: "About Arif",
    p1: "My journey into photography began not with a camera, but with a fascination for stories. I was captivated by the way a single moment—a fleeting glance, a shared laugh, a quiet tear—could tell a rich and complex story.",
    p2: "I realized that photography was more than just taking pictures; it was about preserving emotions and creating a timeless legacy."
  },
  philosophy: {
    title: "My Philosophy",
    p1: "My approach is built on connection. I take the time to know you, to understand your vision, and to create a comfortable atmosphere where you can be your authentic self. I believe the best photographs are born from genuine moments.",
  },
  process: {
    title: "The Process",
    p1: "My style blends documentary realism with an artistic, editorial flair, resulting in images that are both authentic and breathtakingly beautiful. It's about capturing the quiet, in-between moments as much as the grand, pivotal ones.",
    p2: "For me, this is more than a job; it's a calling. I am honored to be entrusted with capturing the most important moments of your life. Let's create something beautiful together."
  }
};

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "Arif didn't just take photos; he captured the soul of our wedding day. Every image tells a story, and we couldn't be happier. Truly an artist.",
        author: "Jessica & Tom H.",
        event: "Wedding Photography",
        avatar: simpleAvatar,
    },
    {
        quote: "The professionalism and creative direction were outstanding. The final portraits exceeded all our expectations. We felt so comfortable throughout the entire session.",
        author: "Samantha Bee",
        event: "Portrait Session",
        avatar: simpleAvatar,
    },
    {
        quote: "Working with Arif was a dream. He understood our brand's vision perfectly and delivered a commercial campaign that was both beautiful and effective.",
        author: "Aura Collective",
        event: "Commercial Shoot",
        avatar: simpleAvatar,
    }
];

export const AWARD_SECTION_IMAGE = 'https://i.postimg.cc/VNwn5pRs/arif.jpg';

export const AWARDS: Award[] = [
    { year: '2024', title: 'Entrepreneurial Excellence Award', issuer: 'National Business Association' },
    { year: '2023', title: 'Best Entrepreneur', issuer: 'Times of India' },
    { year: '2022', title: 'Photographer of the Year', issuer: 'International Wedding Awards' },
    { year: '2021', title: 'Top Creative Portrait', issuer: 'Portrait Masters Guild' },
];

const CameraIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" /></svg>;
const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>;
const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M-4.5 12h22.5" /></svg>;

export const STATS: Stat[] = [
    { icon: CalendarIcon, value: 300, label: 'Events Covered', suffix: '+' },
    { icon: HeartIcon, value: 250, label: 'Happy Clients', suffix: '+' },
    { icon: CameraIcon, value: 500, label: 'Photos Delivered', suffix: 'K+' }
];

export const CLIENT_LOGOS: ClientLogo[] = [
    
];

export const FEATURED_LOGOS: ClientLogo[] = [
   
];

const AuthenticityIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ConnectionIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>;
const ArtistryIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 013.388-1.62" /></svg>;

export const VALUES: Value[] = [
    { icon: AuthenticityIcon, title: 'Authenticity', description: 'Capturing genuine emotions and real, unscripted moments is the heart of my work.' },
    { icon: ConnectionIcon, title: 'Connection', description: 'Building a real connection with you is key to telling your story in the most personal way.' },
    { icon: ArtistryIcon, title: 'Artistry', description: 'Every photo is crafted with an artistic eye, blending light, composition, and emotion into a masterpiece.' },
];