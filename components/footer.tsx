import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { BUSINESS_INFO } from "@/lib/constants/business"
import { WHATSAPP_CONFIG } from "@/lib/constants/whatsapp"
import { buildStaticWhatsAppUrl } from "@/lib/utils/whatsapp"

const { phoneHref: PHONE_HREF, phoneNumber: PHONE_NUMBER, email, location, brandName, parentCompany, description } = BUSINESS_INFO
const WHATSAPP_HREF = buildStaticWhatsAppUrl(WHATSAPP_CONFIG.genericEnquiryMessage)

const footerLinks = {
  Products: [
    { label: "Sliding Windows", href: "#products" },
    { label: "Casement Windows", href: "#products" },
    { label: "Tilt & Turn Windows", href: "#products" },
    { label: "Fixed Glass & Vents", href: "#products" },
  ],
  Company: [
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Benefits", href: "#benefits" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
  Support: [
    { label: "Get Free Quote", href: "#contact" },
    { label: "FAQ", href: "#faq" },
    { label: "Call Us", href: PHONE_HREF },
    { label: "WhatsApp Us", href: WHATSAPP_HREF },
  ],
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-foreground text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-primary/10 animate-pulse" />
        <div className="absolute -left-24 bottom-24 h-48 w-48 rotate-45 bg-primary/[0.02] animate-bounce"
          style={{ animationDuration: "6s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand + NAP */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary shadow-[0_2px_8px_rgba(0,0,0,0.28)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-[19px] w-[19px]"
                  stroke="white"
                  strokeWidth={1.8}
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  aria-hidden="true"
                >
                  <rect x="2.5" y="2.5" width="19" height="19" rx="1" />
                  <line x1="2.5" y1="8.5" x2="21.5" y2="8.5" />
                  <line x1="12" y1="8.5" x2="12" y2="21.5" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold">{brandName}</span>
                <span className="text-[10px] text-white/45">A Unit of {parentCompany}</span>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/60">
              {description}
            </p>

            <div className="mt-5 flex flex-col gap-2.5">
              <a href={PHONE_HREF}
                className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-primary">
                <Phone className="h-4 w-4 shrink-0" />
                {PHONE_NUMBER}
              </a>
              <a href={`mailto:${email}`}
                className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-primary">
                <Mail className="h-4 w-4 shrink-0" />
                {email}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{location.full}</span>
              </div>
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-[#25D366] transition-colors hover:text-[#1ebe5a]">
                <MessageCircle className="h-4 w-4 shrink-0" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70">{heading}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-primary-foreground/10 pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} {brandName}. A Unit of {parentCompany}. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-xs text-white/40 transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#contact" className="text-xs text-white/40 transition-colors hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
