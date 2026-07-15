'use client'

import React from 'react'
import { TimelineCard } from '../components/TimelineCard'
import { TimelineCurve } from '../components/TimelineCurve'

export default function Home() {
  const cards = [
    {
      id: '01',
      title: 'Hero Section',
      description: 'Address a key problem directly in the headline. Add a video/demo for instant engagement',
      color: 'orange' as const,
      tilt: 'left' as const
    },
    {
      id: '02',
      title: 'Advantages',
      description: 'Showcase 3 main benefits of your product. Each benefit highlighted with a title and brief description',
      color: 'blue' as const,
      tilt: 'right' as const
    },
    {
      id: '03',
      title: 'Apply cases',
      description: 'Show who benefits most from your product. Explain in one line how each audience type gains value + add some quick social proof',
      color: 'purple' as const,
      tilt: 'left' as const
    },
    {
      id: '04',
      title: 'Features',
      description: 'List core functionalities clearly. Connect features to user advantages where possible',
      color: 'orange' as const,
      tilt: 'right' as const
    },
    {
      id: '05',
      title: 'Call to action',
      description: 'CTA that speaks to the user and personalized for the product\'s niche',
      color: 'blue' as const,
      tilt: 'left' as const
    },
    {
      id: '06',
      title: 'Testimonials',
      description: 'Include real faces, links for the proof, success stories, rating and even case studies. The more social proof you have - the better',
      color: 'purple' as const,
      tilt: 'right' as const
    },
    {
      id: '07',
      title: 'Pricing',
      description: 'Get started with our flexible plans tailored for teams of all sizes',
      color: 'orange' as const,
      tilt: 'none' as const
    }
  ]

  return (
    <main className="w-full min-h-screen notebook-bg relative flex flex-col items-center pt-10 md:pt-16 pb-12 px-4">
      {/* S-curve connector layer inside the main stacking context but under the cards */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <TimelineCurve />
      </div>

      {/*
        Desktop / Tablet Layout:
        Using a fixed-height relative container to precisely align and stagger cards
        exactly matching the reference image.
      */}
      <div className="hidden md:block relative w-[600px] h-[1220px] z-20">
        <div className="absolute top-[0px] left-0">
          <TimelineCard {...cards[0]} index={0} />
        </div>
        <div className="absolute top-[160px] right-0">
          <TimelineCard {...cards[1]} index={1} />
        </div>
        <div className="absolute top-[340px] left-0">
          <TimelineCard {...cards[2]} index={2} />
        </div>
        <div className="absolute top-[500px] right-0">
          <TimelineCard {...cards[3]} index={3} />
        </div>
        <div className="absolute top-[680px] left-0">
          <TimelineCard {...cards[4]} index={4} />
        </div>
        <div className="absolute top-[840px] right-0">
          <TimelineCard {...cards[5]} index={5} />
        </div>
        {/* Card 07 - cropped perfectly at the bottom */}
        <div className="absolute top-[1020px] left-[150px] w-[300px] h-[65px] overflow-hidden">
          <TimelineCard {...cards[6]} index={6} className="absolute top-0 left-0" />
        </div>
      </div>

      {/*
        Mobile Layout:
        Responsive clean vertical list with alternating tilts and dynamic S-curve connecting them.
      */}
      <div className="block md:hidden w-full max-w-[320px] flex flex-col gap-16 relative z-20">
        {cards.map((card, idx) => {
          const isLast = idx === cards.length - 1
          if (isLast) {
            return (
              <div key={card.id} className="w-full h-[65px] overflow-hidden relative">
                <TimelineCard {...card} index={idx} className="absolute top-0 left-1/2 -translate-x-1/2" />
              </div>
            )
          }
          return (
            <div key={card.id} className="w-full flex justify-center">
              <TimelineCard {...card} index={idx} />
            </div>
          )
        })}
      </div>
    </main>
  )
}