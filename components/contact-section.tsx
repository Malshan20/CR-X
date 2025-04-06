"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate the heading
    gsap.fromTo(
      ".contact-heading",
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

    // Animate the form
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      },
    )

    // Animate contact info items
    gsap.utils.toArray<HTMLDivElement>(".contact-info-item").forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2 * i,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="parallax-section relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="parallax-bg absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-fuchsia-600/10 blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="contact-heading font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            GET IN TOUCH
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to elevate your digital presence? Contact us today to discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <div className="contact-info-item flex items-start space-x-4">
                <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-500/30">
                  <Mail className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-orbitron text-lg mb-1">Email Us</h3>
                  <p className="text-gray-400">info@cr-x.com</p>
                  <p className="text-gray-400">support@cr-x.com</p>
                </div>
              </div>

              <div className="contact-info-item flex items-start space-x-4">
                <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-500/30">
                  <MapPin className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-orbitron text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-400">123 Tech Boulevard</p>
                  <p className="text-gray-400">Innovation District, TX 75001</p>
                </div>
              </div>

              <div className="contact-info-item flex items-start space-x-4">
                <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-500/30">
                  <Phone className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-orbitron text-lg mb-1">Call Us</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-gray-400">Mon-Fri, 9am-6pm</p>
                </div>
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            className="space-y-6 bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-purple-900/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-black/50 border-purple-900/50 focus:border-purple-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-black/50 border-purple-900/50 focus:border-purple-500"
                />
              </div>
            </div>
            <div>
              <Input
                type="text"
                placeholder="Subject"
                className="bg-black/50 border-purple-900/50 focus:border-purple-500"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                rows={5}
                className="bg-black/50 border-purple-900/50 focus:border-purple-500"
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white rounded-full py-6">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

