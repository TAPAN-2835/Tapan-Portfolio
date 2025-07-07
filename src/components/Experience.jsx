"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Frontend Development Intern",
    company: "Prodigy Infotech (Remote)",
    location: "",
    period: "June – July 2024",
    description:
      "Developed responsive, interactive web applications with a focus on user experience and cross-device compatibility. Practiced modern development workflows including version control and code reviews.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Responsive Design",
    ],
    achievements: [
      "Built 5 production-quality projects including a weather app, portfolio website, and stopwatch",
      "Improved mobile responsiveness across all projects",
      "Enhanced user interactivity through advanced JavaScript features",
    ],
  },
  {
    id: 2,
    title: "Student Satellite Program – Sensor Research",
    company: "Pandit Deendayal Energy University / ISRO Collaboration",
    location: "",
    period: "Dec 2024 – Present",
    description:
      "Conducting in-depth research on sensor technologies for satellite payload integration. Evaluating feasibility and specifications to support mission planning and design.",
    technologies: [
      "Research & Analysis",
      "Sensor Systems",
      "Technical Documentation",
    ],
    achievements: [
      "Analyzed past satellite missions to identify optimal sensor configurations",
      "Contributed to feasibility studies for payload integration",
      "Supported interdisciplinary team efforts in satellite design planning",
    ],
  },
  {
    id: 3,
    title: "Content & Research | Technical Writing | Documentation (Core & Sub-Committee Roles)",
    company: "Google Developers Groups On Campus, IEEE SPS PDEU SBC, ENCODE – The Computer Science Club – PDEU",
    location: "",
    period: "Oct 2024 – April 2025",
    description:
      "Held multiple non-technical roles in student organizations, focusing on content creation, research, technical writing, and documentation for events and initiatives.",
    technologies: [
      "Content Writing",
      "Research",
      "Documentation",
      "Team Collaboration",
    ],
    achievements: [
      "Core-Committee, Content & Research, Google Developers Groups On Campus – PDEU",
      "Sub-Committee, Technical Content Writing, IEEE SPS PDEU SBC",
      "Sub-Committee, Content & Documentation, ENCODE – The Computer Science Club – PDEU",
    ],
  },
]

function ExperienceCard({ experience, index }) {
  const cardRef = useRef(null)
  const isCardInView = useInView(cardRef, { once: true, threshold: 0.3 })

  return (
    <motion.div
      ref={cardRef}
      className={`relative flex items-center ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col md:flex-row`}
      initial={{ opacity: 0, y: 100 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-gray-900 z-10" />

      {/* Content */}
      <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
        <motion.div
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{experience.title}</h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
              <div className="flex items-center gap-1">
                <Building size={16} />
                <span>{experience.company}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{experience.period}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>

          {/* Technologies */}
          <div className="mb-4">
            <h4 className="text-cyan-400 font-semibold mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-sm rounded-full border border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-purple-400 font-semibold mb-2">Key Achievements</h4>
            <ul className="space-y-1">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block w-2/12" />
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <section id="experience" className="py-20 px-4 bg-gray-800/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            My professional journey in software development, building innovative solutions and growing with amazing
            teams.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
