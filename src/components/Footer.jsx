"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"

const XIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props} className="w-5 h-5">
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" fill="currentColor"/>
  </svg>
)

const socialLinks = [
  { icon: Github, href: "https://github.com/TAPAN-2835", color: "hover:text-gray-400", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/tapan-patel-b91241288/", color: "hover:text-blue-400", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com/PatelTapan7032?t=te5oHww2W4Q5T2g9D2lTjg&s=09", color: "hover:text-black", label: "X" },
  { icon: Instagram, href: "https://www.instagram.com/charming_tapan/", color: "hover:text-pink-400", label: "Instagram" },
  { icon: Mail, href: "mailto:mrpatel2835@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Tapan%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding...", color: "hover:text-green-400", label: "Email" },
  { icon: (props) => (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
        alt="LeetCode"
        {...props}
        className="w-5 h-5 object-contain filter grayscale group-hover:filter-none group-hover:grayscale-0 group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:hue-rotate-60 group-hover:saturate-200 transition-all duration-300"
        style={{ display: 'block', margin: '0 auto' }}
      />
    ),
    href: "https://leetcode.com/u/tapu2835/",
    color: "hover:border-yellow-400",
    label: "LeetCode"
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900/90 border-t border-gray-800 pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 mb-8">
        {/* Brand/Logo & Tagline */}
        <div className="flex flex-col items-start md:items-start gap-3">
          <div className="flex items-center gap-2 mb-2">
            {/* Replace with your logo if available */}
            <span className="text-2xl font-bold text-cyan-400">Tapan Patel</span>
          </div>
          <p className="text-gray-400 text-sm max-w-xs">Building digital experiences with passion & precision.</p>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
            <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">Resume</a></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="mailto:mrpatel2835@gmail.com" className="hover:text-cyan-400 transition">mrpatel2835@gmail.com</a></li>
            <li>Ahmedabad, India</li>
          </ul>
        </div>
        {/* Social Icons */}
        <div>
          <h4 className="text-white font-semibold mb-3">Follow</h4>
          <div className="flex gap-4 items-center">
            <a href="https://github.com/TAPAN-2835" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:text-gray-100 hover:bg-cyan-500 transition">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/tapan-patel-b91241288/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:text-blue-400 hover:bg-blue-50/10 transition">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/PatelTapan7032?t=te5oHww2W4Q5T2g9D2lTjg&s=09" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:text-black hover:bg-gray-100 transition">
              <XIcon />
            </a>
            <a href="https://www.instagram.com/charming_tapan/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:text-pink-400 hover:bg-pink-50/10 transition">
              <Instagram size={20} />
            </a>
            <a href="mailto:mrpatel2835@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Tapan%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding..." aria-label="Email" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:text-green-400 hover:bg-green-50/10 transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 text-gray-500 text-xs gap-2">
        <span>© {new Date().getFullYear()} Tapan Patel. All rights reserved.</span>
        <span>
          <a href="/privacy" className="hover:text-cyan-400 transition">Privacy Policy</a> |
          <a href="/terms" className="hover:text-cyan-400 transition ml-1">Terms</a>
        </span>
      </div>
    </footer>
  )
}
