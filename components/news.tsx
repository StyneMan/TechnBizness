"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import BlogImage01 from "@/public/images/workflow-01.png";
import BlogImage02 from "@/public/images/hero-image-01.jpg";
import BlogImage03 from "@/public/images/hero-image-01.jpg";
import BlogImage04 from "@/public/images/features.png";
import BlogImage05 from "@/public/images/testimonial-04.jpg";
import BlogImage06 from "@/public/images/hero-image-01.jpg";
import AuthorImg01 from "@/public/images/hero-image-01.jpg";
import AuthorImg02 from "@/public/images/hero-image-01.jpg";
import AuthorImg03 from "@/public/images/hero-image-01.jpg";

const blogPosts = [
  {
    id: 1,
    image: BlogImage01,
    authorImg: AuthorImg01,
    title: "The Future of AI in Web Development",
    author: "Sarah Johnson",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the way we build and interact with websites...",
    categories: [1, 3],
    date: "May 15, 2023",
    readTime: "5 min",
  },
  {
    id: 2,
    image: BlogImage02,
    authorImg: AuthorImg02,
    title: "Responsive Design Best Practices for 2023",
    author: "Michael Chen",
    excerpt:
      "Learn the latest techniques for creating websites that look great on any device...",
    categories: [1, 2],
    date: "June 2, 2023",
    readTime: "4 min",
  },
  {
    id: 3,
    image: BlogImage03,
    authorImg: AuthorImg03,
    title: "Optimizing React Performance",
    author: "Emma Rodriguez",
    excerpt:
      "Practical tips to make your React applications faster and more efficient...",
    categories: [1, 4],
    date: "June 18, 2023",
    readTime: "7 min",
  },
  {
    id: 4,
    image: BlogImage04,
    authorImg: AuthorImg01,
    title: "CSS Grid vs Flexbox: When to Use Each",
    author: "Sarah Johnson",
    excerpt:
      "A comprehensive guide to choosing the right layout system for your project...",
    categories: [1, 2],
    date: "July 5, 2023",
    readTime: "6 min",
  },
  {
    id: 5,
    image: BlogImage05,
    authorImg: AuthorImg02,
    title: "Building Accessible Web Applications",
    author: "Michael Chen",
    excerpt:
      "Why accessibility matters and how to implement it in your projects...",
    categories: [1, 3],
    date: "July 12, 2023",
    readTime: "8 min",
  },
  {
    id: 6,
    image: BlogImage06,
    authorImg: AuthorImg03,
    title: "TypeScript Adoption Guide for Teams",
    author: "Emma Rodriguez",
    excerpt:
      "How to successfully migrate your JavaScript codebase to TypeScript...",
    categories: [1, 4],
    date: "July 20, 2023",
    readTime: "9 min",
  },
];

export default function LatestNews() {
  const [category, setCategory] = useState<number>(0); // 0 = All

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Latest News & Tips
          </h2>
          <p className="text-lg text-indigo-200/65">
            Stay updated with the latest trends, tutorials, and insights in business
            growth and technology.
          </p>
        </div>


        {/* Blog posts grid - removed masonry and using fixed height grid */}
        <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts
            .filter(
              (post) => category === 0 || post.categories.includes(category)
            )
            .map((post) => (
              <NewsCard key={post.id} post={post} />
            ))}
        </div>
      </div>
    </div>
  );
}
export function NewsCard({
  post,
}: {
  post: {
    image: StaticImageData;
    authorImg: StaticImageData;
    title: string;
    author: string;
    excerpt: string;
    date: string;
    readTime: string;
  };
}) {
  return (
    <article className="relative flex pb-5 flex-col h-full min-h-[500px] rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
      <div className="flex flex-col h-full">
        {/* Image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4">
          <Image
            src={post.image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={post.title}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Date and read time */}
        <div className="flex items-center gap-2 px-5 text-sm text-gray-400 mb-3">
          <span>{post.date}</span>
          <span className="text-gray-700">•</span>
          <span>{post.readTime} read</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold px-5 text-gray-100 group-hover:text-indigo-300 transition-colors mb-3 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-300 px-5 line-clamp-3 mb-6 flex-grow">
          {post.excerpt}
        </p>

        {/* Author - pushed to bottom */}
        <div className="flex items-center px-5 gap-3 mt-auto pt-4 border-t border-gray-800">
          <Image
            className="inline-flex shrink-0 rounded-full"
            src={post.authorImg}
            width={36}
            height={36}
            alt={post.author}
          />
          <div className="text-sm font-medium text-gray-200">
            <span>{post.author}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
