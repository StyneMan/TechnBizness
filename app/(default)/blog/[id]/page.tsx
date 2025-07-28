// app/blog/[id]/page.tsx
"use client";

import { useState } from "react";
// import { FiCalendar, FiUser, FiFolder, FiMessageSquare } from "react-icons/fi";
import Image from "next/image";

export default function BlogDetail({ params }: { params: { id: string } }) {
  // In a real app, you would fetch this data based on params.id
  const blogPost = {
    id: 1,
    title: "The Future of AI in Web Development",
    content: `
      <p>Artificial Intelligence is transforming web development in unprecedented ways. From automated code generation to intelligent user interfaces, AI is changing how we build and interact with websites.</p>
      
      <h2>AI-Powered Development Tools</h2>
      <p>Modern AI tools can now generate functional code snippets, suggest optimizations, and even help debug complex issues. This is revolutionizing developer productivity.</p>
      
      <h2>Personalized User Experiences</h2>
      <p>AI enables websites to adapt in real-time to user behavior, creating truly personalized experiences that increase engagement and conversion rates.</p>
    `,
    category: { id: 1, name: "Technology" },
    author: { id: 1, name: "Sarah Johnson" },
    date: "May 15, 2023",
    readTime: "5 min",
    image: "/images/hero-image-01.jpg",
  };

  const [comments, setComments] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      comment: "Great article! AI is definitely changing the game.",
      date: "May 16, 2023",
      replies: [
        {
          id: 1,
          name: "Author",
          email: "sarah@technbizness.com",
          comment: "Thanks for your feedback, John!",
          date: "May 16, 2023",
        },
      ],
    },
  ]);

  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    comment: "",
    isReply: false,
    parentId: null as number | null,
  });

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.name && newComment.email && newComment.comment) {
      if (newComment.isReply && newComment.parentId) {
        // Add reply to existing comment
        setComments(
          comments.map((comment) => {
            if (comment.id === newComment.parentId) {
              return {
                ...comment,
                replies: [
                  ...comment.replies,
                  {
                    id: Math.max(0, ...comment.replies.map((r) => r.id)) + 1,
                    name: newComment.name,
                    email: newComment.email,
                    comment: newComment.comment,
                    date: new Date().toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }),
                  },
                ],
              };
            }
            return comment;
          })
        );
      } else {
        // Add new comment
        setComments([
          ...comments,
          {
            id: Math.max(0, ...comments.map((c) => c.id)) + 1,
            name: newComment.name,
            email: newComment.email,
            comment: newComment.comment,
            date: new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            replies: [],
          },
        ]);
      }
      setNewComment({
        name: "",
        email: "",
        comment: "",
        isReply: false,
        parentId: null,
      });
    }
  };

  const handleReplyClick = (commentId: number) => {
    setNewComment({
      name: "",
      email: "",
      comment: "",
      isReply: true,
      parentId: commentId,
    });
    // Scroll to comment form
    document
      .getElementById("comment-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Blog Post */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <article className="mb-16">
          <div className="flex items-center text-sm text-gray-400 mb-6 space-x-4">
            <span className="flex items-center">
              {/* <FiCalendar className="mr-1" /> {blogPost.date} */}
            </span>
            <span className="flex items-center">
              {/* <FiUser className="mr-1" /> {blogPost.author.name} */}
            </span>
            <span className="flex items-center">
              {/* <FiFolder className="mr-1" /> {blogPost.category.name} */}
            </span>
            <span>{blogPost.readTime} read</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {blogPost.title}
          </h1>

          <div className="relative h-96 w-full overflow-hidden rounded-xl mb-8">
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              fill
              className="object-cover"
            />
          </div>

          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </article>

        {/* Comments Section */}
        <section className="border-t border-gray-800 pt-12">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            {/* <FiMessageSquare className="mr-2 text-indigo-400" /> */}
            Comments ({comments.length})
          </h2>

          <div className="space-y-8 mb-12">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-gray-800/50 rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-bold">{comment.name}</h4>
                    <p className="text-sm text-gray-400">{comment.date}</p>
                  </div>
                  <button
                    onClick={() => handleReplyClick(comment.id)}
                    className="text-sm text-indigo-400 hover:text-indigo-300"
                  >
                    Reply
                  </button>
                </div>
                <p className="text-gray-300 mb-4">{comment.comment}</p>

                {comment.replies.length > 0 && (
                  <div className="pl-6 border-l-2 border-gray-700 space-y-4 mt-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="pt-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-bold">{reply.name}</h4>
                            <p className="text-sm text-gray-400">
                              {reply.date}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-300">{reply.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Comment Form */}
          <form
            id="comment-form"
            onSubmit={handleCommentSubmit}
            className="bg-gray-800/50 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6">
              {newComment.isReply ? "Leave a Reply" : "Leave a Comment"}
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newComment.name}
                  onChange={(e) =>
                    setNewComment({ ...newComment, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={newComment.email}
                  onChange={(e) =>
                    setNewComment({ ...newComment, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="comment"
                className="block text-sm font-medium mb-2"
              >
                Comment *
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={5}
                value={newComment.comment}
                onChange={(e) =>
                  setNewComment({ ...newComment, comment: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Post Comment
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
