import React, { useState, useEffect } from "react";
import { Moon, Sun, ChevronRight } from "lucide-react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import BlogPage from "./BlogPage";
import Home from "./Home";
import About from "./About";
import BlogPostId from "./BlogPostId";

const blogPosts = [
  {
    id: 1,
    title: "Understanding AI: Basics and Beyond",
    date: "Apr 15, 2024",
    category: "AI Basics",
    excerpt:
      "A beginner-friendly overview of AI concepts, history, and how it's shaping the world.",
    content: "Full blog post content here...",
    readTime: "5 min read",
    longDescription:
      "This post explores AI from the ground up, covering fundamental concepts, popular algorithms, and real-world applications. It’s a guide to understand how AI works and its future potential.",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJEN1-4njo8c8YozoXhEvpAxgNOM3YC3aSg&s",
  },
  {
    id: 2,
    title: "Data Science for Beginners",
    date: "Apr 1, 2024",
    category: "Data Science",
    excerpt:
      "An introduction to data science, covering data collection, analysis, and visualization.",
    content: "Full blog post content here...",
    readTime: "6 min read",
    longDescription:
      "Learn about data science, the process of data cleaning, exploratory data analysis, and model building. Essential tools like Python, R, and SQL are discussed, along with popular libraries.",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIGRNN7IQi7De3IxL6jLyZT7fSXRUHGUlOUw&s",
  },
  {
    id: 3,
    title: "Exploring Machine Learning Models",
    date: "Mar 20, 2024",
    category: "Machine Learning",
    excerpt:
      "A deep dive into different machine learning models and when to use each.",
    content: "Full blog post content here...",
    readTime: "7 min read",
    longDescription:
      "This post explains various machine learning algorithms and models, such as decision trees, support vector machines, and neural networks, with tips for choosing the right model for your data.",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyPi7pd-qaVYRKwgIKvvQfJxvgwkI85UmZIQ&s",
  },
  {
    id: 4,
    title: "Natural Language Processing Demystified",
    date: "Oct 25, 2024",
    category: "NLP",
    excerpt:
      "An overview of NLP, including key concepts and techniques for text analysis.",
    content: "Full blog post content here...",
    readTime: "8 min read",
    longDescription:
      "This post covers NLP concepts like tokenization, stemming, and sentiment analysis, with insights into practical applications like chatbots, language translation, and text summarization.",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdkOmnl8E3pqAXPlC50KzEHpu6plXsEQ6ZHA&s",
  },
  {
    id: 5,
    title: "Data Visualization for Effective Storytelling",
    date: "Oct 30, 2024",
    category: "Data Visualization",
    excerpt:
      "Learn the principles of data visualization to communicate insights effectively.",
    content: "Full blog post content here...",
    readTime: "5 min read",
    longDescription:
      "This article explores best practices in data visualization, covering techniques for storytelling through data, choosing the right visualizations, and real-world case studies.",
    heroImage: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data_Visualization.jpg",
  },
];

const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDark(prefersDark);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm">
          <div className="max-w-5xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link
                to="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              >
                AI & DS Space
              </Link>
              <div className="flex items-center space-x-8">
                <Link
                  to="/"
                  className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/blog"
                  className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
                <Link
                  to="/about"
                  className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-6 pt-32 pb-16">
          <Routes>
            <Route path="/" element={<Home blogPosts={blogPosts} />} />
            <Route path="/blog" element={<BlogPage blogPosts={blogPosts} />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog/:postId" element={<BlogPostId blogPosts={blogPosts} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
