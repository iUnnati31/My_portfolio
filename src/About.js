import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900 px-8 md:px-16 lg:px-32"
    >
      <div className="space-y-12 max-w-4xl mx-auto text-center md:text-left">
        <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hello! I'm a Data Scientist and AI enthusiast with a passion for
              transforming data into actionable insights. My work focuses on building
              intelligent solutions using Machine Learning and AI to solve real-world
              problems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in NLP, time-series forecasting, and computer vision, with
              experience in deploying scalable data science solutions and using
              deep learning frameworks.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Technologies I work with:
              </h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {[
                  "Python",
                  "TensorFlow",
                  "PyTorch",
                  "Scikit-Learn",
                  "SQL",
                  "Power BI",
                  "AWS",
                  "Docker",
                  "NLP",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="https://img.freepik.com/free-vector/ai-technology-concept-illustration_114360-7960.jpg"
              alt="AI Enthusiast Profile"
              className="rounded-xl shadow-lg w-64 h-64 md:w-72 md:h-72 object-cover"
            />
          </div>
        </div>
        <div className="text-gray-600 dark:text-gray-400 mt-8 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            A Little More About Me
          </h3>
          <p>
            When I'm not working on data projects, I enjoy staying up-to-date with
            the latest advancements in AI, experimenting with new algorithms, and
            contributing to open-source AI projects.
          </p>
          <p>
            Outside of tech, I love reading sci-fi novels, exploring new cuisines,
            and hiking. My curiosity drives me to continuously learn and grow in the
            AI/DS field, always eager to take on challenging projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
