"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Converse - Real-time Chat Application",
<<<<<<< HEAD
    description:
      "A full-stack real-time chat application with user authentication, group and private messaging, and a modern UI.",
    image: "https://placehold.co/400x300/1e293b/ffffff?text=Converse&font=roboto",
    technologies: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com/TAPAN-2835/Converse",
    live: "https://converse-uh0p.onrender.com/",
    details:
      "Converse is my first major full-stack project, designed to provide a seamless real-time chat experience. It features user authentication, group and private messaging, message notifications, and a responsive, modern interface. The backend is built with Node.js, Express, and MongoDB, while the frontend uses React and Socket.io for instant communication. Deployed on Render, Converse demonstrates my ability to build, deploy, and maintain production-ready web applications.",
=======
    description: "A full-stack real-time chat application with user authentication, group and private messaging, and a modern UI.",
    image: "/projects/converse.png",
    technologies: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
    category: "Full Stack",
    tags: ["Frontend", "Backend", "DBMS"],
    status: "Completed",
    github: "https://github.com/TAPAN-2835/Converse",
    live: "https://converse-uh0p.onrender.com/",
    problemStatement: "Bridging the gap in real-time communication by providing a seamless, feature-rich chat interface.",
    keyFeatures: ["Private/Group Messaging", "User Authentication", "Real-time Notifications", "Responsive Design"],
    role: "Full Stack Developer",
    futureScope: "Integration of voice/video calls and end-to-end encryption.",
    details: "Converse is my first major full-stack project, designed to provide a seamless real-time chat experience. It features user authentication, group and private messaging, message notifications, and a responsive, modern interface. The backend is built with Node.js, Express, and MongoDB, while the frontend uses React and Socket.io for instant communication. Deployed on Render, Converse demonstrates my ability to build, deploy, and maintain production-ready web applications.",
  },
  {
    id: 7,
    title: "CodePulse - Full-Stack Interview Platform",
    description: "An advanced interview platform with a VSCode-powered editor, 1-on-1 video rooms, and real-time collaboration tools.",
    image: "/projects/codepulse.png",
    technologies: ["React", "Node.js", "Clerk", "Stream", "MongoDB", "Inngest"],
    category: "Full Stack",
    tags: ["Frontend", "Backend", "DBMS"],
    status: "Completed",
    github: "https://github.com/TAPAN-2835/CodePulse",
    live: "https://code-pulse-nu.vercel.app",
    problemStatement: "Traditional technical interview platforms often lack integrated, high-performance coding environments combined with stable video communication.",
    keyFeatures: ["VSCode-Powered Editor", "1-on-1 Video Interview", "Real-time Chat", "Secure Code Execution", "Background Job Processing"],
    role: "Lead Developer",
    futureScope: "AI-based code analysis and multi-language support expansion.",
    details: "CodePulse is a feature-rich technical interview platform. It integrates a high-performance code editor with real-time video and chat capabilities. Built with scalability in mind, it uses Inngest for background jobs and Stream for video communication, ensuring a professional and reliable experience for both interviewers and candidates.",
  },
  {
    id: 8,
    title: "MacBook Pro - 3D Showcase",
    description: "An immersive Apple-style 3D website showcasing products with scroll-animated models and responsive UI.",
    image: "/projects/macbook.png",
    technologies: ["React", "Three.js", "GSAP", "Tailwind CSS", "Zustand"],
    category: "Web App",
    tags: ["Frontend"],
    status: "Completed",
    github: "https://github.com/TAPAN-2835/MacBook_GSAP",
    live: "https://mac-book-gsap-ruby.vercel.app",
    problemStatement: "Static product pages fail to capture the premium feel and intricate details of modern hardware.",
    keyFeatures: ["3D Product Scenes", "Scroll-triggered Animations", "Realistic Lighting", "Adaptive Layouts"],
    role: "Frontend Specialist",
    futureScope: "Adding AR capabilities and interactive product customization tools.",
    details: "A high-performance 3D product showcase inspired by Apple's design philosophy. Utilizing Three.js for rendering and GSAP for complex scroll interactions, this project delivers a premium user experience that blurs the line between web and reality.",
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)
  },
  {
    id: 2,
    title: "QuickKart - E-commerce Platform",
    description: "A modern, full-stack e-commerce platform for seamless online shopping, featuring product search, cart, and secure checkout.",
<<<<<<< HEAD
    image: "https://placehold.co/400x300/0e7490/ffffff?text=QuickKart&font=roboto",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    github: "https://github.com/TAPAN-2835/QuickKart",
    live: "https://quick-kart-i57j.vercel.app/",
    details:
      "QuickKart is a robust e-commerce web application designed for a smooth and intuitive shopping experience. It supports user authentication, product browsing, advanced search, shopping cart, and secure checkout. The backend is built with Node.js, Express, and MongoDB, while the frontend leverages React and Redux for state management. QuickKart demonstrates my ability to build scalable, user-friendly, and production-ready online stores, and is deployed on Vercel for high availability.",
=======
    image: "/projects/quickkart.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    category: "Full Stack",
    tags: ["Frontend", "Backend", "DBMS"],
    status: "Completed",
    github: "https://github.com/TAPAN-2835/QuickKart",
    live: "https://quick-kart-i57j.vercel.app/",
    problemStatement: "Simplifying the online shopping journey with a performant and intuitive e-commerce interface.",
    keyFeatures: ["Product Search/Filtering", "Shopping Cart", "Checkout System", "User Profiles"],
    role: "Full Stack Developer",
    futureScope: "Integration of global payment gateways and AI-driven recommendations.",
    details: "QuickKart is a robust e-commerce web application designed for a smooth and intuitive shopping experience. It supports user authentication, product browsing, advanced search, shopping cart, and secure checkout. The backend is built with Node.js, Express, and MongoDB, while the frontend leverages React and Redux for state management. QuickKart demonstrates my ability to build scalable, user-friendly, and production-ready online stores, and is deployed on Vercel for high availability.",
  },
  {
    id: 9,
    title: "RasRang - GSAP Landing Page",
    description: "A visually striking and responsive landing page featuring smooth high-performance GSAP animations.",
    image: "/projects/rasrang_main.png",
    technologies: ["React", "GSAP", "Tailwind CSS"],
    category: "Web App",
    tags: ["Frontend"],
    status: "Completed",
    github: "https://github.com/TAPAN-2835/RasRang",
    live: "https://ras-rang.vercel.app",
    problemStatement: "Modern websites need to stand out with micro-interactions and animations without sacrificing performance.",
    keyFeatures: ["Smooth Scroll Interactions", "Responsive Transitions", "Modern UI Aesthetic"],
    role: "Frontend Developer",
    futureScope: "Multi-page navigation with transition animations.",
    details: "RasRang is an exploration into the capabilities of GSAP for building interactive landing pages. It focuses on performance optimization and creating a unique brand experience through motion.",
  },
  {
    id: 10,
    title: "Dreamify - AI Image Generator",
    description: "A full-stack AI-powered image generation platform that transforms text descriptions into unique, high-quality visuals.",
    image: "/projects/dreamify.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
    category: "Full Stack",
    tags: ["Frontend", "Backend", "AI"],
    status: "Completed",
    github: "https://github.com/TAPAN-2835/Dreamify",
    live: "https://dreamifyy.vercel.app",
    problemStatement: "Bridging the gap between imagination and visual creation through high-performance AI generation.",
    keyFeatures: ["Text-to-Image Generation", "Credit-based System", "Stripe & Razorpay Integration", "User Authentication", "Responsive Image Gallery"],
    role: "Full Stack Developer",
    futureScope: "Integration of more advanced AI models and community sharing features.",
    details: "Dreamify is a comprehensive AI Image Generator platform built using the MERN stack. It allows users to login, purchase credits via secure payment gateways like Stripe or Razorpay, and generate high-quality images from text prompts. The application features a sleek UI with framer-motion animations and a robust backend to handle AI API integrations and credit management.",
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)
  },
  {
    id: 3,
    title: "Artificial Intelligence: Agentic AI, Gen AI, and RL",
<<<<<<< HEAD
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
=======
    description: "A comprehensive collection of study materials and implementations exploring Agentic AI, Generative AI, and Reinforcement Learning.",
    image: "https://placehold.co/400x300/7c3aed/ffffff?text=AI+GenAI+RL&font=roboto",
    technologies: ["Python", "Jupyter Notebook", "Reinforcement Learning", "Generative AI", "Agentic AI"],
    category: "AI",
    tags: ["AI/ML"],
    status: "Ongoing",
    github: "https://github.com/TAPAN-2835/Artificial-Intelligence-Agentic-AI-Gen-AI-and-RL",
    live: "",
    problemStatement: "Understanding and documenting the rapid evolution of complex AI architectures like Agentic systems and RL.",
    keyFeatures: ["Agentic Frameworks", "GenAI Implementation", "RL Algorithms", "Technical Documentation"],
    role: "Researcher",
    futureScope: "Applying these concepts to build autonomous agents for productivity.",
    details: "This project is a deep dive into modern artificial intelligence, focusing on Agentic AI, Generative AI, and Reinforcement Learning. It features hands-on Jupyter Notebooks and Python scripts that demonstrate key algorithms, concepts, and real-world applications. Ideal for learners and practitioners, this repository showcases my expertise in AI research, experimentation, and technical communication.",
  },
  {
    id: 6,
    title: "QRify - Instant QR Generator",
    description: "A lightweight web app for generating QR codes instantly with a focus on simplicity and performance.",
    image: "https://placehold.co/400x300/ca8a04/ffffff?text=QRify&font=roboto",
    technologies: ["JavaScript", "Node.js", "Express.js", "HTML", "CSS"],
    category: "Web App",
    tags: ["Backend"],
    status: "Completed",
    github: "https://github.com/TAPAN-2835/QRify",
    live: "",
    problemStatement: "Providing a quick, no-nonsense tool for generating QR codes without intrusive ads or sign-ups.",
    keyFeatures: ["Instant Generation", "Downloadable QR Images", "Clean UI"],
    role: "Developer",
    futureScope: "Dynamic QR codes and scan tracking features.",
    details: "QRify is a lightweight web application that allows users to generate QR codes on the fly for any text or URL. Built with Node.js, Express, and vanilla JavaScript, it features a clean, responsive interface and instant QR code rendering.",
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)
  },
  {
    id: 5,
    title: "EcoMiles - EcoTransitRewards Platform",
<<<<<<< HEAD
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

=======
    description: "An innovative rewards-based platform to encourage sustainable commuting, featuring gamification and a user wallet.",
    image: "https://placehold.co/400x300/059669/ffffff?text=EcoMiles&font=roboto",
    technologies: ["Node.js", "Express.js", "SQLite", "EJS"],
    category: "Full Stack",
    tags: ["Frontend", "Backend", "DBMS"],
    status: "Ongoing",
    github: "https://github.com/TAPAN-2835/EcoMiles",
    live: "",
    problemStatement: "Reducing carbon footprints by incentivizing sustainable public transportation usage.",
    keyFeatures: ["Reward Points System", "Ticket Verification", "Leaderboards", "User Wallet"],
    role: "Full Stack Developer",
    futureScope: "Integration with real-world transit APIs for automatic verification.",
    details: "EcoMiles (EcoTransitRewards) is a web application designed to promote eco-friendly commuting by rewarding users for sustainable travel choices. The platform features user authentication, a customizable dashboard, and gamified elements like streaks and referral bonuses. Built with Node.js, Express, and SQLite.",
  },
  {
    id: 4,
    title: "8-bit Subtractor (Synopsys Flow)",
    description: "ASIC digital backend design for an 8-bit subtractor using Synopsys EDA tools, from RTL to GDSII layout.",
    image: "https://placehold.co/400x300/334155/ffffff?text=8-bit+Subtractor&font=roboto",
    technologies: ["Verilog", "Tcl", "Synopsys VCS", "Design Compiler", "IC Compiler II"],
    category: "Academic",
    tags: ["Academic"],
    status: "Completed",
    github: "https://github.com/TAPAN-2835/TAPAN_23BIT158_8bit_Subtractor",
    live: "",
    problemStatement: "Navigating the complex industrial VLSI design flow to create hardware-ready digital circuits.",
    keyFeatures: ["RTL Synthesis", "Floorplanning", "Placement & Routing", "Static Timing Analysis"],
    role: "VLSI Design Intern",
    futureScope: "Extending the flow to more complex architectures like 32-bit ALUs.",
    details: "This project documents the complete backend digital design flow for an 8-bit subtractor circuit, implemented using Synopsys EDA tools. The flow covers RTL design and simulation, synthesis, floorplanning, power planning, placement, clock tree synthesis, routing, and static timing analysis. All steps are automated with Tcl scripts and verified with industry-standard tools.",
  },
]

