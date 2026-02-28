"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const faqs = [
  {
    question: "Is uPVC better than aluminium for coastal homes in Andhra Pradesh?",
    answer:
      "Yes, uPVC is superior for Andhra Pradesh's coastal climate. uPVC does not corrode, rust, or oxidise in salty sea air — a major issue with untreated aluminium. uPVC also provides better thermal and sound insulation, requires zero maintenance (no painting or oiling), and is more cost-effective over its lifetime. For homeowners near the coast, uPVC is the smarter long-term choice.",
  },
  {
    question: "How long does uPVC window installation take?",
    answer:
      "For a typical 2-3 BHK apartment or home with 8–12 windows, our team usually completes the full installation in 1–2 days. Before installation, we do a free site measurement visit to take precise dimensions and fabricate your custom windows. We will give you a clear timeline during the measurement visit.",
  },
  {
    question: "What warranty do you provide on uPVC windows?",
    answer:
      "We provide a warranty on the uPVC profile frame for its structural integrity and UV resistance. Hardware components like handles, hinges, and locks carry a standard manufacturer warranty. Our workmanship and installation quality is backed by our after-sales support commitment — if anything is not right post-installation, our team will fix it.",
  },
  {
    question: "Is uPVC suitable for the coastal climate of Andhra Pradesh?",
    answer:
      "Absolutely. uPVC was designed for harsh outdoor environments. It is completely immune to salt-air corrosion, humidity, and moisture — which are major challenges along the Andhra Pradesh coastline. Unlike wooden frames (which swell and rot) or metal frames (which corrode), uPVC maintains its performance and appearance for decades without any special treatment.",
  },
  {
    question: "Do you offer mosquito mesh or insect screen options?",
    answer:
      "Yes! We offer integrated insect mesh (mosquito net) options for all our sliding and casement windows. The mesh frame fits neatly within the window frame and allows full airflow while keeping mosquitoes and insects out. This is especially popular for homes in coastal and green-belt areas across Andhra Pradesh.",
  },
  {
    question: "Can you make windows for atypical or non-standard opening sizes?",
    answer:
      "Custom sizing is our specialty. Since we manufacture in-house, we can fabricate uPVC windows to any dimension you need — including irregular shapes, arched tops, large picture windows, and bay configurations. There is no extra charge for custom sizes; we simply measure your opening and build to fit.",
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border last:border-none">
      <button
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-foreground">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden text-sm leading-relaxed text-muted-foreground transition-all duration-300 ${
          open ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {answer}
      </div>
    </div>
  )
}

export function FAQSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation(0.05)

  return (
    <section id="faq" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div ref={headerRef} className={`mx-auto max-w-2xl text-center ${headerVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-4 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">FAQ</span>
          </div>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="heading-accent-center" />
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Got questions about uPVC windows? We have answers. If you don&apos;t
            find what you&apos;re looking for, just WhatsApp or call us.
          </p>
        </div>

        <div
          ref={listRef}
          className={`mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-card px-6 shadow-sm ${
            listVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
