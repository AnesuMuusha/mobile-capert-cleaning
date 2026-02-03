"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, CheckCircle } from "lucide-react"

// UPDATE THIS WITH YOUR WHATSAPP NUMBER (with country code, no + or spaces)
const WHATSAPP_NUMBER = "270689674644"

export function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    message: "",
    agreed: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.phone || !formData.area) {
      alert("Please fill in all required fields")
      return
    }

    if (!formData.agreed) {
      alert("Please agree to the Privacy Policy & Terms of Service")
      return
    }

    const message = `Hi! I'd like a carpet cleaning quote.

*Name:* ${formData.name}
*Email:* ${formData.email || "Not provided"}
*Phone:* ${formData.phone}
*Area:* ${formData.area}
*Details:* ${formData.message || "No additional details"}
`

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contact" className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Professional Mobile Carpet Cleaning
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              The <span className="text-primary">Healthier, Deeper</span> Carpet Cleaning Choice
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transform your carpets with our professional mobile cleaning service. We come to you with state-of-the-art equipment for a deep clean that dries in hours, not days!
            </p>
            
            <div className="space-y-3">
              {[
                "Eco-friendly cleaning solutions",
                "Fast drying - ready in hours",
                "Deep extraction removes allergens",
                "100% satisfaction guaranteed"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="text-lg px-8">
                <a href="tel:+27123456789">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 012 345 6789
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Contact form */}
          <Card className="shadow-xl border-0 bg-card">
            <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
              <CardTitle className="text-center text-2xl">Get Your Free Quote</CardTitle>
              <p className="text-center text-primary-foreground/90 text-sm">We&apos;ll get back to you within 24 hours</p>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <form onSubmit={handleSubmit} className="grid gap-4">
                <Input 
                  placeholder="Your Name *" 
                  className="bg-input" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-input" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <Input 
                  type="tel" 
                  placeholder="Phone Number *" 
                  className="bg-input" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <Input 
                  placeholder="Suburb / Area *" 
                  className="bg-input" 
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  required
                />
                <Textarea 
                  placeholder="Tell us about your carpet cleaning needs..." 
                  className="bg-input min-h-[100px]" 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <div className="flex items-start gap-2">
                  <Checkbox 
                    id="terms" 
                    checked={formData.agreed}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreed: checked === true })}
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                    I agree to the Privacy Policy & Terms of Service
                  </label>
                </div>
                <Button type="submit" className="w-full text-lg py-6" size="lg">
                  Send via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
