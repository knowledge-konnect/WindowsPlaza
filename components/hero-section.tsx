"use client"

import Image from "next/image"
import { CheckCircle2, Star, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { getImagePath } from "@/lib/image-path"
import { useLeadModal } from "@/hooks/use-lead-modal"
import { BUSINESS_INFO } from "@/lib/constants/business"

const { phoneNumber: PHONE_NUMBER, phoneHref: PHONE_HREF } = BUSINESS_INFO

const trustPoints = [
  "Direct from Manufacturer",
  "Free Site Measurement",
  "Lifetime Frame Warranty",
]

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.05)
  const { openModal } = useLeadModal()

  return (
    <section id="home" className="relative min-h-[600px] overflow-hidden lg:min-h-[720px]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getImagePath("/images/hero-windows.jpg")}
          alt="Premium uPVC windows installed in a modern home in Andhra Pradesh by Windows Plaza"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/96 via-foreground/80 to-foreground/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
      </div>

      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
        <div className="absolute -right-16 -top-16 h-80 w-80 rounded-full bg-primary/[0.04]" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:px-8 lg:py-44 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-2 backdrop-blur-md">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              Direct Manufacturer · Andhra Pradesh
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Premium uPVC Windows{" "}
            <span className="relative inline-block text-primary">
              Direct from Manufacturer
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-primary/70 opacity-80" aria-hidden="true" />
            </span>{" "}
            in Andhra Pradesh
          </h1>

          {/* Subheadline */}
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            Soundproof &nbsp;•&nbsp; Dust Resistant &nbsp;•&nbsp; Energy Efficient &nbsp;•&nbsp; Long-Lasting Durability
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <Button
              size="lg"
              onClick={openModal}
              className="h-13 w-full bg-[#25D366] px-8 text-base text-white shadow-sm transition-colors hover:bg-[#20b859] sm:w-auto"
            >
              <FileText className="mr-2 h-5 w-5" />
              Get Free Quote
            </Button>
          </div>

          {/* Phone strip */}
          <p className="mt-5 text-sm text-white/60">
            Or call us directly:{" "}
            <a href={PHONE_HREF} className="font-semibold text-primary hover:underline">
              {PHONE_NUMBER}
            </a>
            &nbsp;(Mon–Sat, 9 AM – 6 PM)
          </p>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 text-white/80">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}