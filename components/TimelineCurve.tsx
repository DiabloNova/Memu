import React, { useEffect, useState, useRef } from 'react'

interface Point {
  x: number
  y: number
}

export const TimelineCurve: React.FC = () => {
  const [points, setPoints] = useState<Point[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const updateCoordinates = () => {
    if (!containerRef.current) return

    // Find the SVG parent/container bounding rect
    const containerRect = containerRef.current.getBoundingClientRect()

    // Find all pins on the page
    const pinElements = document.querySelectorAll('.pin-anchor')
    const newPoints: Point[] = []

    pinElements.forEach((el) => {
      const pinRect = el.getBoundingClientRect()

      // Only include elements that are currently visible (non-zero size)
      if (pinRect.width > 0 && pinRect.height > 0) {
        // Calculate center coordinates of the pin head relative to the container
        // The pin head is roughly centered in the 44px wide / 48px high SVG.
        // We want the curve to pass through the center of the pin head (y ~ 15px down from pin's top).
        const x = pinRect.left + pinRect.width / 2 - containerRect.left
        const y = pinRect.top + 15 - containerRect.top

        newPoints.push({ x, y })
      }
    })

    setPoints(newPoints)
  }

  useEffect(() => {
    // Run initially
    updateCoordinates()

    // Run on window load/resize
    window.addEventListener('resize', updateCoordinates)
    window.addEventListener('load', updateCoordinates)

    // Set up a resize observer on the container itself to catch internal layout shifts
    let resizeObserver: ResizeObserver | null = null
    if (containerRef.current && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        updateCoordinates()
      })
      resizeObserver.observe(containerRef.current)
    }

    // Set a small delay/timeout to handle initial hydration/rendering correctly
    const timer1 = setTimeout(updateCoordinates, 100)
    const timer2 = setTimeout(updateCoordinates, 500)
    const timer3 = setTimeout(updateCoordinates, 1000)

    return () => {
      window.removeEventListener('resize', updateCoordinates)
      window.removeEventListener('load', updateCoordinates)
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  // Build the SVG path connecting points with cubic Bezier curves
  const getPathDefinition = () => {
    if (points.length < 2) return ''

    let path = `M ${points[0].x} ${points[0].y}`

    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i]
      const p2 = points[i + 1]

      const dx = p2.x - p1.x
      const dy = p2.y - p1.y

      // We want horizontal cubic Bezier tangents for smooth horizontal entry/exit
      // Let's use a dynamic offset based on horizontal distance
      const hOffset = Math.max(Math.abs(dx) * 0.5, 60)

      const cp1x = p1.x + (dx > 0 ? hOffset : -hOffset)
      const cp1y = p1.y + dy * 0.05 // subtle vertical shift for CP1

      const cp2x = p2.x - (dx > 0 ? hOffset : -hOffset)
      const cp2y = p2.y - dy * 0.05 // subtle vertical shift for CP2

      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`
    }

    return path
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
    >
      <svg className="absolute inset-0 w-full h-full overflow-visible">
        {points.length >= 2 && (
          <path
            d={getPathDefinition()}
            fill="none"
            stroke="#D4D4D8"
            strokeWidth="1.75"
            strokeDasharray="10 8"
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        )}
      </svg>
    </div>
  )
}