"use client"

import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { getImagePath } from "@/lib/image-path"
import { buildStaticWhatsAppUrl } from "@/lib/utils/whatsapp"

const products = [
  {
    title: "Sliding Windows",
    description:
      "Smooth horizontal operation with minimal effort. Perfect for apartments, villas, and homes where space is a priority. Weather-sealed for dust and rain protection.",
    image: getImagePath("/images/sliding-windows.jpg"),
    alt: "uPVC sliding windows in a modern home by Windows Plaza, Andhra Pradesh",
    features: ["Easy to operate", "Dust resistant", "Space saving"],
    tag: "Most Popular",
    waHref: buildStaticWhatsAppUrl("Hello, I am interested in Sliding Windows. Please share pricing and details."),
  },
  {
    title: "Casement Windows",
    description:
      "Hinged windows that open outward for maximum ventilation. Excellent sealing performance ideal for coastal climates. Robust multi-point locking mechanism.",
    image: getImagePath("/images/upvc-windows.jpg"),
    alt: "uPVC casement windows professionally installed in a home in Andhra Pradesh",
    features: ["Maximum ventilation", "Multi-point lock", "Coastal climate ready"],
    tag: null,
    waHref: buildStaticWhatsAppUrl("Hello, I am interested in Casement Windows. Please share pricing and details."),
  },
  {
    title: "Tilt & Turn Windows",
    description:
      "Versatile two-in-one functionality: tilt inward for ventilation or turn wide open for cleaning and maximum airflow. Premium European-style mechanism.",
    image: getImagePath("/images/hero-windows.jpg"),
    alt: "uPVC tilt and turn windows by Windows Plaza, Andhra Pradesh",
    features: ["Tilt for ventilation", "Turn for full open", "Easy to clean"],
    tag: "Premium",
    waHref: buildStaticWhatsAppUrl("Hello, I am interested in Tilt & Turn Windows. Please share pricing and details."),
  },
  {
    title: "Fixed Glass & Vents",
    description:
      "Fixed picture windows that maximise natural light and views. Combine with ventilators for the perfect balance of brightness and airflow in any room.",
    image: getImagePath("/images/aluminium-doors.jpg"),
    alt: "uPVC fixed glass windows and ventilators by Windows Plaza",
    features: ["Maximum light", "Panoramic views", "Low maintenance"],
    tag: null,
    waHref: buildStaticWhatsAppUrl("Hello, I am interested in Fixed Glass & Vents. Please share pricing and details."),
  },
]

export function ProductsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.08)

  return (
    <section id="products" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div ref={headerRef} className={`mx-auto max-w-2xl text-center ${headerVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our Products</span>
          </div>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Premium uPVC Windows for Every Home
          </h2>
          <div className="heading-accent-center" />
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            All windows are manufactured at our facility using
            premium uPVC profiles. Custom sizes available for every opening.
          </p>
        </div>

        <div ref={gridRef} className={`mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 stagger-children ${gridVisible ? "is-visible" : ""}`}>
          {products.map((product) => (
            <article
              key={product.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md"
            >
              {product.tag && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md">
                  {product.tag}
                </span>
              )}
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
                <h3 className="text-base font-bold text-foreground sm:text-lg">{product.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.features.map((feat) => (
                    <span key={feat} className="rounded-full bg-primary/[0.06] px-3 py-1 text-xs font-medium text-primary">
                      {feat}
                    </span>
                  ))}
                </div>
                <Button
                  asChild
                  size="sm"
                  className="mt-5 w-full bg-[#25D366] text-white hover:bg-[#1ebe5a]"
                >
                  <a
                    href={product.waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-1.5 h-4 w-4" />
                    Get Quote
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
