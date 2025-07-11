"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Stars, Float } from "@react-three/drei"
import './Hero.css'

const roles = ["Frontend Developer", "Backend Developer", "AI/ML Explorer", "Full-Stack Engineer"]

function AnimatedBackground() {
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Float speed={1} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-8, 4, -5]}>
          <torusGeometry args={[2, 0.5, 16, 100]} />
          <meshStandardMaterial color="#00ffff" wireframe />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[8, -2, -3]}>
          <dodecahedronGeometry args={[1.5]} />
          <meshStandardMaterial color="#ff00ff" wireframe />
        </mesh>
      </Float>
      <Float speed={0.8} rotationIntensity={0.5} floatIntensity={3}>
        <mesh position={[0, 6, -8]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#ffff00" wireframe />
        </mesh>
      </Float>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
    </>
  )
}

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

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
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <AnimatedBackground />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-[0_6px_32px_rgba(0,0,0,0.9)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-white via-cyan-300 via-blue-400 via-yellow-200 to-pink-300 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
            Tapan Patel
          </span>
        </motion.h1>

        <motion.div
          className="text-2xl md:text-4xl lg:text-5xl font-light mb-8 h-16 flex items-center justify-center whitespace-nowrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-gray-300">I'm a </span>
          <span className="ml-2 text-cyan-400 font-medium min-w-[180px] text-left whitespace-nowrap">
            {displayText}
            <motion.span
              className="inline-block w-1 h-8 bg-cyan-400 ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            />
          </span>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Crafting digital experiences with cutting-edge technology, from responsive frontends to scalable backends and
          intelligent AI solutions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </motion.button>

          <motion.button
            className="px-8 py-4 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
