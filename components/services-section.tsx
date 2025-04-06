"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Cloud, Smartphone, Brain, Database } from "lucide-react"

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Stagger animation for service cards
    const cards = gsap.utils.toArray<HTMLElement>(".service-card")

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const services = [
    {
      title: "Web Development",
      description: "Cutting-edge web applications with modern frameworks and responsive design.",
      icon: <Globe className="h-10 w-10 text-purple-400" />,
      status: "Active",
    },
    {
      title: "Cloud Development",
      description: "Scalable cloud solutions with AWS, Azure, and Google Cloud Platform.",
      icon: <Cloud className="h-10 w-10 text-purple-400" />,
      status: "Active",
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      icon: <Smartphone className="h-10 w-10 text-purple-400" />,
      status: "Active",
    },
    {
      title: "AI Solutions",
      description: "Advanced AI integration for intelligent applications and data analysis.",
      icon: <Brain className="h-10 w-10 text-purple-400" />,
      status: "Upcoming",
    },
    {
      title: "Blockchain",
      description: "Secure and transparent blockchain solutions for various industries.",
      icon: <Database className="h-10 w-10 text-purple-400" />,
      status: "Upcoming",
    },
  ]

  return (
    <section ref={sectionRef} id="services" className="parallax-section relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="parallax-bg absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-fuchsia-600/10 blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="section-title font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6">SERVICES</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Delivering exceptional software solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="service-card bg-black/50 border border-purple-900/30 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  {service.icon}
                  {service.status === "Upcoming" && (
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-900/50 text-purple-300 border border-purple-500/30">
                      {service.status}
                    </span>
                  )}
                </div>
                <CardTitle className="text-xl font-orbitron mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 mb-6">{service.description}</CardDescription>
                <Button
                  variant="outline"
                  className="w-full border-purple-500/50 text-purple-400 hover:bg-purple-950/30"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

