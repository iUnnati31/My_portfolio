import React from "react";
import { FileDown, Github } from "lucide-react";

import { BlogPost } from "./BlogPage"; // Import the BlogPage component

const Home = ({ blogPosts }) => {
  return (
    <section id="home">
      <div className="space-y-16">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            Building{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              intelligent
            </span>
            <br />
            data-driven solutions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Data Scientist and AI enthusiast passionate about leveraging machine learning and data analytics to create impactful insights and drive decision-making.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://drive.google.com/file/d/1Ewnj0cBRX4AXjzYaAJK1qw-8jvqz7moX/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FileDown className="mr-2 w-4 h-4" />
            Download CV
          </a>
          <a
            href="https://github.com/iUnnati31"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Github className="mr-2 w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>

      <section className="min-h-screen pt-24">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Blog</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              I write about AI, data science, and emerging trends in machine learning and data analytics. Blogging allows me to document my learning and share knowledge with the data science community.
            </p>
          </div>
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
