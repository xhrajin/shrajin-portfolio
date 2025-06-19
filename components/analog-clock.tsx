"use client"

import { useState, useEffect } from "react"

interface AnalogClockProps {
  size?: number
}

export default function AnalogClock({ size = 60 }: AnalogClockProps) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      // Get Nepal time (UTC+5:45)
      const nepalTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" }))
      setTime(nepalTime)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Calculate clock hand angles
  const secondAngle = (time.getSeconds() / 60) * 360
  const minuteAngle = ((time.getMinutes() + time.getSeconds() / 60) / 60) * 360
  const hourAngle = (((time.getHours() % 12) + time.getMinutes() / 60) / 12) * 360

  // Calculate clock hand coordinates
  const secondHandLength = size * 0.4
  const minuteHandLength = size * 0.35
  const hourHandLength = size * 0.25

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Clock face */}
      <div
        className="absolute inset-0 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
        style={{ width: size, height: size }}
      ></div>

      {/* Hour markers */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * 360
        const radian = (angle * Math.PI) / 180
        const x = Math.sin(radian) * (size / 2 - 4)
        const y = -Math.cos(radian) * (size / 2 - 4)
        return (
          <div
            key={i}
            className="absolute bg-gray-800 dark:bg-gray-200"
            style={{
              width: i % 3 === 0 ? 2 : 1,
              height: i % 3 === 0 ? 4 : 2,
              left: `calc(50% + ${x}px - 1px)`,
              top: `calc(50% + ${y}px - 2px)`,
              transform: `rotate(${angle}deg)`,
            }}
          ></div>
        )
      })}

      {/* Hour hand */}
      <div
        className="absolute origin-bottom bg-black dark:bg-white rounded-full"
        style={{
          width: 2,
          height: hourHandLength,
          left: "50%",
          bottom: "50%",
          transform: `translateX(-50%) rotate(${hourAngle}deg)`,
        }}
      ></div>

      {/* Minute hand */}
      <div
        className="absolute origin-bottom bg-black dark:bg-white rounded-full"
        style={{
          width: 1.5,
          height: minuteHandLength,
          left: "50%",
          bottom: "50%",
          transform: `translateX(-50%) rotate(${minuteAngle}deg)`,
        }}
      ></div>

      {/* Second hand */}
      <div
        className="absolute origin-bottom bg-red-500 rounded-full"
        style={{
          width: 1,
          height: secondHandLength,
          left: "50%",
          bottom: "50%",
          transform: `translateX(-50%) rotate(${secondAngle}deg)`,
        }}
      ></div>

      {/* Center dot */}
      <div
        className="absolute bg-red-500 rounded-full"
        style={{
          width: 4,
          height: 4,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </div>
  )
}
