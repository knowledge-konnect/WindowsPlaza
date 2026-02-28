"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, Phone, MessageCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLeadModal } from "@/hooks/use-lead-modal"
import { BUSINESS_INFO } from "@/lib/constants/business"
import { WHATSAPP_CONFIG } from "@/lib/constants/whatsapp"
import { buildStaticWhatsAppUrl } from "@/lib/utils/whatsapp"

const { phoneNumber: PHONE_NUMBER, phoneHref: PHONE_HREF } = BUSINESS_INFO
const WHATSAPP_HREF = buildStaticWhatsAppUrl(WHATSAPP_CONFIG.genericEnquiryMessage)

const navLinks = [
  { label: "Home",         href: "#home" },
  { label: "Products",     href: "#products" },
  { label: "Why Us",       href: "#why-choose-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact",      href: "#contact" },
]

const sectionIds = navLinks.map((l) => l.href.slice(1))

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled,   setScrolled]   = useState(false)
  const [activeId,   setActiveId]   = useState<string>("home")
  const { openModal } = useLeadModal()
  const headerRef = useRef<HTMLElement>(null)

  /* scroll flag */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* close drawer on desktop resize */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  /* lock body scroll while drawer open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  /* active section via IntersectionObserver */
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 bg-foreground/90 backdrop-blur-lg transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 shadow-xl shadow-black/30"
            : "border-b border-white/[0.06]"
        }`}
      >
        {/* Top info bar â€” opacity+translate, no layout shift */}
        <div
          className={`border-b border-white/[0.07] bg-white/[0.03] transition-all duration-300 ${
            scrolled ? "pointer-events-none absolute w-full -translate-y-full opacity-0" : "translate-y-0 opacity-100"
          }`}
          aria-hidden={scrolled}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 lg:px-8">
            <p className="truncate text-[11px] text-white/50">
              🏭&nbsp;Direct Manufacturer · No Middleman &nbsp;·&nbsp; Free Site Measurement, Andhra Pradesh
            </p>
            <a
              href={PHONE_HREF}
              className="ml-4 flex shrink-0 items-center gap-1 text-[11px] font-semibold text-primary transition-colors hover:text-primary/80"
            >
              <Phone className="h-3 w-3" />
              {PHONE_NUMBER}
            </a>
          </div>
        </div>

        {/* Main nav row */}
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">

          {/* Logo */}
          <Link href="#home" className="group flex shrink-0 items-center gap-3" onClick={closeMobile} aria-label="Windows Plaza — home">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary shadow-[0_2px_10px_rgba(0,0,0,0.28)] transition-shadow duration-300 group-hover:shadow-[0_4px_18px_rgba(0,0,0,0.38)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-[22px] w-[22px]"
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
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="text-lg font-bold tracking-[0.02em] text-white sm:text-xl">
                Windows Plaza
              </span>
              <span className="hidden text-[11px] font-normal tracking-[0.02em] text-white/45 sm:block">
                A Unit of SP Builders &amp; Traders
              </span>
            </div>
          </Link>

          {/* Desktop nav links (lg+) */}
          <nav
            className="hidden flex-1 items-center justify-center gap-0.5 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors
                    after:absolute after:inset-x-3 after:bottom-0.5 after:h-0.5 after:origin-left
                    after:rounded-full after:bg-primary after:transition-transform
                    ${isActive
                      ? "text-primary after:scale-x-100"
                      : "text-white/70 hover:text-primary after:scale-x-0 hover:after:scale-x-100"
                    }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right actions */}
          <div className="flex shrink-0 items-center gap-2">

            {/* Phone pill â€” xl+ */}
            <a
              href={PHONE_HREF}
              aria-label={`Call us on ${PHONE_NUMBER}`}
              className="hidden items-center gap-1.5 rounded-lg bg-white/[0.07] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/[0.13] xl:flex"
            >
              <Phone className="h-3.5 w-3.5 text-primary" />
              {PHONE_NUMBER}
            </a>

            {/* WhatsApp â€” icon on md..xl, icon+text on xl+ */}
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="hidden items-center gap-1.5 rounded-lg border border-[#25D366]/40 bg-[#25D366]/10 px-2.5 py-2 text-xs font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/20 md:flex"
            >
              <MessageCircle className="h-[18px] w-[18px] shrink-0" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            {/* Get Free Quote CTA */}
            <Button
              size="sm"
              onClick={openModal}
              className="hidden bg-primary shadow-sm transition-colors hover:bg-primary/90 sm:inline-flex"
            >
              <FileText className="mr-1.5 h-4 w-4" />
              Get Free Quote
            </Button>

            {/* Hamburger */}
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white/80 transition-colors hover:bg-white/10 lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={closeMobile}
              aria-hidden="true"
            />
            <nav
              id="mobile-nav"
              className="absolute inset-x-0 top-full z-50 border-b border-white/10 bg-foreground/95 shadow-2xl backdrop-blur-lg lg:hidden"
              aria-label="Mobile navigation"
            >
              <ul className="divide-y divide-white/[0.06] px-4">
                {navLinks.map((link) => {
                  const isActive = activeId === link.href.slice(1)
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMobile}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex w-full items-center py-4 text-sm font-medium transition-colors ${
                          isActive ? "text-primary" : "text-white/80 hover:text-primary"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>

              <div className="grid grid-cols-2 gap-2.5 border-t border-white/10 p-4">
                <Button
                  asChild size="sm" variant="outline"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  <a href={PHONE_HREF}>
                    <Phone className="mr-2 h-4 w-4 text-primary" />
                    Call Us
                  </a>
                </Button>
                <Button asChild size="sm" className="bg-[#25D366] text-white hover:bg-[#1ebe5a]">
                  <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  size="sm"
                  onClick={() => { closeMobile(); openModal() }}
                  className="col-span-2 bg-primary shadow-sm"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Get Free Quote
                </Button>
              </div>
            </nav>
          </>
        )}
      </header>

      {/* Mobile sticky bottom CTA bar */}
      <div
        className="fixed inset-x-0 bottom-0 z-50 flex items-stretch border-t border-white/10 bg-foreground/95 shadow-[0_-4px_20px_rgba(0,0,0,0.35)] backdrop-blur-lg lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        aria-label="Quick contact actions"
      >
        <a
          href={PHONE_HREF}
          aria-label={`Call ${PHONE_NUMBER}`}
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-white/70 transition-colors hover:text-primary active:bg-white/5"
        >
          <Phone className="h-5 w-5" />
          <span className="text-[10px] font-semibold uppercase tracking-wide">Call</span>
        </a>

        <div className="w-px self-stretch bg-white/[0.08]" aria-hidden="true" />

        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-[#25D366] transition-colors hover:text-[#1ebe5a] active:bg-white/5"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[10px] font-semibold uppercase tracking-wide">WhatsApp</span>
        </a>

        <div className="w-px self-stretch bg-white/[0.08]" aria-hidden="true" />

        <button
          onClick={openModal}
          aria-label="Get a free quote"
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-primary transition-colors hover:text-primary/80 active:bg-white/5"
        >
          <FileText className="h-5 w-5" />
          <span className="text-[10px] font-semibold uppercase tracking-wide">Free Quote</span>
        </button>
      </div>
    </>
  )
}
