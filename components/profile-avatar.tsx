"use client"

import { useState } from "react"
import { portfolioPath } from "@/lib/site-paths"

const PHOTO_JPG = portfolioPath("/profile-photo.jpg")
const PHOTO_JPEG = portfolioPath("/profile-photo.jpeg")

const FALLBACK_SVG = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none">
    <rect width="128" height="128" rx="64" fill="#1e293b"/>
    <circle cx="64" cy="48" r="22" fill="#22d3ee" fill-opacity="0.9"/>
    <path d="M24 108C28 85 45 74 64 74C83 74 100 85 104 108" fill="#22d3ee" fill-opacity="0.85"/>
    <text x="64" y="122" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#94a3b8">AD</text>
  </svg>`
)

const DATA_URI = `data:image/svg+xml;charset=utf-8,${FALLBACK_SVG}`

const avatarClassName =
  "block h-[76px] w-[76px] shrink-0 rounded-full border-2 border-muted-foreground/45 bg-muted object-cover lg:h-[92px] lg:w-[92px]"

export function ProfileAvatar() {
  const [src, setSrc] = useState(PHOTO_JPG)

  return (
    <img
      src={src}
      alt="Profile photo"
      width={92}
      height={92}
      loading="eager"
      decoding="async"
      className={avatarClassName}
      onError={() => {
        if (src === PHOTO_JPG) setSrc(PHOTO_JPEG)
        else if (src === PHOTO_JPEG) setSrc(DATA_URI)
      }}
    />
  )
}