const categories = ["All", "Web App", "Full Stack", "AI", "Academic"]

>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)
export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const [selectedProject, setSelectedProject] = useState(null)
<<<<<<< HEAD
=======
  const [filter, setFilter] = useState("All")
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = projects.filter((p) => (filter === "All" ? true : p.category === filter))
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)

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
<<<<<<< HEAD
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
=======
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8" />

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat)
                  setShowAll(false)
                }}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${filter === cat
                  ? "bg-cyan-500 border-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                  : "border-gray-700 text-gray-400 hover:border-cyan-400 hover:text-cyan-400"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)
            <motion.div
              key={project.id}
              className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer group flex flex-col shadow-lg hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
<<<<<<< HEAD
              transition={{ duration: 0.6, delay: index * 0.1 }}
=======
              transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
              layout
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px 0 rgba(34,211,238,0.15)",
                y: -8,
              }}
              onClick={() => setSelectedProject(project)}
            >
<<<<<<< HEAD
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
=======
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
<<<<<<< HEAD
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
=======
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-400 mb-4 line-clamp-2 text-sm">{project.description}</p>
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)

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
<<<<<<< HEAD
                <div className="flex gap-3 mt-4">
                  <motion.a
                    whileHover={{ scale: 1.08, y: -2, boxShadow: "0 4px 16px 0 rgba(34,211,238,0.15)" }}
