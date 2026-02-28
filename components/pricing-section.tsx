"use client"

import { MessageCircle, Phone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { BUSINESS_INFO } from "@/lib/constants/business"
import { buildStaticWhatsAppUrl } from "@/lib/utils/whatsapp"

const { phoneHref: PHONE_HREF } = BUSINESS_INFO
const WHATSAPP_HREF = buildStaticWhatsAppUrl(
  "Hello, I need a free quotation for uPVC windows for my home. Please share pricing."
)

const includedItems = [
  "Free site measurement visit",
  "Custom fabrication to your exact size",
  "Professional installation by trained crew",
  "Hardware fittings & quality handles",
  "Weatherproof sealing & finish",
  "Post-installation support",
]

export function PricingSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="pricing" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Pricing</span>
          </div>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Transparent Factory Pricing
          </h2>
          <div className="heading-accent-center" />
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            No hidden charges. No distributor markup. You get manufacturer prices
            directly — with everything included.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-14 mx-auto max-w-3xl ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="rounded-3xl border-2 border-primary/20 bg-card p-8 shadow-xl shadow-primary/[0.05] lg:p-12">
            {/* Price display */}
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Competitive Factory Pricing
              </p>
              <p className="mt-3 text-lg font-semibold text-foreground">
                Price depends on window type, size &amp; glass specifications.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                We provide a detailed, itemised quote after a free site measurement — no guesswork, no hidden charges.
              </p>
            </div>

            {/* Included items */}
            <div className="mt-10">
              <p className="text-center text-sm font-semibold uppercase tracking-wider text-foreground">
                Everything Included in Your Quote
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="w-full bg-[#25D366] text-white shadow-sm transition-colors hover:bg-[#20b859] sm:w-auto"
              >
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Free Quotation on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-primary/30 text-primary hover:bg-primary hover:text-white sm:w-auto"
              >
                <a href={PHONE_HREF}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Pricing
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
