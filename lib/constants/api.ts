import { BUSINESS_INFO } from "./business"

export const API_ENDPOINTS = {
  /**
   * Google Apps Script Web App URL for lead capture form submissions.
   * Set NEXT_PUBLIC_GAS_ENDPOINT in your .env.local (or environment settings)
   * then redeploy. Keep this empty string as fallback — submissions will be
   * skipped silently until the variable is configured.
   */
  googleAppsScript:
    process.env.NEXT_PUBLIC_GAS_ENDPOINT ??
    "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",

  /** FormSubmit.co endpoint used by the contact section */
  formSubmit: `https://formsubmit.co/ajax/${BUSINESS_INFO.email}`,
} as const