=======
                <div className="flex gap-3 mt-4 pt-4 border-t border-gray-800">
                  <motion.a
                    whileHover={{ scale: 1.08, y: -2 }}
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)
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
<<<<<<< HEAD
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
=======
                    <motion.a
                      whileHover={{ scale: 1.08, y: -2 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live</span>
                    </motion.a>
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
=======
        {/* View More / View Less Button */}
        {filteredProjects.length > 6 && (
          <div className="mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-gray-800 border border-gray-700 text-white rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-400/20"
            >
              {showAll ? "View Fewer Projects" : "View More Projects"}
            </motion.button>
          </div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto"
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
<<<<<<< HEAD
              className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
=======
              className="bg-gray-900 rounded-xl max-w-4xl w-full my-auto border border-gray-700 shadow-2xl relative"
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
<<<<<<< HEAD
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-gray-800/80 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
=======
                  className="w-full h-80 object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8">
<<<<<<< HEAD
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
=======
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 text-xs font-bold rounded-full uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{selectedProject.title}</h3>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-semibold text-cyan-400 mb-3">Project Overview</h4>
                    <p className="text-gray-300 text-base leading-relaxed mb-6">{selectedProject.details}</p>

                    <h4 className="text-xl font-semibold text-cyan-400 mb-3">Problem Statement</h4>
                    <p className="text-gray-400 text-sm italic mb-6 leading-relaxed">"{selectedProject.problemStatement}"</p>

                    <h4 className="text-xl font-semibold text-cyan-400 mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-6">
                      {selectedProject.keyFeatures.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-purple-500 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 h-fit">
                    <div className="mb-0">
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-gray-900 border border-gray-600 text-gray-300 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-800">
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
<<<<<<< HEAD
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors"
=======
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors font-semibold"
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
<<<<<<< HEAD
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
=======
                    View Source
                  </motion.a>
                  {selectedProject.live && selectedProject.live.trim() !== "" && (
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </motion.a>
                  )}
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
