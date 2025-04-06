"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate the heading
    gsap.fromTo(
      ".stats-heading",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    )

    // Animate the stats counters
    const stats = [
      { value: 5, suffix: "+" },
      { value: 50, suffix: "+" },
      { value: 100, suffix: "%" },
      { value: 24, suffix: "/7" },
    ]

    counterRefs.current.forEach((counter, index) => {
      if (!counter) return

      const stat = stats[index]
      const obj = { count: 0 }

      gsap.to(obj, {
        count: stat.value,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: counter,
          start: "top 80%",
        },
        onUpdate: () => {
          if (counter) {
            counter.textContent = Math.floor(obj.count) + stat.suffix
          }
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="parallax-section relative py-24 overflow-hidden" id="stats">
      {/* Background elements */}
      <div className="parallax-bg absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-fuchsia-600/10 blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="stats-heading font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
            CONNECTING BUSINESSES WITH THE
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">
              {" NEXT GENERATION "}
            </span>
            OF TECHNOLOGY
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <span
                ref={(el) => (counterRefs.current[0] = el)}
                className="block text-4xl md:text-5xl font-orbitron font-bold text-purple-400 mb-2"
              >
                0+
              </span>
              <span className="text-gray-400">Years Experience</span>
            </div>
            <div className="text-center">
              <span
                ref={(el) => (counterRefs.current[1] = el)}
                className="block text-4xl md:text-5xl font-orbitron font-bold text-purple-400 mb-2"
              >
                0+
              </span>
              <span className="text-gray-400">Projects Completed</span>
            </div>
            <div className="text-center">
              <span
                ref={(el) => (counterRefs.current[2] = el)}
                className="block text-4xl md:text-5xl font-orbitron font-bold text-purple-400 mb-2"
              >
                0%
              </span>
              <span className="text-gray-400">Client Satisfaction</span>
            </div>
            <div className="text-center">
              <span
                ref={(el) => (counterRefs.current[3] = el)}
                className="block text-4xl md:text-5xl font-orbitron font-bold text-purple-400 mb-2"
              >
                0/7
              </span>
              <span className="text-gray-400">Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

