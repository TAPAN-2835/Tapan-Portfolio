"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Converse - Real-time Chat Application",
    description:
      "A full-stack real-time chat application with user authentication, group and private messaging, and a modern UI.",
    image: "https://placehold.co/400x300/1e293b/ffffff?text=Converse&font=roboto",
    technologies: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com/TAPAN-2835/Converse",
    live: "https://converse-uh0p.onrender.com/",
    details:
      "Converse is my first major full-stack project, designed to provide a seamless real-time chat experience. It features user authentication, group and private messaging, message notifications, and a responsive, modern interface. The backend is built with Node.js, Express, and MongoDB, while the frontend uses React and Socket.io for instant communication. Deployed on Render, Converse demonstrates my ability to build, deploy, and maintain production-ready web applications.",
  },
  {
    id: 2,
    title: "QuickKart - E-commerce Platform",
    description: "A modern, full-stack e-commerce platform for seamless online shopping, featuring product search, cart, and secure checkout.",
    image: "https://placehold.co/400x300/0e7490/ffffff?text=QuickKart&font=roboto",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    github: "https://github.com/TAPAN-2835/QuickKart",
    live: "https://quick-kart-i57j.vercel.app/",
    details:
      "QuickKart is a robust e-commerce web application designed for a smooth and intuitive shopping experience. It supports user authentication, product browsing, advanced search, shopping cart, and secure checkout. The backend is built with Node.js, Express, and MongoDB, while the frontend leverages React and Redux for state management. QuickKart demonstrates my ability to build scalable, user-friendly, and production-ready online stores, and is deployed on Vercel for high availability.",
  },
  {
    id: 3,
    title: "Artificial Intelligence: Agentic AI, Gen AI, and RL",
    description: "A comprehensive collection of Jupyter Notebooks and Python code exploring Agentic AI, Generative AI, and Reinforcement Learning concepts and implementations.",
    image: "https://placehold.co/400x300/7c3aed/ffffff?text=AI+GenAI+RL&font=roboto",
    technologies: ["Python", "Jupyter Notebook", "Reinforcement Learning", "Generative AI", "Agentic AI"],
    github: "https://github.com/TAPAN-2835/Artificial-Intelligence-Agentic-AI-Gen-AI-and-RL",
    live: "",
    details:
      "This project is a deep dive into modern artificial intelligence, focusing on Agentic AI, Generative AI, and Reinforcement Learning. It features hands-on Jupyter Notebooks and Python scripts that demonstrate key algorithms, concepts, and real-world applications. Ideal for learners and practitioners, this repository showcases my expertise in AI research, experimentation, and technical communication.",
  },
  {
    id: 4,
    title: "RTL to GDSII VLSI Design: 8-bit Subtractor (Synopsys Flow)",
    description: "Hands-on ASIC digital backend design flow for an 8-bit subtractor using Synopsys EDA tools, from Verilog RTL to GDSII layout.",
    image: "https://placehold.co/400x300/334155/ffffff?text=8-bit+Subtractor&font=roboto",
    technologies: ["Verilog", "Tcl", "Synopsys VCS", "Design Compiler", "IC Compiler II", "PrimeTime"],
    github: "https://github.com/TAPAN-2835/TAPAN_23BIT158_8bit_Subtractor",
    live: "",
    details:
      "This project documents the complete backend digital design flow for an 8-bit subtractor circuit, implemented using Synopsys EDA tools. The flow covers RTL design and simulation, synthesis, floorplanning, power planning, placement, clock tree synthesis, routing, and static timing analysis. All steps are automated with Tcl scripts and verified with industry-standard tools. Developed during a workshop at PDEU, this project demonstrates my practical skills in ASIC design and VLSI workflows.",
  },
  {
    id: 5,
    title: "EcoMiles - EcoTransitRewards Platform",
    description: "An innovative rewards-based platform to encourage sustainable commuting, featuring gamification, ticket verification, and a user wallet.",
    image: "https://placehold.co/400x300/059669/ffffff?text=EcoMiles&font=roboto",
    technologies: ["Node.js", "Express.js", "SQLite", "HTML", "CSS", "JavaScript", "EJS"],
    github: "https://github.com/TAPAN-2835/EcoMiles",
    live: "",
    details:
      "EcoMiles (EcoTransitRewards) is a web application designed to promote eco-friendly commuting by rewarding users for sustainable travel choices. The platform features user authentication, a customizable dashboard, and gamified elements like streaks and referral bonuses. Built with Node.js, Express, and SQLite, EcoMiles demonstrates my ability to design and implement full-stack solutions with a focus on user engagement and social impact. Future updates will include ticket verification, a redeemable wallet, and enhanced notifications.",
  },
  {
    id: 6,
    title: "QRify - Instant QR Code Generator",
    description: "A simple and efficient web app for generating QR codes instantly from user input, with a clean and responsive UI.",
    image: "https://placehold.co/400x300/ca8a04/ffffff?text=QRify&font=roboto",
    technologies: ["JavaScript", "Node.js", "Express.js", "HTML", "CSS"],
    github: "https://github.com/TAPAN-2835/QRify",
    live: "",
    details:
      "QRify is a lightweight web application that allows users to generate QR codes on the fly for any text or URL. Built with Node.js, Express, and vanilla JavaScript, it features a clean, responsive interface and instant QR code rendering. This project demonstrates my ability to deliver practical, user-friendly tools with a focus on simplicity and performance.",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/80" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer group flex flex-col shadow-lg hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px 0 rgba(34,211,238,0.15)",
                y: -8,
              }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 text-cyan-400 text-xs rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-full border border-gray-700">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex-grow" />
                <div className="flex gap-3 mt-4">
                  <motion.a
                    whileHover={{ scale: 1.08, y: -2, boxShadow: "0 4px 16px 0 rgba(34,211,238,0.15)" }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  {project.live && project.live.trim() !== "" && (
                  <motion.a
                      whileHover={{ scale: 1.08, y: -2, boxShadow: "0 4px 16px 0 rgba(139,92,246,0.15)" }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live</span>
                  </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-gray-800/80 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedProject.details}</p>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-cyan-400 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-gray-800 text-cyan-400 rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    View Code
                  </motion.a>
                  <motion.a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
