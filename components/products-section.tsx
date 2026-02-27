"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const products = [
  {
    title: "uPVC Casement Windows",
    description:
      "Classic hinged windows that open outward, offering excellent ventilation, security, and weatherproofing. Ideal for homes in all climates across India.",
    image: "/images/upvc-windows.jpg",
    alt: "uPVC casement windows professionally installed in a modern home",
    features: ["Multi-point locking", "Double glazed", "Low maintenance"],
  },
  {
    title: "Aluminium Sliding Doors",
    description:
      "Sleek, space-saving sliding doors with slim aluminium profiles that maximise natural light. A popular choice for modern homes and apartments.",
    image: "/images/aluminium-doors.jpg",
    alt: "Premium aluminium sliding doors for modern homes",
    features: ["Slim sightlines", "Smooth glide system", "Powder coated"],
  },
  {
    title: "Sliding Windows",
    description:
      "Effortless horizontal sliding windows, perfect for apartments and villas that need easy operation without compromising on style or performance.",
    image: "/images/sliding-windows.jpg",
    alt: "Sliding windows installation in a modern apartment",
    features: ["Easy operation", "Weather sealed", "Sound insulated"],
  },
  {
    title: "French Doors",
    description:
      "Timeless double-opening doors that add elegance and charm to any home, offering wide access to balconies, gardens, and patios year-round.",
    image: "/images/french-doors.jpg",
    alt: "Elegant French doors for stylish homes and villas",
    features: ["Wide opening", "Classic design", "Energy efficient"],
  },
]

export function ProductsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.08)

  return (
    <section id="products" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div ref={headerRef} className={`mx-auto max-w-2xl text-center ${headerVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">
              Our Products
            </span>
          </div>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Premium Windows &amp; Doors for Every Home
          </h2>
          <div className="heading-accent-center" />
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Explore our carefully curated range of uPVC and aluminium products,
            designed to combine aesthetics, performance, and durability for
            homes and businesses across India.
          </p>
        </div>

        <div ref={gridRef} className={`mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 stagger-children ${gridVisible ? "is-visible" : ""}`}>
          {products.map((product) => (
            <article
              key={product.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl hover:shadow-foreground/[0.1]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-base font-bold text-foreground sm:text-lg">
                  {product.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.features.map((feat) => (
                    <span
                      key={feat}
                      className="rounded-full bg-primary/[0.06] px-3 py-1 text-xs font-medium text-primary"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 border-primary/20 px-8 text-primary shadow-sm transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
          >
            <Link href="#contact">
              Request Full Catalogue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
