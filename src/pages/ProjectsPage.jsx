import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A sleek personal portfolio showcasing my skills in React, Tailwind, and modern UI design(Responsive). - You are currently here",
    image: "/homepage.png",
    link: "https://my-portfolio-gamma-eight-59.vercel.app/",
    github: "https://github.com/John-Kassah/Portfolio.git",
  },
  {
    title: "Rouje Naturel ~ E-commerce",
    description:
      "I developed the full backend from scratch with secure JWT authentication for users, product and account management, payment processing with Paystack, and automated email alerts for every order.",
    image: "/rouje_naturel.png",
    link: "https://www.roujenaturel.com/",
    github: "https://github.com/John-Kassah/Rouje-Natural-Shea",
  },
  {
    title: "To-Do List Platform",
    description:
      "A basic to-do list app showcasing my skills in  the famous CRUD operations implementation, working with databases and Redis rate-limiter implementation.",
    image: "/todoApp.png",
    link: "https://todoappx.onrender.com",
    github: "https://github.com/John-Kassah/ToDoApp.git",
  },
  {
    title: "Video Streaming Platform",
    description:
      "Coming soon",
    image: "https://picsum.photos/1200/800?random=3",
    link: "https://example.com/video",
    github: "https://github.com/John-Kassah/VideoStreamingPlatform.git",
  },
];

// Only scaling for wrapper on hover
const wrapperVariants = {
  rest: { scale: 0.85, opacity: 0.92 },
  hover: { scale: 1, opacity: 1 },
};

// Image scales subtly on hover
const imageVariants = {
  rest: { scale: 0.9 },
  hover: { scale: 1 },
};

// REMOVE blur effect from card
const cardVariants = {
  rest: {}, // No blur
  hover: {}, // Still no blur, only wrapper scales
};

// Overlay still fades out on hover
const overlayVariants = {
  rest: { opacity: 1 },
  hover: { opacity: 0 },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          My Projects
        </h2>

        <div className="flex flex-col gap-16">
          {projects.map((project, idx) => (
            <ProjectRow key={idx} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}

function ProjectRow({ project }) {
  return (
    <section className="relative w-full mt-3">
      <motion.div
        className="w-full"
        variants={wrapperVariants}
        initial="rest"
        animate="rest"
        whileHover="hover" // Only wrapper scales now
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 ml-8 md:grid-cols-[1fr_1fr] items-center gap-6">
          {/* IMAGE COLUMN */}
          <div className="flex justify-center md:justify-start">
            <motion.div
              className="relative w-full md:w-[70%] lg:w-[68%] overflow-visible"
              variants={imageVariants}
              transition={{ duration: 0.45, ease: "easeOut" }}
              style={{ transformOrigin: "left center" }}
              aria-hidden="true"
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                  block
                  w-[120%] md:w-[140%] lg:w-[150%]
                  rounded-xl shadow-2xl object-cover
                "
                style={{ marginLeft: "-20%", zIndex: 30 }}
                draggable={false}
              />

              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  marginLeft: "-20%",
                  zIndex: 40,
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.14), rgba(6,182,212,0.10))",
                }}
                variants={overlayVariants}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </motion.div>
          </div>

          {/* CARD COLUMN */}
          <motion.article
            className="relative bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_10px_30px_rgba(2,6,23,0.7)] text-left z-20"
            variants={cardVariants} // No blur effect
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="md:ml-[6%] lg:ml-[10%]">
              <motion.h3
                className="text-2xl font-bold mb-3 transition-colors duration-300 text-purple-300"
                variants={{
                  rest: { color: "rgb(139 92 246)" },
                  hover: { color: "rgb(125 211 252)" },
                }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                {project.title}
              </motion.h3>

              <p className="text-gray-300 mb-5 leading-relaxed">{project.description}</p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-250"
                >
                  View Project →
                </a>

                {project.github && (
                  <div className="mt-3 sm:mt-0 text-sm text-gray-400">
                    <span className="mr-2">•</span>
                    <a
                      className="underline hover:text-white"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      repo
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}
