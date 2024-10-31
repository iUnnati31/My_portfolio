import React from "react";
import { useParams } from "react-router-dom";

const BlogPostId = ({ blogPosts }) => {
  const { postId } = useParams();
  const post = blogPosts.find((p) => p.id === Number(postId)); // Convert postId to a number

  if (!post) return <p>Post not found</p>;

  return (
    <section className="min-h-screen pt-24 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900">
      <article className="space-y-8 max-w-4xl mx-auto bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
          {post.title}
        </h1>
        <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 mb-4">
          <span className="text-lg">{post.date}</span>
          <span className="text-lg">{post.readTime}</span>
        </div>
        {/* Hero Image */}
        <img
          src={post.heroImage}
          alt={post.title}
          className="w-full h-auto rounded-xl mb-6 shadow-md"
        />
        <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {post.longDescription && (
            <p className="mb-6">{post.longDescription}</p>
          )}
        </div>
      </article>
    </section>
  );
};

export default BlogPostId;
