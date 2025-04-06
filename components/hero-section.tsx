"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.6",
      )
      .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")

    // Floating animation for the hero image
    gsap.to(".hero-image", {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="parallax-section relative min-h-screen flex items-center pt-20 overflow-hidden"
      id="hero"
    >
      {/* Background elements */}
      <div className="parallax-bg absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-purple-950/20 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/20 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-fuchsia-600/20 blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 ref={titleRef} className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block">WELCOME TO</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500 text-5xl md:text-6xl lg:text-7xl">
              CR-X
            </span>
          </h1>
          <p ref={subtitleRef} className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
            Pushing the boundaries of technology with cutting-edge software solutions for web, cloud, mobile, AI, and
            blockchain.
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button
              className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white rounded-full px-8 py-6 text-lg"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: "smooth",
                  })
                }
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-950/30 rounded-full px-8 py-6 text-lg"
              onClick={() => {
                const servicesSection = document.getElementById("services")
                if (servicesSection) {
                  window.scrollTo({
                    top: servicesSection.offsetTop - 80,
                    behavior: "smooth",
                  })
                }
              }}
            >
              Our Work <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="hero-image relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 blur-[30px]"></div>
            <img
              src="/favicon.png?height=500&width=500"
              alt="CR-X Technology"
              className="relative z-10 w-full h-full object-cover"
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full opacity-30 blur-[5px] z-0"></div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        onClick={() => {
          const servicesSection = document.getElementById("services")
          if (servicesSection) {
            window.scrollTo({
              top: servicesSection.offsetTop - 80,
              behavior: "smooth",
            })
          }
        }}
      >
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
        <span className="text-purple-400 text-sm mt-2">Scroll Down</span>
      </div>
    </section>
  )
}

