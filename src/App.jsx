"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LoadingScreen from "@/components/LoadingScreen"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import CursorEffect from "@/components/CursorEffect"
import ScrollIndicator from "@/components/ScrollIndicator"

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4500) // Increased to match loading animation duration

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "contact"]
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

    // Only add scroll listener after loading is complete
    if (!isLoading) {
      window.addEventListener("scroll", handleScroll)
      handleScroll() // Check initial position
    }

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isLoading])

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <CursorEffect />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            <Navbar activeSection={activeSection} />
            <Hero />
            <ScrollIndicator />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
