"use client"

import { useEffect, useRef } from "react"

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1
    }
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full brightness-125 contrast-110"
      >
        <source src="https://robinsol.net/wp-content/uploads/2024/12/ANIMATION-RVS2.webm" type="video/webm" />
        Votre navigateur ne prend pas en charge la lecture de vidéos.
      </video>
    </div>
  )
}

