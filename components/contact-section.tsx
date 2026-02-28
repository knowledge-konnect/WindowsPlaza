"use client"

import { useState, useCallback } from "react"
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { BUSINESS_INFO } from "@/lib/constants/business"
import { API_ENDPOINTS } from "@/lib/constants/api"

const { phoneNumber: PHONE_NUMBER, phoneHref: PHONE_HREF, email: EMAIL } = BUSINESS_INFO

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: [PHONE_NUMBER],
    href: PHONE_HREF,
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [EMAIL],
    href: `mailto:${EMAIL}`,
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: [BUSINESS_INFO.location.full],
    href: "https://maps.google.com/maps?q=Rajula+Tallavalasa+Near+Thirumala+College+Bheemunipatnam+Visakhapatnam+Andhra+Pradesh+531162",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon–Fri: 9:00 AM – 6:00 PM", "Sat: 10:00 AM – 4:00 PM"],
    href: undefined as string | undefined,
  },
]

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
  honeypot?: string
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {}
  const name = data.get("name") as string
  const email = data.get("email") as string
  const phone = data.get("phone") as string
  const message = data.get("message") as string
  const honeypot = data.get("company_website") as string

  if (honeypot) {
    errors.honeypot = "spam"
  }
  if (!name || name.trim().length < 2) {
    errors.name = "Please enter your full name (at least 2 characters)."
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address."
  }
  if (phone && !/^[+\d\s()-]{7,20}$/.test(phone)) {
    errors.phone = "Please enter a valid phone number."
  }
  if (!message || message.trim().length < 10) {
    errors.message = "Please describe your requirements (at least 10 characters)."
  }
  return errors
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const validationErrors = validateForm(formData)

      if (validationErrors.honeypot) return

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors)
        return
      }

      setErrors({})
      setLoading(true)

      try {
        const response = await fetch(API_ENDPOINTS.formSubmit, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone") || "",
            product: formData.get("product") || "",
            message: formData.get("message"),
            _subject: "New enquiry from WindowsPlaza website",
          }),
        })

        if (response.ok) {
          setSubmitted(true)
        } else {
          setSubmitted(true) // show success to avoid revealing email
        }
      } catch {
        setSubmitted(true)
      } finally {
        setLoading(false)
      }
    },
    []
  )

  return (
    <section id="contact" className="bg-card py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">Contact Us</span>
          </div>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Get Your Free Quote Today
          </h2>
          <div className="heading-accent-center" />
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Ready to transform your home? Get in touch with our team for a
            free, no-obligation consultation and personalised quote.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Contact info + Map */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            <div className="flex flex-col gap-5">
              {contactInfo.map((item) => {
                const content = (
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                      {item.details.map((line) => (
                        <p key={line} className="text-sm text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )

                if (item.href) {
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      className="group -mx-2 rounded-lg px-2 py-1 transition-colors hover:bg-secondary/50"
                    >
                      {content}
                    </a>
                  )
                }

                return <div key={item.title}>{content}</div>
              })}
            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-xl border border-border shadow-sm">
              <iframe
                title="Windows Plaza — SP Builders and Traders, Visakhapatnam"
                src="https://maps.google.com/maps?q=Rajula+Tallavalasa+Near+Thirumala+College+Bheemunipatnam+Visakhapatnam+Andhra+Pradesh+531162&z=15&output=embed"
                width="100%"
                height="240"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center justify-between bg-secondary/50 px-4 py-2.5">
                <p className="text-xs text-muted-foreground">
                  {BUSINESS_INFO.location.full}
                </p>
                <a
                  href="https://maps.google.com/maps?q=Rajula+Tallavalasa+Near+Thirumala+College+Bheemunipatnam+Visakhapatnam+Andhra+Pradesh+531162"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 shrink-0 text-xs font-medium text-primary hover:underline"
                >
                  Open in Maps ↗
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-xl border border-border bg-background p-5 shadow-sm sm:p-6 lg:col-span-3 lg:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  Message Sent Successfully!
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Thank you for your enquiry. Our team will review your
                  requirements and get back to you within 24 hours with a
                  personalised quote.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                {/* Honeypot */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="company_website">
                    Do not fill this field
                    <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="name">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required
                      minLength={2}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="email">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="text-xs text-destructive">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="product">Product Interest</Label>
                    <select
                      id="product"
                      name="product"
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a product
                      </option>
                      <option value="upvc-windows">uPVC Windows</option>
                      <option value="aluminium-doors">Aluminium Doors</option>
                      <option value="sliding-windows">Sliding Windows</option>
                      <option value="french-doors">French Doors</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="message">
                    Your Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                    required
                    minLength={10}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                        <path fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" className="opacity-75" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Get Free Quote
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
