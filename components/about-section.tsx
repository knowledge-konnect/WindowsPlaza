"use client"

import { CheckCircle2 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const stats = [
  { number: "18+", label: "Years of Excellence" },
  { number: "5,000+", label: "Homes Transformed" },
  { number: "99%", label: "Client Satisfaction" },
  { number: "10yr", label: "Product Warranty" },
]

const highlights = [
  "Premium-grade uPVC and aluminium materials built for strength and longevity",
  "Custom designs tailored to your home's architecture and style preferences",
  "Professional installation by certified and experienced technicians",
  "Dedicated after-sales support with a comprehensive service guarantee",
]

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="bg-card py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className={`grid items-center gap-14 lg:grid-cols-2 lg:gap-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Left - Stats */}
          <div>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group rounded-2xl border border-border bg-background p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10"
                >
                  <p className="text-4xl font-extrabold tracking-tight text-primary lg:text-5xl">
                    {stat.number}
                  </p>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-4 py-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                About Windows Plaza
              </span>
            </div>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              India&apos;s Trusted Window &amp; Door Experts for Over 18 Years
            </h2>
            <div className="heading-accent" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Windows Plaza has been serving homeowners and businesses across
              India since 2005. We combine cutting-edge technology with expert
              craftsmanship to deliver premium uPVC and aluminium solutions that
              stand the test of time. Our commitment to quality, innovation, and
              customer satisfaction has made us one of the most trusted names in
              windows and doors nationwide.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium leading-relaxed text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
