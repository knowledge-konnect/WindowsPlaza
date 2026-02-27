"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Leaf, Award, Star, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { getImagePath } from "@/lib/image-path"

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.05)

  return (
    <section id="home" className="relative min-h-[600px] overflow-hidden lg:min-h-[700px]">
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/[0.03] animate-pulse" />
        <div className="absolute -left-32 bottom-32 h-80 w-80 rotate-45 bg-primary/[0.02] animate-bounce" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute right-32 top-1/3 h-16 w-16 rotate-12 border-2 border-primary/20 animate-spin" 
             style={{ animationDuration: '8s' }} />
      </div>

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getImagePath("/images/hero-windows.jpg")}
          alt="Premium uPVC windows installed in a modern home showcasing Windows Plaza's expert craftsmanship"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/97 via-foreground/80 to-foreground/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
      </div>

      <div ref={ref} className={`relative z-10 mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:px-8 lg:py-40 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-2 backdrop-blur-md">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            <span className="text-xs font-semibold tracking-wide text-primary uppercase">
              Trusted Across India Since 2005
            </span>
          </div>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Premium uPVC &{" "}
            <span className="relative inline-block">
              Aluminium
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-primary opacity-80" aria-hidden="true" />
            </span>{" "}
            Windows
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            India&apos;s trusted supplier of energy-efficient uPVC and aluminium
            windows and doors. Expertly crafted and professionally installed to
            enhance your home&apos;s beauty, security, and comfort.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 w-full px-8 text-base shadow-lg shadow-primary/40 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/50 sm:w-auto"
            >
              <Link href="#contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 w-full border-white/30 bg-white/5 px-8 text-base text-white backdrop-blur-sm transition-all hover:bg-white/15 hover:text-white sm:w-auto"
            >
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 sm:mt-16">
            {[
              { icon: Shield, label: "10-Year Warranty" },
              { icon: Award, label: "Premium Quality" },
              { icon: Leaf, label: "Energy Efficient" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-white/75">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 backdrop-blur-sm">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-xs font-semibold tracking-wide sm:text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
