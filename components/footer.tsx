import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">FC</span>
              </div>
              <div>
                <span className="font-bold text-xl text-background">Fresh Carpets</span>
                <span className="text-primary font-semibold text-xl ml-1">Pro</span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Professional mobile carpet cleaning services. We bring the clean to you!
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-background">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#services" className="text-background/70 hover:text-primary transition-colors text-sm">Our Services</Link>
              <Link href="#about" className="text-background/70 hover:text-primary transition-colors text-sm">About Us</Link>
              <Link href="#testimonials" className="text-background/70 hover:text-primary transition-colors text-sm">Customer Reviews</Link>
              <Link href="#areas" className="text-background/70 hover:text-primary transition-colors text-sm">Service Areas</Link>
              <Link href="#contact" className="text-background/70 hover:text-primary transition-colors text-sm">Get a Quote</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-background">Our Services</h4>
            <nav className="flex flex-col gap-2">
              <span className="text-background/70 text-sm">Deep Carpet Cleaning</span>
              <span className="text-background/70 text-sm">Residential Cleaning</span>
              <span className="text-background/70 text-sm">Commercial Cleaning</span>
              <span className="text-background/70 text-sm">Stain Removal</span>
              <span className="text-background/70 text-sm">Pet Odour Treatment</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-background">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+27123456789" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                <span className="text-sm">068 967 4644</span>
              </a>
              <a href="mailto:anesumuusha@gmail.com" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="text-sm">anesumuusha@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">Serving the Western Cape, South Africa</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>&copy; {new Date().getFullYear()} Fresh Carpets Pro. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
