import React from 'react'
import { PushPin } from './PushPin'

interface TimelineCardProps {
  id: string
  title: string
  description: string
  color: 'orange' | 'blue' | 'purple'
  tilt: 'left' | 'right' | 'none'
  index: number
  className?: string
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  id,
  title,
  description,
  color,
  tilt,
  index,
  className = ''
}) => {
  // Theme styling configurations
  const themes = {
    orange: {
      bg: 'bg-[#FDF5F2]',
      border: 'border-[#F8DFD4]',
      numText: 'text-[#D0532F]'
    },
    blue: {
      bg: 'bg-[#F3F6FD]',
      border: 'border-[#E5EBF9]',
      numText: 'text-[#2F5CC4]'
    },
    purple: {
      bg: 'bg-[#F7F3FD]',
      border: 'border-[#EEE6FA]',
      numText: 'text-[#7B38DF]'
    }
  }

  const selectedTheme = themes[color]

  // Tilt styling with smooth hover transitions
  const tiltClasses = {
    left: 'hover:rotate-0 -rotate-[2.5deg]',
    right: 'hover:rotate-0 rotate-[2.5deg]',
    none: ''
  }

  return (
    <div
      className={`relative z-20 hover:z-40 w-[280px] md:w-[296px] flex-shrink-0 bg-white rounded-[26px] p-[12px] md:p-[14px]
                 shadow-[0_12px_36px_rgba(0,0,0,0.05),0_2px_8px_rgba(0,0,0,0.02)]
                 hover:shadow-[0_24px_48px_rgba(0,0,0,0.1),0_4px_16px_rgba(0,0,0,0.04)]
                 transition-all duration-300 ease-out hover:-translate-y-1.5 cursor-pointer
                 ${tiltClasses[tilt]} ${className}`}
      data-card-index={index}
    >
      {/* Absolute Push Pin aligned exactly at top-center */}
      <div className="absolute -top-[21px] left-1/2 -translate-x-1/2 z-30 pointer-events-none pin-anchor">
        <PushPin color={color} />
      </div>

      {/* Inner Notebook Note */}
      <div className={`w-full h-full rounded-[18px] ${selectedTheme.bg} border ${selectedTheme.border} p-4 md:p-5 pb-5 md:pb-6 text-left`}>
        {/* Step Number in Cursive Handwriting */}
        <div className={`font-handwritten text-[28px] md:text-[32px] font-bold leading-none mb-1 ${selectedTheme.numText}`}>
          {id}
        </div>

        {/* Title */}
        <h3 className="font-sans font-extrabold text-[18px] md:text-[20px] text-[#141414] leading-[1.15] tracking-tight mb-2">
          {title}
        </h3>

        {/* Description Text */}
        <p className="font-sans text-[12.5px] md:text-[13px] font-medium text-[#5A5A5C] leading-[1.4] tracking-normal">
          {description}
        </p>
      </div>
    </div>
  )
}