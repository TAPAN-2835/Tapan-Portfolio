"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { Download } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const headingRef = useRef(null)
  const subheadingRef = useRef(null)
  const para1Ref = useRef(null)
  const para2Ref = useRef(null)

  useEffect(() => {
    gsap.fromTo(headingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
    gsap.fromTo(subheadingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.6 })
    gsap.fromTo(para1Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 1.0 })
    gsap.fromTo(para2Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 1.4 })
  }, [])

  return (
    <section id="about" className="py-20 px-4 bg-gray-800/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="w-60 h-60 sm:w-80 sm:h-80 md:w-100 md:h-100 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse" />
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gray-700 rounded-lg overflow-hidden border-4 border-cyan-400 shadow-2xl">
                  <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 ref={subheadingRef} className="text-3xl font-bold text-white mb-4">About Me</h3>
            <p ref={para1Ref} className="text-gray-300 text-base leading-relaxed">
              I am Tapan Patel, a 3rd year B.Tech student specializing in Information and Communication Technology at Pandit Deendayal Energy University. I am deeply interested in space technology, advanced web development, and AI-driven solutions. With a strong academic background and technical foundation in full-stack development, database systems, and programming languages such as C, Python, and Java, I am committed to delivering innovative and effective solutions. I am passionate about applying technology to solve real-world problems and continuously advancing my knowledge in emerging fields such as Artificial Intelligence, Machine Learning, and the VLSI domain.
            </p>
            <p ref={para2Ref} className="text-gray-300 text-base leading-relaxed">
              My journey is driven by curiosity and a desire to make a positive impact through technology. I thrive in collaborative environments and enjoy tackling complex challenges, whether it's building scalable web applications, exploring the frontiers of AI, or contributing to research in space technology. I am always eager to learn, grow, and contribute to projects that push the boundaries of innovation.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600 hover:border-cyan-400/50 transition-all duration-300">
                <h4 className="text-cyan-400 font-semibold mb-2">Experience</h4>
                <p className="text-white text-2xl font-bold">1.5+ Years</p>
              </div>
              <a
                href="/resume.pdf"
                download
                className="px-4 py-3 rounded-full text-white font-semibold w-full h-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 border-2 border-transparent shadow-lg transition-all duration-300 hover:border-cyan-400 hover:shadow-cyan-500/25 relative overflow-hidden group text-center mt-2 md:mt-0 md:w-auto"
                style={{ fontSize: '1rem' }}
              >
                <Download className="w-5 h-5 z-10" />
                <span className="z-10">Download Resume</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
