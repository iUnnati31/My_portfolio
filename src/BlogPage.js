import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPage = ({ blogPosts }) => {
  return (
    <section className="min-h-screen pt-24">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Blog</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            I write about data science, AI trends, and my
            journey. Writing helps me learn, reflect, and share
            knowledge with the community.
          </p>
        </div>
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const BlogPost = ({ post }) => {
  const categoryColors = {
    Technical: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
    "Tech Trends":
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100",
    Personal:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
  };

  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl p-6 space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {post.date}
        </span>
        <div className="flex items-center space-x-3">
          <span
            className={`px-3 py-1 rounded-full text-sm ${categoryColors[post.category]}`}
          >
            {post.category}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {post.readTime}
          </span>
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        {post.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
      <Link to={`/blog/${post.id}`}>
        <button className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
          Read more <ChevronRight className="ml-2 w-4 h-4" />
        </button>
      </Link>
    </article>
  );
};

export default BlogPage;
