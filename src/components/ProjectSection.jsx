import React from "react";
import { FaGithub } from "react-icons/fa";

export default function ProjectSection() {
  const projects = [
    {
      image: "/images/harry.jpg",
      title: "Readymade Components",
      description:
        "A collection of reusable, production-ready React + Tailwind components designed for faster UI development.",
      language: ["React", "Tailwind"],
      live: "https://my-portfolio-link",
      github: "https://github.com/Haris531/readymade-components",
    },
    {
      image: "/images/harry.jpg",
      title: "FeedKaro Website",
      description:
        "A modern social feed app allowing users to share, like, and engage — built using React and Tailwind CSS.",
      language: ["React", "Tailwind"],
      live: "https://my-portfolio-link",
      github: "https://github.com/Haris531/fedkaro",
    },
    {
      image: "/images/harry.jpg",
      title: "Uber Website",
      description:
        "A responsive clone of Uber’s landing page, showcasing smooth animations, and pixel-perfect layout using React.",
      language: ["React", "Tailwind"],
      live: "https://my-portfolio-link",
      github: "https://github.com/Haris531/Sample-Uber",
    },
    
  ];

  return (
    <section id="projects" className="bg-[#E3EFFD] min-h-screen px-6 sm:px-10 md:px-16 lg:px-20 py-20">
      <div>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          My <span className="text-[#64A1FD]">Projects</span>
        </h2>
        <p className="text-center text-gray-500 text-base md:text-lg mb-12 max-w-2xl mx-auto">
          A collection of my recent work showcasing design, development, and
          creativity using modern web technologies.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden group">
                <img src={project.image} alt={project.title} className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {project.title}
                  </h3>
                </div>
              </div>
          
              <div className="p-6 space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.language.map((tech, i) => (
                    <span key={i} className="text-xs font-medium bg-[#64A1FD]/90 text-white px-3 py-1 rounded-full shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="text-[#64A1FD] font-semibold text-sm hover:text-blue-700 transition-colors">
                    Live Demo →
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#64A1FD] font-semibold text-sm transition">
                    <FaGithub size={20} className="text-gray-800" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
