import React from "react";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  image: string;
  date: string;
  readTime: string;
  title: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    image: "/face (1).png",
    date: "June 12th, 2025",
    readTime: "8 min read",
    title: "Harnessing Podcast Power, Engaging Your Audience",
  },
  {
    id: "2",
    image: "/face (2).png",
    date: "June 12th, 2025",
    readTime: "8 min read",
    title: "The Power of Storytelling in Podcasts",
  },
  {
    id: "3",
    image: "/face (3).png",
    date: "June 12th, 2025",
    readTime: "8 min read",
    title: "Future of Podcasting: Key Trends to Watch",
  },
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="group cursor-pointer flex flex-col h-full bg-[#111] border border-white/5 rounded-[32px] p-4 hover:border-white/20 transition-all">
      {/* Image Container */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-[#000]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-start flex-grow px-2 pb-2">
        <div className="text-gray-500 text-[12px] font-medium mb-3 flex items-center gap-2 uppercase tracking-wider">
          <span>{post.date}</span>
          <span className="w-px h-3 bg-gray-700"></span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-[20px] md:text-[24px] font-display font-bold text-white leading-tight mb-4 transition-colors">
          {post.title}
        </h3>

        <div className="mt-auto pt-2">
          <div className="flex items-center text-brand-green hover:scale-105 font-bold text-sm group/link">
            Read more
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  return (
    <div className="bg-[#050505] py-24 border-t border-white/5 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <h2 className="text-[32px] lg:text-[56px] font-display font-medium text-white mb-6 tracking-tight leading-[1.2]">
              From the blog
            </h2>
            <p className="text-gray-400 text-[16px] md:text-[20px] leading-[1.5] max-w-sm mx-auto md:mx-0">
              Latest thinking on podcast strategy, guest booking, and B2B
              content.
            </p>
          </div>

          <button className="group flex items-center pl-6 pr-2 py-2 bg-gradient-to-r from-[#00D26A] to-[#D4FF00] rounded-full text-black font-bold transition-all hover:shadow-[0_0_20px_rgba(0,210,106,0.3)] hover:scale-105">
            <span className="mr-4 text-sm font-display tracking-wide">
              View All Articles
            </span>
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white relative overflow-hidden">
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:-rotate-45 transition-transform duration-300" />
            </div>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
