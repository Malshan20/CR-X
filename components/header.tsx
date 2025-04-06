"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for header height
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          className="flex items-center"
        >
          <span className="text-2xl font-orbitron font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-fuchsia-500">
            CR-X
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("services")
            }}
            className="text-white/80 hover:text-purple-400 transition-colors"
          >
            Services
          </a>
          <a
            href="#stats"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("stats")
            }}
            className="text-white/80 hover:text-purple-400 transition-colors"
          >
            About
          </a>
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("hero")
            }}
            className="text-white/80 hover:text-purple-400 transition-colors"
          >
            Home
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("contact")
            }}
            className="text-white/80 hover:text-purple-400 transition-colors"
          >
            Contact
          </a>
        </nav>

        <Button
          className="hidden md:flex bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white rounded-full px-6"
          onClick={() => scrollToSection("contact")}
        >
          Get Started
        </Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-purple-900/30">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("services")
                }}
                className="text-white/80 hover:text-purple-400 transition-colors py-2"
              >
                Services
              </a>
              <a
                href="#stats"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("stats")
                }}
                className="text-white/80 hover:text-purple-400 transition-colors py-2"
              >
                About
              </a>
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("hero")
                }}
                className="text-white/80 hover:text-purple-400 transition-colors py-2"
              >
                Home
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("contact")
                }}
                className="text-white/80 hover:text-purple-400 transition-colors py-2"
              >
                Contact
              </a>
              <Button
                className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white rounded-full w-full"
                onClick={() => scrollToSection("contact")}
              >
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

