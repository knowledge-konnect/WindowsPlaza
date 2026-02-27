"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { getImagePath } from "@/lib/image-path"

const galleryImages = [
  {
    src: getImagePath("/images/hero-windows.jpg"),
    alt: "Modern living room with panoramic uPVC windows — Windows Plaza installation",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: getImagePath("/images/upvc-windows.jpg"),
    alt: "uPVC casement windows professionally installed in a contemporary home",
    span: "",
  },
  {
    src: getImagePath("/images/aluminium-doors.jpg"),
    alt: "Premium aluminium sliding doors — completed installation project",
    span: "",
  },
  {
    src: getImagePath("/images/sliding-windows.jpg"),
    alt: "uPVC sliding windows installation in a modern apartment",
    span: "",
  },
  {
    src: getImagePath("/images/french-doors.jpg"),
    alt: "Elegant French doors installed in a residential villa",
    span: "",
  },
]

export function GallerySection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.08)

  return (
    <section id="gallery" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div ref={headerRef} className={`mx-auto max-w-2xl text-center ${headerVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">
              Our Work
            </span>
          </div>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Our Premium Installation Portfolio
          </h2>
          <div className="heading-accent-center" />
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Browse through our portfolio of completed projects showcasing our
            craftsmanship, quality, and attention to detail across India.
          </p>
        </div>

        <div ref={gridRef} className={`mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 stagger-children ${gridVisible ? "is-visible" : ""}`}>
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${img.span} ${
                index === 0 ? "aspect-[4/3] sm:aspect-auto" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={
                  index === 0
                    ? "(max-width: 640px) 100vw, 50vw"
                    : "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                }
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-sm font-medium text-primary-foreground/90 drop-shadow-sm">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
