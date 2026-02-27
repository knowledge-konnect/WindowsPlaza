"use client"

import { Star, Quote } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner",
    initials: "RK",
    content:
      "Windows Plaza transformed our home with beautiful uPVC sliding windows. The quality is outstanding and the installation team was incredibly professional. Our energy bills have dropped noticeably since the upgrade.",
    rating: 5,
  },
  {
    name: "Sunita Reddy",
    role: "Villa Owner",
    initials: "SR",
    content:
      "We got aluminium sliding doors for our new villa and the quality Windows Plaza offers is unmatched. They completed the work ahead of schedule and the finish is absolutely flawless. Highly impressed!",
    rating: 5,
  },
  {
    name: "Venkat Rao",
    role: "Property Developer",
    initials: "VR",
    content:
      "As a property developer, I have used Windows Plaza for multiple residential projects. Consistent quality, competitive pricing, and they always deliver on time. My go-to partner for all window and door requirements.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1)

  return (
    <section className="relative overflow-hidden bg-foreground py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div ref={headerRef} className={`mx-auto max-w-2xl text-center ${headerVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl">
            Trusted by Homeowners Across India
          </h2>
          <div className="heading-accent-center" />
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/60">
            Don&apos;t just take our word for it. Here&apos;s what our valued
            customers have to say about Windows Plaza.
          </p>
        </div>

        <div ref={gridRef} className={`mt-16 grid gap-7 md:grid-cols-3 stagger-children ${gridVisible ? "is-visible" : ""}`}>
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.05] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.08] hover:border-primary/30"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary-foreground/[0.06]" aria-hidden="true" />

              {/* Stars */}
              <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="mt-5 text-sm leading-relaxed text-primary-foreground/80">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/80 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-primary-foreground/50">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
