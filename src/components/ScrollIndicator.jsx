"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState("home")
  const sections = ["home", "about", "skills", "experience", "projects", "contact"]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    const currentIndex = sections.indexOf(activeSection)
    if (currentIndex === sections.length - 1) {
      // Last section: scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      // Scroll to next section
      const nextSection = document.getElementById(sections[currentIndex + 1])
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const isAtLastSection = activeSection === sections[sections.length - 1]

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-30"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <motion.div
        className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-cyan-500/25"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        onClick={handleClick}
      >
        {isAtLastSection ? <ChevronUp className="w-6 h-6 text-white" /> : <ChevronDown className="w-6 h-6 text-white" />}
      </motion.div>
    </motion.div>
  )
}
