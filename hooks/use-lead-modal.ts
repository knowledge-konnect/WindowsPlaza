"use client"

import { createContext, useContext } from "react"

export type LeadModalContextType = {
  openModal: () => void
}

export const LeadModalContext = createContext<LeadModalContextType>({
  openModal: () => {},
})

export function useLeadModal(): LeadModalContextType {
  return useContext(LeadModalContext)
}
