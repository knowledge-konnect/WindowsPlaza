"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-foreground ${
        scrolled
          ? "border-b border-white/10 shadow-xl shadow-black/20"
          : "border-b border-white/[0.06]"
      }`}
    >
      {/* Top bar - visible on desktop */}
      <div className={`hidden border-b border-white/10 bg-white/[0.04] transition-all duration-300 md:block ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 lg:px-8">
          <p className="text-xs text-white/50">
            Premium uPVC &amp; Aluminium Windows and Doors — Trusted Across India
          </p>
          <a href="tel:+919876543210" className="flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary/80">
            <Phone className="h-3 w-3" />
            +91-9876543210
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="#home" className="group flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-primary shadow-md shadow-primary/30 transition-all group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/40">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6 text-white"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-white">
              Windows Plaza
            </span>
            <span className="text-[10px] font-medium tracking-[0.15em] text-white/50 uppercase">
              uPVC & Aluminium
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative rounded-lg px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:text-primary after:absolute after:inset-x-4 after:bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-primary after:transition-transform hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="hidden shadow-md shadow-primary/30 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/40 sm:inline-flex"
          >
            <a href="tel:+919876543210">
              <Phone className="mr-1.5 h-4 w-4" />
              <span className="hidden lg:inline">+91-9876543210</span>
              <span className="lg:hidden">Call Now</span>
            </a>
          </Button>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white/80 transition-colors hover:bg-white/10 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav
            className="fixed inset-x-0 top-[65px] z-50 border-b border-white/10 bg-foreground px-4 pb-6 pt-3 shadow-2xl md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-primary active:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  <ChevronRight className="h-4 w-4 text-white/30" />
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2.5">
                <Button asChild size="lg" className="w-full shadow-md shadow-primary/25">
                  <a href="tel:+919876543210">
                    <Phone className="mr-2 h-4 w-4" />
                    +91-9876543210
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full border-white/20 bg-white/5 text-white hover:bg-white/15 hover:text-white">
                  <Link href="#contact" onClick={() => setMobileOpen(false)}>
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  )
}
