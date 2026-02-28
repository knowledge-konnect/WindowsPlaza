"use client"

import { Volume2, Wind, Zap, Grid2x2, Leaf, CheckCircle2 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const benefits = [
  {
    icon: Volume2,
    title: "Soundproof Comfort",
    description:
      "Enjoy peaceful living. Our multi-chamber uPVC profiles reduce street noise, traffic sounds, and neighbourhood disturbances — so your home stays a quiet sanctuary.",
  },
  {
    icon: Wind,
    title: "Dust Resistant Sealing",
    description:
      "Advanced brush seals and gaskets keep dust, sand, and fine particles out. Ideal for coastal and city environments where dust is a daily concern.",
  },
  {
    icon: Zap,
    title: "Energy Efficient Frames",
    description:
      "uPVC is a natural insulator. Our windows reduce heat transfer, keeping your home cooler in summer and warmer in winter — cutting air-conditioning bills significantly.",
  },
  {
    icon: Grid2x2,
    title: "Mosquito Mesh Option",
    description:
      "Add integrated insect mesh screens to any window design. Keep mosquitoes and insects out while enjoying fresh coastal breeze — no compromises on ventilation.",
  },
  {
    icon: Leaf,
    title: "Maintenance Free Material",
    description:
      "uPVC never needs painting, oiling, or polishing. It does not rust, rot, or warp. A simple wipe-clean surface that looks brand new for decades.",
  },
  {
    icon: CheckCircle2,
    title: "Long-Lasting Durability",
    description:
      "Engineered to withstand coastal humidity and salt air. Our uPVC profiles are UV-stabilised and carry a long-term structural warranty.",
  },
]

export function AboutSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1)

  return (
    <section id="benefits" className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div ref={headerRef} className={`mx-auto max-w-2xl text-center ${headerVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Benefits</span>
          </div>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Live Better with uPVC Windows
          </h2>
          <div className="heading-accent-center" />
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            More than just windows — a smarter, healthier, and more comfortable
            home environment for your family.
          </p>
        </div>

        <div ref={gridRef} className={`mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children ${gridVisible ? "is-visible" : ""}`}>
          {benefits.map((benefit) => (
            <div key={benefit.title}
              className="group flex gap-5 rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/[0.07]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/[0.08] transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-110">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
