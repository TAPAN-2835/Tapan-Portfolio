import React from "react"

// Minimalist geometric TP monogram with gradient
const TPLogo = (props) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 48}
    height={props.height || 48}
    {...props}
  >
    <defs>
      <linearGradient id="tp-gradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#06b6d4" />
        <stop offset="1" stopColor="#a21caf" />
      </linearGradient>
    </defs>
    {/* T */}
    <rect x="8" y="10" width="48" height="6" rx="3" fill="url(#tp-gradient)" />
    <rect x="29" y="16" width="6" height="38" rx="3" fill="url(#tp-gradient)" />
    {/* P */}
    <rect x="39" y="24" width="6" height="30" rx="3" fill="url(#tp-gradient)" />
    <path d="M45 24a12 12 0 1 1 0 24h-10v-6h10a6 6 0 1 0 0-12h-10v-6h10z" fill="url(#tp-gradient)" />
  </svg>
)

export default TPLogo
