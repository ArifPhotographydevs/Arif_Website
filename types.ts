import React from 'react';

export interface HeroSlide {
  image: string;
  title: string;
  subtitle:string;
}

export interface TopPick {
  image: string;
  title: string;
  category: string;
  description: string;
}

export enum PhotoCategory {
  PORTRAIT = 'Portrait',
  WEDDING = 'Wedding',
  FASHION = 'Fashion',
  COMMERCIAL = 'Commercial',
  EVENT = 'Event',
  ART = 'Art',
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: PhotoCategory;
  className?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  views: string;
  date: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  event: string;
  avatar?: string;
}

export interface Award {
    year: string;
    title: string;
    issuer: string;
}

export interface Stat {
    icon: React.ElementType;
    value: number;
    label: string;
    suffix?: string;
}

export interface ClientLogo {
    name: string;
    logo: string;
}

export interface Value {
    icon: React.ElementType;
    title: string;
    description: string;
}