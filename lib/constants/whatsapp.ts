import { BUSINESS_INFO } from "./business"

/**
 * Raw WhatsApp number (country code + number, no + prefix) used in wa.me links.
 * Override via NEXT_PUBLIC_WHATSAPP_NUMBER env var if needed.
 */
const number =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? BUSINESS_INFO.phoneRaw

export const WHATSAPP_CONFIG = {
  number,

  /** Base URL for all WhatsApp deep links */
  baseUrl: `https://wa.me/${number}`,

  /**
   * Default floating-button message — shown to users who click the
   * persistent bottom-right WhatsApp button without filling a form.
   */
  floatingButtonMessage:
    "Hi 👋 I am interested in uPVC windows.\nMy Name:\nLocation:\nBuilding Type:\nApprox Windows Required:\nPlease share quotation.",

  /** Generic enquiry message used in static links (pricing, products, etc.) */
  genericEnquiryMessage:
    "Hello Windows Plaza, I am interested in uPVC windows. Please share details and pricing.",
} as const
