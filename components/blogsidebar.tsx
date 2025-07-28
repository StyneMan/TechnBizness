// components/BlogSidebar.tsx
"use client";

import { useState } from "react";
// import { FiSearch, FiFolder, FiUser } from "react-icons/fi";
import { useRouter } from "next/navigation";

const categories = [
  { id: 1, name: "Technology" },
  { id: 2, name: "Business" },
  { id: 3, name: "Development" },
];

const authors = [
  { id: 1, name: "Sarah Johnson" },
  { id: 2, name: "Michael Chen" },
];

export default function BlogSidebar() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedAuthor, setSelectedAuthor] = useState<number | null>(null);

  const handleSearch = () => {
    let query = "";
    if (searchTerm) query += `search=${encodeURIComponent(searchTerm)}&`;
    if (selectedCategory) query += `category=${selectedCategory}&`;
    if (selectedAuthor) query += `author=${selectedAuthor}&`;

    router.push(`/blog?${query.slice(0, -1)}`);
  };

  return (
    <div className="sticky top-8 space-y-8">
      {/* Search */}
      <div className="bg-gray-800/50 rounded-xl p-6 shadow-2xl">
        <h3 className="text-xl font-semibold mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full px-4 py-3 pl-10 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
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
                onClick={() => {
                  setSelectedCategory(
                    selectedCategory === category.id ? null : category.id
                  );
                  handleSearch();
                }}
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
                onClick={() => {
                  setSelectedAuthor(
                    selectedAuthor === author.id ? null : author.id
                  );
                  handleSearch();
                }}
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
  );
}
