import React from 'react';
import { BLOG_POSTS } from '../constants';
import BlogCard from '../components/BlogCard';

const BlogPage: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-light-bg dark:bg-dark-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 pt-12">
                    <h1 className="font-garamond text-5xl md:text-7xl font-bold">From the Journal</h1>
                    <p className="text-lg text-light-text/70 dark:text-dark-text/70 mt-4 max-w-2xl mx-auto">
                        Dive deeper into our world. Here, we share stories from behind the lens, offer photography tips, and showcase our latest adventures.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map(post => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPage;