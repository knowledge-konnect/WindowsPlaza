import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Windows Plaza privacy policy. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
        <Button asChild variant="ghost" size="sm" className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <h1 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: February 2026
        </p>

        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              1. Information We Collect
            </h2>
            <p>
              When you contact us through our website, request a quote, or use
              our services, we may collect personal information such as your
              name, email address, phone number, postal address, and details
              about your project requirements. We only collect information that
              is necessary to provide our services and communicate with you
              effectively.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information you provide to respond to enquiries,
              prepare quotes, schedule installations, provide after-sales
              support, and improve our services. We may also use your contact
              details to send you relevant updates about our products and
              services, but only with your consent.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              3. Data Protection
            </h2>
            <p>
              We take the security of your personal data seriously. We implement
              appropriate technical and organisational measures to protect your
              information against unauthorised access, alteration, disclosure, or
              destruction. Your data is stored securely and only accessible to
              authorised personnel.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              4. Third-Party Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share your data with trusted service providers who
              assist us in operating our website and conducting our business,
              provided they agree to keep your information confidential.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              5. Cookies
            </h2>
            <p>
              Our website may use cookies to enhance your browsing experience.
              Cookies are small files stored on your device that help us
              understand how visitors interact with our site. You can choose to
              disable cookies through your browser settings, though this may
              affect certain site functionality.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, correct, or request deletion of your
              personal data at any time. You may also withdraw consent for
              marketing communications. To exercise any of these rights, please
              contact us using the details provided on our website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              7. Contact Us
            </h2>
            <p>
              If you have any questions about this privacy policy or how we
              handle your personal information, please contact us at{" "}
              <a
                href="mailto:info@windowsplaza.in"
                className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
              >
                info@windowsplaza.in
              </a>{" "}
              or call us on{" "}
              <a
                href="tel:+919876543210"
                className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
              >
                +91-9876543210
              </a>
              . Our showroom is located at 47-11-19, Dwaraka Nagar, Main Road,
              Visakhapatnam, Andhra Pradesh 530016.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
