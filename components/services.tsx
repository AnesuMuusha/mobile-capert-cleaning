import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Home, Building2, Droplets, Bug, Brush } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Deep Carpet Cleaning",
    description: "Our signature hot carbonating extraction process penetrates deep into carpet fibers to remove dirt, allergens, and bacteria. Your carpets dry in just a few hours!"
  },
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Transform your home with professionally cleaned carpets. We handle everything from high-traffic areas to delicate rugs, leaving your home fresher and healthier."
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Keep your workplace clean and professional. We offer flexible scheduling including after-hours service to minimize disruption to your business operations."
  },
  {
    icon: Droplets,
    title: "Stain Removal",
    description: "From wine spills to pet accidents, our professionally trained technicians can tackle the toughest stains that other cleaners won't even attempt."
  },
  {
    icon: Bug,
    title: "Pet Odour Treatment",
    description: "Our specialized P.U.R.T treatment is designed to eliminate over 99% of pet odours at the source, leaving your carpets smelling fresh and clean."
  },
  {
    icon: Brush,
    title: "Carpet Protection",
    description: "After cleaning, we can apply a protective coating to your carpets that helps repel future stains and extends the life of your carpet investment."
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Professional Carpet Cleaning Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            We specialize exclusively in carpet cleaning, ensuring expert results every time. Our eco-friendly methods are safe for your family and pets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
