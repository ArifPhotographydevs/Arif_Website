import React from 'react';

interface BlogPost {
  image: string;
  title: string;
  category: string;
  description: string;
}

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="group bg-light-bg dark:bg-dark-secondary-bg rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <div className="overflow-hidden h-56">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-garamond text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-light-text/70 dark:text-dark-text/70 text-sm mb-4 flex-grow">{post.description}</p>
        <div className="flex items-center justify-between text-xs text-light-text/60 dark:text-dark-text/60 mt-auto pt-4 border-t border-light-text/10 dark:border-dark-text/10">
          <div className="flex items-center">
            <span>{post.category}</span>
          </div>
          <span>{/* Add date or views if needed */}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;