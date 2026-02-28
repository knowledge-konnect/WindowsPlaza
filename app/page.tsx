import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ProductsSection } from "@/components/products-section"
import { AboutSection } from "@/components/about-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col pb-16 lg:pb-0">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md transition-all"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" role="main">
        <HeroSection />
        <WhyChooseUsSection />
        <ProductsSection />
        <AboutSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

