import React from 'react'

interface PushPinProps {
  color: 'orange' | 'blue' | 'purple'
  className?: string
}

export const PushPin: React.FC<PushPinProps> = ({ color, className = '' }) => {
  // Define color palettes for gradients
  const colors = {
    orange: {
      primary: '#F45B31',
      dark: '#C83B14',
      light: '#FF9E82',
      glow: 'rgba(244, 91, 49, 0.4)',
      shadowColor: '#8c2509'
    },
    blue: {
      primary: '#3A73FA',
      dark: '#1B4FC7',
      light: '#82A5FF',
      glow: 'rgba(58, 115, 250, 0.4)',
      shadowColor: '#0c276b'
    },
    purple: {
      primary: '#9455FA',
      dark: '#6727CC',
      light: '#C39EFF',
      glow: 'rgba(148, 85, 250, 0.4)',
      shadowColor: '#3c0a82'
    }
  }

  const selected = colors[color]

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* 3D Realistic Push Pin Shadow */}
      <div
        className="absolute w-12 h-12 rounded-full pointer-events-none blur-[4px] opacity-35"
        style={{
          background: `radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 70%)`,
          transform: 'translate(10px, 14px) scaleY(0.7)'
        }}
      />

      {/* Metallic Pin Needle Shadow */}
      <div
        className="absolute w-[2px] h-6 bg-black/40 pointer-events-none origin-top blur-[0.5px]"
        style={{
          transform: 'rotate(25deg) translate(2px, 8px)'
        }}
      />

      <svg
        width="44"
        height="48"
        viewBox="0 0 44 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
      >
        <defs>
          {/* Main plastic body gradient */}
          <radialGradient id={`pinBody-${color}`} cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor={selected.light} />
            <stop offset="60%" stopColor={selected.primary} />
            <stop offset="100%" stopColor={selected.dark} />
          </radialGradient>

          {/* Collar/neck gradient */}
          <linearGradient id={`pinCollar-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={selected.light} />
            <stop offset="50%" stopColor={selected.primary} />
            <stop offset="100%" stopColor={selected.dark} />
          </linearGradient>

          {/* Metal needle gradient */}
          <linearGradient id="needleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D2D6DC" />
            <stop offset="40%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#9CA3AF" />
            <stop offset="100%" stopColor="#4B5563" />
          </linearGradient>
        </defs>

        {/* Steel Pin Needle */}
        <path
          d="M20.5 28 L21.5 44 L22.5 44 L23.5 28 Z"
          fill="url(#needleGrad)"
        />

        {/* Flare Collar / Base of Plastic Head */}
        <path
          d="M14 24 C14 23 15 22 17 22 L27 22 C29 22 30 23 30 24 L29 28 C29 29 28 30 27 30 L17 30 C16 30 15 29 15 28 Z"
          fill={`url(#pinCollar-${color})`}
          opacity="0.95"
        />

        {/* Translucent Main Bulb / Knob */}
        <circle
          cx="22"
          cy="15"
          r="12"
          fill={`url(#pinBody-${color})`}
        />

        {/* Specular 3D Highlight Curve */}
        <path
          d="M14 12 C15 9 18 7 21 7 C22 7 22.5 7.5 22 8 C21 9 19 11 18.5 13 C18 14.5 17.5 15 16.5 15 C15.5 15 14.2 13.5 14 12 Z"
          fill="#FFFFFF"
          opacity="0.75"
        />

        {/* Outer Rim Light Edge Accent */}
        <circle
          cx="22"
          cy="15"
          r="11.5"
          stroke="#FFFFFF"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}