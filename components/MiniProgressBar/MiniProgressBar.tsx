"use client"

import React, { useEffect, useState } from "react"

function MiniProgressBar({ targetProgress, animationDuration, title, color }) {
  const [currentProgress, setCurrentProgress] = useState(0)

  // Function to update the progress bar width
  const updateProgressBar = (progress) => {
    return {
      width: `${progress}%`,
      backgroundColor: color ? color : "#36348E", // Use the specified color
    }
  }

  // Function to animate the progress bar
  const animateProgressBar = () => {
    const progressIncrement = targetProgress / (animationDuration / 20) // 20ms interval
    let progress = 0

    const interval = setInterval(() => {
      if (progress < targetProgress) {
        progress += progressIncrement
        setCurrentProgress(progress)
      } else {
        clearInterval(interval)
      }
    }, 20)
  }

  useEffect(() => {
    animateProgressBar()
  }, []) // Run once on component mount

  return (
    <div className="relative pt-1">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <span className="font_header inline-block rounded-full px-2 py-1 text-sm font-[600] uppercase">{title}</span>
        </div>
        <div className="text-right">
          <span className="inline-block text-xs font-semibold" style={{ color }}>
            {currentProgress.toFixed(0)}%
          </span>
        </div>
      </div>
      <div
        className="mb-4 flex h-2 overflow-hidden rounded-md text-xs"
        style={{ backgroundColor: color ? `${color}${Math.round(0.3 * 255).toString(16)}` : "rgba(54, 52, 142, 0.3)" }}
      >
        <div
          className="flex flex-col justify-center whitespace-nowrap text-center text-white transition-all duration-1000 ease-in-out"
          style={updateProgressBar(currentProgress)}
        ></div>
      </div>
    </div>
  )
}

export default MiniProgressBar
