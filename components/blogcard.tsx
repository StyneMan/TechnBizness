// components/BlogCard.tsx
import Image from "next/image";
// import { FiCalendar, FiUser, FiFolder } from "react-icons/fi";

export default function BlogCard({
  post,
  onClick,
}: {
  post: any;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-800/50 rounded-xl p-6 shadow-2xl cursor-pointer hover:bg-gray-800 transition-all h-full flex flex-col"
    >
      <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-400 mb-3 space-x-4">
          <span className="flex items-center">
            {/* <FiCalendar className="mr-1" /> {post.date} */}
          </span>
          <span className="flex items-center">
            {/* <FiUser className="mr-1" /> {post.author.name} */}
          </span>
          <span className="flex items-center">
            {/* <FiFolder className="mr-1" /> {post.category.name} */}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="mt-auto">
          <span className="text-indigo-400 font-medium">Read more →</span>
        </div>
      </div>
    </div>
  );
}
