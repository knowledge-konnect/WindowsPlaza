import Link from "next/link"
import { Phone, Mail } from "lucide-react"

const footerLinks = {
  Products: [
    { label: "uPVC Windows", href: "#products" },
    { label: "Aluminium Doors", href: "#products" },
    { label: "Sliding Windows", href: "#products" },
    { label: "French Doors", href: "#products" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Work", href: "#gallery" },
    { label: "Testimonials", href: "#gallery" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
  Support: [
    { label: "Get Free Quote", href: "#contact" },
    { label: "Call Us", href: "tel:+919876543210" },
    { label: "Email Us", href: "mailto:info@windowsplaza.in" },
    { label: "Installation Guide", href: "#contact" },
    { label: "Warranty Info", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Animated geometric accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-primary/10 animate-pulse" />
        <div className="absolute -left-24 bottom-24 h-48 w-48 rotate-45 bg-primary/[0.02] animate-bounce" 
             style={{ animationDuration: '6s' }} />
        <div className="absolute right-24 bottom-1/3 h-12 w-12 rotate-45 border border-primary/15 animate-spin" 
             style={{ animationDuration: '12s' }} />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16 relative z-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand + NAP */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 text-primary-foreground"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </div>
              <span className="text-lg font-bold">Windows Plaza</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/60">
              India&apos;s trusted supplier of premium uPVC and aluminium windows
              and doors. We enhance homes and offices with quality craftsmanship,
              energy-efficient solutions, and professional installation.
            </p>

            {/* NAP - Contact info */}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0" />
                +91-9876543210
              </a>
              <a
                href="mailto:info@windowsplaza.in"
                className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0" />
                info@windowsplaza.in
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70">
                {heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-primary"
                    >
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
            &copy; 2026 Windows Plaza. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/40 transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="#contact"
              className="text-xs text-white/40 transition-colors hover:text-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
