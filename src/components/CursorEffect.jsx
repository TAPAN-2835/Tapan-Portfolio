"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

<<<<<<< HEAD
    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener("mousemove", updateMousePosition)

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll("button, a, input, textarea")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
=======
    const handleMouseOver = (e) => {
      if (e.target.closest("button, a, input, textarea, .cursor-pointer")) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)
    }
  }, [])

  return (
    <>
      <motion.div
<<<<<<< HEAD
        className="fixed top-0 left-0 w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
=======
        className="fixed top-0 left-0 w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-[10000] mix-blend-difference"
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      <motion.div
<<<<<<< HEAD
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
=======
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-400 rounded-full pointer-events-none z-[10000] mix-blend-difference"
>>>>>>> 43a7a6b (Initial commit: Portfolio UI/UX improvements and architectural refinements)
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      />
    </>
  )
}
