"use client"

import { useState } from "react"
import { LeadModalContext } from "@/hooks/use-lead-modal"
import { LeadCaptureModal } from "@/components/lead-capture-modal"

export function LeadModalProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <LeadModalContext.Provider value={{ openModal: () => setIsOpen(true) }}>
      {children}
      <LeadCaptureModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </LeadModalContext.Provider>
  )
}
