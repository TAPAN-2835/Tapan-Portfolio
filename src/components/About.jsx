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
    <section id="about" className="py-20 px-4 bg-gray-900/80" ref={ref}>
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
            <div className="flex flex-col sm:flex-row gap-6 mt-10">
              <div className="flex-1 bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 text-center flex flex-col justify-center">
                <h4 className="text-cyan-400 font-bold text-sm uppercase tracking-widest mb-2">Experience</h4>
                <p className="text-white text-4xl font-black tracking-tight">1.5+ Years</p>
              </div>
              <a
                href="/resume.pdf"
                download
                className="flex-[2] px-10 py-6 rounded-2xl text-white font-bold flex items-center justify-center gap-4 bg-gradient-to-r from-cyan-500 to-purple-600 shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Download className="w-7 h-7 group-hover:scale-110 transition-transform" />
                <span className="text-xl">Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
