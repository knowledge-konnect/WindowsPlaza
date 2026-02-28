import { WHATSAPP_CONFIG } from "@/lib/constants/whatsapp"

/**
 * Builds the personalised WhatsApp message after a user submits the
 * lead capture form, then returns a complete wa.me URL.
 */
export function buildWhatsAppUrl({
  name,
  phone,
  location,
  buildingType,
  windowsCount,
}: {
  name: string
  phone: string
  location: string
  buildingType: string
  windowsCount?: string
}): string {
  const windowsLine = windowsCount ? `\nApprox Windows Required: ${windowsCount}` : ""

  const message =
    `Hi 👋 I am ${name}.\n` +
    `Phone: ${phone}\n` +
    `Location: ${location}\n` +
    `Building Type: ${buildingType}` +
    windowsLine +
    `\n\nPlease share quotation.`

  return `${WHATSAPP_CONFIG.baseUrl}?text=${encodeURIComponent(message)}`
}

/**
 * Builds a static WhatsApp URL with a predefined message string.
 * Useful for buttons that don't collect form data.
 */
export function buildStaticWhatsAppUrl(message: string): string {
  return `${WHATSAPP_CONFIG.baseUrl}?text=${encodeURIComponent(message)}`
}
