"use client"

import { Shield, Zap, Users, ThumbsUp, Wrench, Clock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const reasons = [
  {
    icon: Shield,
    title: "10-Year Warranty",
    description:
      "Every product comes backed by our comprehensive 10-year warranty, giving you complete peace of mind and long-term protection.",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description:
      "Our double-glazed uPVC and aluminium systems reduce heat transfer, helping you save on energy bills all year round.",
  },
  {
    icon: Users,
    title: "Expert Installation",
    description:
      "Our certified installation teams bring years of hands-on experience, ensuring a flawless fit and finish every single time.",
  },
  {
    icon: ThumbsUp,
    title: "5,000+ Happy Customers",
    description:
      "Join thousands of satisfied homeowners and businesses who trust Windows Plaza for quality, reliability, and outstanding service.",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description:
      "Every home is unique. We offer bespoke designs tailored to your exact specifications, style preferences, and budget requirements.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "From initial consultation to final installation, we deliver on time without compromising on quality or attention to detail.",
  },
]

export function WhyChooseUsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1)

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div ref={headerRef} className={`mx-auto max-w-2xl text-center ${headerVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">
              Why Choose Us
            </span>
          </div>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            The Windows Plaza Difference
          </h2>
          <div className="heading-accent-center" />
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We go beyond just selling windows and doors. Here is why homeowners
            and businesses across India choose Windows Plaza.
          </p>
        </div>

        <div ref={gridRef} className={`mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children ${gridVisible ? "is-visible" : ""}`}>
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-2xl hover:shadow-foreground/[0.08]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/[0.08] transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-110">
                <reason.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
