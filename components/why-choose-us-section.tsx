"use client"

import { Factory, Ruler, Wrench, HeartHandshake, BadgeCheck, Tag } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const reasons = [
  {
    icon: Factory,
    title: "Direct Manufacturer – No Middleman",
    description:
      "We manufacture uPVC windows in-house at our own facility. Buying direct means you get factory quality at the best possible price — no distributor markup.",
  },
  {
    icon: Ruler,
    title: "Custom Size Windows",
    description:
      "Every home has unique openings. We fabricate windows to your exact measurements — no compromise, no filler panels. Perfect fit guaranteed.",
  },
  {
    icon: BadgeCheck,
    title: "Free Site Measurement",
    description:
      "Our technician visits your home at no charge, measures every opening precisely, and gives you an accurate quote. Zero guesswork.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description:
      "Our trained installation crew ensures airtight fitting, proper sealing, and smooth operation — so your windows perform exactly as designed.",
  },
  {
    icon: HeartHandshake,
    title: "After-Sales Support",
    description:
      "We stand behind every window we install. Our support team is always just a call or WhatsApp message away for any adjustments or service needs.",
  },
  {
    icon: Tag,
    title: "Competitive Factory Pricing",
    description:
      "Because we manufacture, we control costs. You get premium uPVC quality at prices that beat retail — with clear, honest quotations and no hidden charges.",
  },
]

export function WhyChooseUsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1)

  return (
    <section id="why-choose-us" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div ref={headerRef} className={`mx-auto max-w-2xl text-center ${headerVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Why Choose Us</span>
          </div>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            The Windows Plaza Advantage
          </h2>
          <div className="heading-accent-center" />
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We are not just sellers — we are the manufacturer. Here is why
            hundreds of homeowners across Andhra Pradesh choose Windows Plaza.
          </p>
        </div>

        <div ref={gridRef} className={`mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children ${gridVisible ? "is-visible" : ""}`}>
          {reasons.map((reason) => (
            <div key={reason.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-2xl hover:shadow-foreground/[0.08]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/[0.08] transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-110">
                <reason.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{reason.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
