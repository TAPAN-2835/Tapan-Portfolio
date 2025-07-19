"use client"

import { useRef, useState, useEffect } from "react"
import gsap from "gsap"
import ParticleSystem from "@/components/ParticleSystem"

const roles = ["Frontend Developer", "Backend Developer", "AI/ML Explorer", "Full-Stack Engineer"]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  // Refs for GSAP animation
  const headlineRef = useRef(null)
  const subheadlineRef = useRef(null)
  const paraRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    // GSAP sequential animation
    gsap.fromTo(headlineRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
    gsap.fromTo(subheadlineRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.6 })
    gsap.fromTo(paraRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 1.0 })
    gsap.fromTo(ctaRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 1.4 })
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const currentRoleText = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRoleText.length) {
            setDisplayText(currentRoleText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with overlay for readability */}
      <div className="absolute inset-0 bg-cover bg-center sm:bg-center bg-[position:80%_10%] sm:bg-[position:center] bg-[length:220%_auto] sm:bg-[length:cover]" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Content */}
      <div className="relative z-10 text-center px-2 sm:px-4 max-w-4xl mx-auto">
        <h1
          ref={headlineRef}
          className="text-5xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 drop-shadow-[0_6px_32px_rgba(0,0,0,0.9)]"
        >
          <span className="bg-gradient-to-r from-white via-cyan-300 via-blue-400 via-yellow-200 to-pink-300 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
            Tapan Patel
          </span>
        </h1>
        <div
          ref={subheadlineRef}
          className="text-lg xs:text-xl sm:text-4xl md:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 h-12 sm:h-16 flex items-center justify-center whitespace-nowrap"
        >
          <span className="text-gray-300">I'm a </span>
          <span className="ml-2 text-cyan-400 font-medium min-w-[120px] sm:min-w-[180px] text-left whitespace-nowrap">
            {displayText}
            <span
              className="inline-block w-1.5 sm:w-2 h-6 sm:h-8 bg-cyan-400 ml-2 rounded-full animate-blink shadow-[0_0_8px_2px_rgba(34,211,238,0.5)]"
            />
          </span>
        </div>
        <p
          ref={paraRef}
          className="text-base sm:text-lg md:text-xl text-white-400 mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto leading-relaxed"
        >
          Crafting digital experiences with cutting-edge technology, from responsive frontends to scalable backends and intelligent AI solutions.
        </p>
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <button
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-base sm:text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </button>
          <button
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold text-base sm:text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}
