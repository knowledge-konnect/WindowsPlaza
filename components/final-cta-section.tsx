"use client"

import { Phone, CalendarCheck, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLeadModal } from "@/hooks/use-lead-modal"
import { BUSINESS_INFO } from "@/lib/constants/business"

const { phoneHref: PHONE_HREF, phoneNumber: PHONE_NUMBER } = BUSINESS_INFO

export function FinalCTASection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const { openModal } = useLeadModal()

  return (
    <section id="cta" className="relative overflow-hidden bg-foreground py-16 lg:py-24">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/[0.06]" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/[0.05]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03]" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 mx-auto max-w-4xl px-4 text-center lg:px-8 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        {/* Badge */}
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-2">
          <CalendarCheck className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Free Site Visit — No Obligation
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Upgrade Your Home with{" "}
          <span className="text-primary">Premium uPVC Windows</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Get factory-direct pricing. Our team visits your home, measures every
          opening, and gives you an honest, detailed quote — completely free, no
          pressure, no commitment.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            onClick={openModal}
            className="w-full px-10 py-4 text-base bg-[#25D366] text-white shadow-sm transition-colors hover:bg-[#20b859] sm:w-auto"
          >
            <FileText className="mr-2 h-5 w-5" />
            Get Free Quote
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full border-white/30 bg-white/5 px-10 py-4 text-base text-white backdrop-blur-sm transition-all hover:bg-white/15 hover:text-white sm:w-auto"
          >
            <a href={PHONE_HREF}>
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Trust snippet */}
        <p className="mt-8 text-sm text-white/50">
          📍 Serving Andhra Pradesh &amp; surrounding areas &nbsp;|&nbsp;{" "}
          <a href={PHONE_HREF} className="font-semibold text-primary hover:underline">
            {PHONE_NUMBER}
          </a>{" "}
          &nbsp;|&nbsp; Mon–Sat, 9 AM – 6 PM
        </p>
      </div>
    </section>
  )
}
