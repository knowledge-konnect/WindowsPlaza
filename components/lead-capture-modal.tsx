"use client"

import { useState, useCallback, useEffect } from "react"
import { X, MessageCircle, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BUSINESS_INFO } from "@/lib/constants/business"
import { API_ENDPOINTS } from "@/lib/constants/api"
import { buildWhatsAppUrl } from "@/lib/utils/whatsapp"

const BUILDING_TYPES = BUSINESS_INFO.buildingTypes

type FormData = {
  name: string
  phone: string
  location: string
  buildingType: string
  windowsCount: string
}

type Status = "idle" | "submitting" | "success" | "error"

type Props = {
  isOpen: boolean
  onClose: () => void
}

const INITIAL_FORM: FormData = {
  name: "",
  phone: "",
  location: "",
  buildingType: "Apartment",
  windowsCount: "",
}

export function LeadCaptureModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (status === "submitting") return
    onClose()
    setTimeout(() => {
      setForm(INITIAL_FORM)
      setStatus("idle")
      setErrorMsg("")
    }, 300)
  }, [status, onClose])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target
      setForm((prev) => ({ ...prev, [name]: value }))
    },
    []
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === "submitting") return

    setStatus("submitting")
    setErrorMsg("")

    const payload = {
      ...form,
      timestamp: new Date().toISOString(),
      source: `${BUSINESS_INFO.brandName} Website`,
    }

    // Fire-and-forget to Google Sheets (no-cors – can't read response)
    fetch(API_ENDPOINTS.googleAppsScript, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      mode: "no-cors",
    }).catch(() => {})

    // Build dynamic WhatsApp URL from collected form data
    const waUrl = buildWhatsAppUrl({
      name: form.name,
      phone: form.phone,
      location: form.location,
      buildingType: form.buildingType,
      windowsCount: form.windowsCount || undefined,
    })

    setStatus("success")

    // Brief success feedback then open WhatsApp
    setTimeout(() => {
      window.open(waUrl, "_blank", "noopener,noreferrer")
      handleClose()
    }, 900)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
        className="fixed inset-x-4 top-1/2 z-[70] mx-auto max-w-md -translate-y-1/2 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2"
      >
        <div className="animate-in fade-in-0 zoom-in-95 relative overflow-hidden rounded-2xl bg-white shadow-2xl duration-200">
          {/* Gradient header */}
          <div className="relative bg-gradient-to-br from-primary via-primary to-primary/80 px-6 pb-5 pt-6">
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2
                  id="lead-modal-title"
                  className="text-lg font-bold leading-tight text-white"
                >
                  Get Free Quote
                </h2>
                <p className="text-xs text-white/80">
                  We'll send pricing to WhatsApp instantly
                </p>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-medium text-white/85">
              <span>✓ Free Site Visit</span>
              <span>✓ Direct Manufacturer</span>
              <span>✓ No Obligation</span>
            </div>
          </div>

          {/* Form body */}
          <div className="px-6 pb-6 pt-5">
            {status === "success" ? (
              <div className="flex flex-col items-center py-8 gap-3 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/15">
                  <CheckCircle2 className="h-8 w-8 text-[#25D366]" />
                </div>
                <p className="font-semibold text-foreground">Details Saved!</p>
                <p className="text-sm text-muted-foreground">
                  Opening WhatsApp with your details…
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="lead-name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="lead-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="E.g. Ravi Kumar"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground transition-shadow focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="lead-phone"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="lead-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground transition-shadow focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Location */}
                <div>
                  <label
                    htmlFor="lead-location"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Location / Area <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="lead-location"
                    name="location"
                    type="text"
                    required
                    placeholder="E.g. Your area, city"
                    value={form.location}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground transition-shadow focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Building Type */}
                <div>
                  <label
                    htmlFor="lead-buildingType"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Building Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="lead-buildingType"
                    name="buildingType"
                    required
                    value={form.buildingType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    {BUILDING_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Windows Count */}
                <div>
                  <label
                    htmlFor="lead-windowsCount"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Approx. Windows Required{" "}
                    <span className="text-xs text-muted-foreground">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="lead-windowsCount"
                    name="windowsCount"
                    type="number"
                    min="1"
                    placeholder="E.g. 8"
                    value={form.windowsCount}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground transition-shadow focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {errorMsg && (
                  <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600">
                    {errorMsg}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                  className="mt-1 w-full bg-[#25D366] py-3 text-white shadow-sm transition-colors hover:bg-[#20b859] disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Get Quote on WhatsApp
                    </>
                  )}
                </Button>

                <p className="text-center text-[11px] text-muted-foreground">
                  By submitting, you agree to be contacted via WhatsApp.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
