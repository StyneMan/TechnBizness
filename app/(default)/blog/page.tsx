// app/blog/page.tsx
"use client";

import { useState } from "react";
// import { FiSearch, FiCalendar, FiUser, FiFolder } from "react-icons/fi";
import { useRouter } from "next/navigation";
import BlogCard from "@/components/blogcard";
import { NewsCard } from "@/components/news";
import BlogImage01 from "@/public/images/workflow-01.png";
import BlogImage02 from "@/public/images/hero-image-01.jpg";
import BlogImage03 from "@/public/images/hero-image-01.jpg";
import BlogImage04 from "@/public/images/features.png";
import BlogImage05 from "@/public/images/testimonial-04.jpg";
import BlogImage06 from "@/public/images/hero-image-01.jpg";
import AuthorImg01 from "@/public/images/hero-image-01.jpg";
import AuthorImg02 from "@/public/images/hero-image-01.jpg";
import AuthorImg03 from "@/public/images/hero-image-01.jpg";
import AboutHero from "@/public/images/hero-image-01.jpg";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    image: BlogImage01,
    authorImg: AuthorImg01,
    title: "The Future of AI in Web Development",
    author: "Sarah Johnson",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the way we build and interact with websites...",
    category: { id: 1, name: "Technology" },
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
    category: { id: 1, name: "Technology" },
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
    category: { id: 1, name: "Technology" },
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
    category: { id: 1, name: "Technology" },
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
    category: { id: 1, name: "Technology" },
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
    category: { id: 1, name: "Technology" },
    date: "July 20, 2023",
    readTime: "9 min",
  },
];

const categories = [
  { id: 1, name: "Technology" },
  { id: 2, name: "Business" },
  { id: 3, name: "Development" },
  { id: 4, name: "Design" },
  { id: 5, name: "Marketing" },
];

const authors = [
  { id: 1, name: "Sarah Johnson" },
  { id: 2, name: "Michael Chen" },
  { id: 3, name: "Emma Rodriguez" },
];

// const blogPosts = [
//   {
//     id: 1,
//     title: "The Future of AI in Web Development",
//     excerpt:
//       "Exploring how artificial intelligence is revolutionizing the way we build and interact with websites...",
//     category: { id: 1, name: "Technology" },
//     author: { id: 1, name: "Sarah Johnson" },
//     date: "May 15, 2023",
//     readTime: "5 min",
//     image: "/images/hero-image-01.jpg",
//     content: "Full content about AI in web development...",
//   },
//   // Add more blog posts...
// ];

export default function BlogPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedAuthor, setSelectedAuthor] = useState<number | null>(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory
      ? post.category.id === selectedCategory
      : true;
    // const matchesAuthor = selectedAuthor
    //   ? post.author.id === selectedAuthor
    //   : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96">
        <Image
          src={AboutHero}
          alt="TechnBizness team working together"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-900/50 flex items-end pb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Tips</h1>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Insights, trends, and best practices in technology and business
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sticky Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-8 space-y-8">
              {/* Search */}
              <div className="bg-gray-800/50 rounded-xl p-6 shadow-2xl">
                <h3 className="text-xl font-semibold mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by title, author or category"
                    className="w-full px-4 py-3 pl-10 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {/* <FiSearch className="absolute left-3 top-3.5 text-gray-400" /> */}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gray-800/50 rounded-xl p-6 shadow-2xl">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() =>
                          setSelectedCategory(
                            selectedCategory === category.id
                              ? null
                              : category.id
                          )
                        }
                        className={`flex items-center w-full px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? "bg-indigo-600 text-white"
                            : "hover:bg-gray-700"
                        }`}
                      >
                        {/* <FiFolder className="mr-2" /> */}
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Authors */}
              <div className="bg-gray-800/50 rounded-xl p-6 shadow-2xl">
                <h3 className="text-xl font-semibold mb-4">Authors</h3>
                <ul className="space-y-2">
                  {authors.map((author) => (
                    <li key={author.id}>
                      <button
                        onClick={() =>
                          setSelectedAuthor(
                            selectedAuthor === author.id ? null : author.id
                          )
                        }
                        className={`flex items-center w-full px-3 py-2 rounded-lg transition-colors ${
                          selectedAuthor === author.id
                            ? "bg-indigo-600 text-white"
                            : "hover:bg-gray-700"
                        }`}
                      >
                        {/* <FiUser className="mr-2" /> */}
                        {author.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="lg:w-3/4">
            <div className="grid sm:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => router.push(`/blog/${post.id}`)}
                >
                  <NewsCard post={post} />
                </div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-400">
                  No blog posts found matching your criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
