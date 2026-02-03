import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    location: "Somerset West",
    text: "Absolutely fantastic service! My carpets look brand new and the team was so professional. They arrived on time and were done faster than expected.",
    rating: 5
  },
  {
    name: "David K.",
    location: "Strand",
    text: "I was amazed at how quickly my carpets dried. The stain that I thought would never come out is completely gone. Highly recommend!",
    rating: 5
  },
  {
    name: "Michelle P.",
    location: "Gordon's Bay",
    text: "As a pet owner, I was worried about odours. Fresh Carpets Pro completely eliminated the smell. My home smells fresh and clean now.",
    rating: 5
  },
  {
    name: "Johan V.",
    location: "Macassar",
    text: "Excellent service from start to finish. The quote was fair, the work was thorough, and my office carpets have never looked better.",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don&apos;t just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-0 shadow-lg">
              <CardContent className="p-6">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
