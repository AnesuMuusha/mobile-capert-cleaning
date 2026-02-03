import { MapPin } from "lucide-react"

const areas = [
  "Somerset West",
  "Strand",
  "Gordon's Bay",
  "Macassar",
  "Firgrove",
  "Helderberg",
  "Sir Lowry's Pass",
  "Stellenbosch"
]

export function ServiceAreas() {
  return (
    <section id="areas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Coverage</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Mobile Carpet Cleaning Service Areas
          </h2>
          <p className="text-muted-foreground text-lg">
            We bring our professional carpet cleaning services directly to you across the Western Cape
          </p>
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="font-semibold text-foreground text-lg">Areas We Service</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {areas.map((area, index) => (
              <span
                key={index}
                className="bg-card px-4 py-2 rounded-full text-sm text-foreground border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Don&apos;t see your area listed? Contact us - we may still be able to help!
          </p>
        </div>
      </div>
    </section>
  )
}
