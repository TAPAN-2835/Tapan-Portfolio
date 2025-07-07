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
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-8">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Tapan Patel. All rights reserved.</p>
          </motion.div>

          {/* Follow Me Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
            <div className="flex justify-center items-center gap-6">
              {socialLinks.map(({ icon: Icon, href, color, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${color} transition-all duration-300 border border-gray-700 hover:border-current hover:shadow-lg`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
