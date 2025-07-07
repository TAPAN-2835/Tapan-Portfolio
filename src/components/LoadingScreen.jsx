"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Stars, Float } from "@react-three/drei"

const greetings = [
  { text: "Hello", lang: "English" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "Hola", lang: "Spanish" },
  { text: "Bonjour", lang: "French" },
  { text: "નમસ્તે", lang: "Gujarati" },
  { text: "Привет", lang: "Russian" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "नमस्कारः", lang: "Sanskrit" },
  { text: "你好", lang: "Chinese" },
  { text: "Hallo", lang: "German" },
  { text: "Ciao", lang: "Italian" },
  
]

function FloatingShapes() {
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-4, 0, 0]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#00ffff" wireframe />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[4, 2, -2]}>
          <octahedronGeometry args={[0.8]} />
          <meshStandardMaterial color="#ff00ff" wireframe />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[0, -3, -1]}>
          <tetrahedronGeometry args={[1.2]} />
          <meshStandardMaterial color="#ffff00" wireframe />
        </mesh>
      </Float>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
    </>
  )
}

export default function LoadingScreen() {
  const [currentGreeting, setCurrentGreeting] = useState(0)
  const [showLaser, setShowLaser] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length)
      setShowLaser(true)
      setTimeout(() => setShowLaser(false), 300)
    }, 600)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <FloatingShapes />
        </Canvas>
      </div>

      {/* Laser Effect */}
      <AnimatePresence>
        {showLaser && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <svg className="w-full h-full">
              <motion.line
                x1="10%"
                y1="50%"
                x2="90%"
                y2="50%"
                stroke="url(#laser-gradient)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="laser-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00ffff" stopOpacity="0" />
                  <stop offset="50%" stopColor="#00ffff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#00ffff" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Greeting Text */}
      <div className="relative z-10 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGreeting}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            {greetings[currentGreeting].text}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="mt-4 text-cyan-400 text-lg tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          INITIALIZING...
        </motion.div>
      </div>

      {/* Loading Progress */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64">
        <motion.div
          className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 4.5, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  )
}
