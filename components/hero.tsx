"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, CheckCircle } from "lucide-react"

export function Hero() {
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
                  Call Now: 068 967 4644
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
              <div className="grid gap-4">
                <Input placeholder="Your Name *" className="bg-input" />
                <Input type="email" placeholder="Email Address *" className="bg-input" />
                <Input type="tel" placeholder="Phone Number *" className="bg-input" />
                <Input placeholder="Suburb / Area *" className="bg-input" />
                <Textarea placeholder="Tell us about your carpet cleaning needs..." className="bg-input min-h-[100px]" />
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="terms" className="mt-1" />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  I agree to the Privacy Policy & Terms of Service
                </label>
              </div>
              <Button className="w-full text-lg py-6" size="lg">
                Request Free Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
