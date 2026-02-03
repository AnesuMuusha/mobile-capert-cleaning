"use client"

import { Phone, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+27689674644" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span>068 967 4644</span>
            </a>
            <a href="mailto:anesumuusha@gmail.com" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span>anesumuusha@gmail.com</span>
            </a>
          </div>
          <span className="text-primary-foreground/90 text-xs sm:text-sm">We Come To You - Mobile Carpet Cleaning</span>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-card shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">FC</span>
            </div>
            <div>
              <span className="font-bold text-xl text-foreground">Fresh Carpets</span>
              <span className="text-primary font-semibold text-xl ml-1">Pro</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</Link>
            <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors font-medium">Reviews</Link>
            <Link href="#areas" className="text-foreground hover:text-primary transition-colors font-medium">Service Areas</Link>
            <Button asChild>
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t py-4 px-4">
            <div className="flex flex-col gap-4">
              <Link href="#services" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link href="#about" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
              <Link href="#areas" className="text-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Service Areas</Link>
              <Button asChild className="w-full">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Get a Quote</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
