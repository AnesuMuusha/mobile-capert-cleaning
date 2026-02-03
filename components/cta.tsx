import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
          Ready for Cleaner, Fresher Carpets?
        </h2>
        <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
          Get in touch today for a free, no-obligation quote. We&apos;ll have your carpets looking and smelling like new!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild className="text-lg px-8">
            <a href="tel:+27689674644">
              <Phone className="mr-2 h-5 w-5" />
              Call: 689674644
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
            <a href="https://wa.me/27689674644?text=Hi%20Capert%20Cleaning%2C%20I%27m%20interested%20in%20your%20services
!" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
