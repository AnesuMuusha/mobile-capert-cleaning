import { CheckCircle, Award, Clock, Shield } from "lucide-react"

export function About() {
  const features = [
    { icon: Award, title: "Experienced Professionals", text: "Highly trained technicians with years of experience" },
    { icon: Clock, title: "Quick Drying", text: "Carpets dry in hours, not days" },
    { icon: Shield, title: "Eco-Friendly", text: "Safe for children, pets, and the environment" },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder / Feature cards */}
          <div className="space-y-6">
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 bg-card p-4 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-6">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Your Trusted Carpet Cleaning Specialists
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fresh Carpets Pro has made it our mission to provide top quality carpet cleaning services that are both accessible and affordable to everyone, whether you&apos;re a homeowner or a business.
              </p>
              <p>
                Our unique cleaning approach is eco-friendly, penetrates deep into carpet fibers, and dries in just a few hours so you can get back to your normal routine quickly.
              </p>
              <p>
                We understand that your carpets are a significant investment. That&apos;s why we use only the highest quality cleaning solutions and state-of-the-art equipment to ensure we deliver exceptional results every single time.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                "100% Satisfaction Guarantee",
                "Competitive Pricing",
                "Free Quotes",
                "Flexible Scheduling"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
