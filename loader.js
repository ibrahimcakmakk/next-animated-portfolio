"use client"

export default function myImageLoader({src}){
  if (src.startsWith("https://images.pexels.com")) {
    return src
  }
  if (src.startsWith("https://i.pinimg.com")) {
    return src
  }
  if (src.startsWith("https://avatars.githubusercontent.com")) {
    return src
  }
  return `https://nextjsportfolio.com/${src} `
}