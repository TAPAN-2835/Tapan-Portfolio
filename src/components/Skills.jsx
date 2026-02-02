"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "React", level: 72, color: "#61DAFB", category: "Frontend" },
  { name: "Node.js", level: 70, color: "#339933", category: "Backend" },
  { name: "PostgreSQL", level: 68, color: "#336791", category: "Database" },
  { name: "MySQL", level: 66, color: "#00758F", category: "Database" },
  { name: "Express.js", level: 69, color: "#000000", category: "Backend" },
  { name: "JavaScript", level: 75, color: "#F7DF1E", category: "Frontend" },
  { name: "MongoDB", level: 70, color: "#47A248", category: "Database" },
<<<<<<< HEAD
  { name: "Python", level: 73, color: "#3776AB", category: "AI/ML"},
=======
  { name: "Python", level: 73, color: "#3776AB", category: "AI/ML" },
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)
  { name: "Java", level: 71, color: "#007396", category: "Programming Language" },
  { name: "Power BI", level: 65, color: "#F2C811", category: "Data" },
  { name: "DSA", level: 55, color: "#8B5CF6", category: "Competitive Programming" },
  { name: "AI & ML", level: 47, color: "#00BFAE", category: "AI/ML" },
  // Soft Skills as a special card
  {
    name: "Soft Skills",
    color: "#22c55e",
    category: "",
    isSoftSkills: true,
    icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/96/external-soft-skills-job-search-flaticons-lineal-color-flat-icons.png",
    content: "Leadership, Punctuality, Time Management, Project Planning, Problem Solving, Team-Work"
  },
]

// Skill logo mapping (using online SVG URLs)
const skillLogos = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Power BI": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  "DSA": "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
  "AI & ML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
};

function SkillCard({ skill, index }) {
  const cardRef = useRef(null)
  const isCardInView = useInView(cardRef, { once: true, threshold: 0.3 })

  if (skill.isSoftSkills) {
    // Custom rendering for Soft Skills card
    return (
      <motion.div
        ref={cardRef}
        className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={isCardInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.1)" }}
      >
        {/* Background Glow Effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-xl"
          style={{ backgroundColor: skill.color }}
        />
        <div className="relative z-10 w-full text-center flex flex-col items-center">
          <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 border-2 border-green-300 bg-green-50/10 shadow-lg">
            <img src={skill.icon} alt="Soft Skills" className="w-14 h-14 object-contain" />
          </div>
          <div className="text-2xl font-bold text-green-300 mb-4 drop-shadow">Soft Skills</div>
          <div className="text-gray-100 text-base font-medium">
            {skill.content}
          </div>
        </div>
        {/* Hover Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-5 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700" />
      </motion.div>
    )
  }

  // Icon grid card (no progress/percentage)
  return (
    <motion.div
      ref={cardRef}
      className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden flex flex-col items-center"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isCardInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.1)" }}
    >
      {/* Background Glow Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-xl"
        style={{ backgroundColor: skill.color }}
      />
      {/* Icon */}
      <div className="mb-4">
        <div
          className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white font-bold text-xl border-2 transition-all duration-300 group-hover:scale-110"
          style={{
            backgroundColor: `${skill.color}20`,
            borderColor: skill.color,
            color: skill.color,
          }}
        >
          {skillLogos[skill.name] ? (
            <img src={skillLogos[skill.name]} alt={skill.name + ' logo'} className="w-10 h-10 object-contain" />
          ) : (
            skill.name.charAt(0)
          )}
        </div>
      </div>
      {/* Skill Name */}
      <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-cyan-400 transition-colors">
        {skill.name}
      </h3>
      {/* Category Badge (optional, can remove if you want even cleaner) */}
      <div className="inline-block mt-1">
        <span
          className="px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300"
          style={{
            backgroundColor: `${skill.color}10`,
            borderColor: `${skill.color}40`,
            color: skill.color,
          }}
        >
          {skill.category}
        </span>
      </div>
      {/* Hover Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-5 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700" />
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/80" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life, from concept to deployment.
          </p>
        </motion.div>

        {/* Skills Badges/Chips Grid */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
<<<<<<< HEAD
          {skills.filter(skill => !skill.isSoftSkills).map((skill, index) => (
            <span
              key={skill.name}
              className="inline-block px-6 py-3 rounded-full font-semibold text-lg shadow-md"
              style={{
                backgroundColor: skill.color + '22', // light background
                color: skill.color,
                border: `2px solid ${skill.color}55`,
                fontSize: '1.35rem',
                letterSpacing: '0.03em',
              }}
            >
              {skill.name}
            </span>
          ))}
=======
          {skills.filter(skill => !skill.isSoftSkills).map((skill, index) => {
            const isExpress = skill.name === "Express.js";
            return (
              <span
                key={skill.name}
                className="inline-block px-6 py-3 rounded-full font-semibold text-lg shadow-md"
                style={{
                  backgroundColor: isExpress ? 'rgba(255, 255, 255, 0.1)' : skill.color + '22',
                  color: isExpress ? '#ffffff' : skill.color,
                  border: `2px solid ${isExpress ? '#ffffff' : skill.color + '55'}`,
                  fontSize: '1.35rem',
                  letterSpacing: '0.03em',
                }}
              >
                {skill.name}
              </span>
            );
          })}
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)
        </div>

        {/* Summary Stats and Soft Skills Card (unchanged) */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-6xl font-extrabold text-cyan-400 mb-2">1.5+</div>
            <div className="text-2xl text-gray-300 font-semibold">Years Experience</div>
          </div>
<<<<<<< HEAD
          <SkillCard skill={skills.find(skill => skill.isSoftSkills)} index={skills.length-1} />
=======
          <SkillCard skill={skills.find(skill => skill.isSoftSkills)} index={skills.length - 1} />
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-6xl font-extrabold text-purple-400 mb-2">10+</div>
            <div className="text-2xl text-gray-300 font-semibold">Technologies</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
