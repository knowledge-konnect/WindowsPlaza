import { MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const areas = [
  "Gajuwaka",
  "Madhurawada",
  "MVP Colony",
  "Seethammadhara",
  "Bheemunipatnam",
  "Pendurthi",
  "Rushikonda",
  "Dwaraka Nagar",
  "Siripuram",
  "Asilmetta",
  "Lawsons Bay Colony",
  "Waltair",
]

export function ServiceAreaSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wider text-primary uppercase">
            Service Areas
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Serving Visakhapatnam & Surrounding Areas
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Windows Plaza proudly serves homeowners, builders, and businesses
            across Visakhapatnam and the wider Andhra Pradesh region. Whether
            you are in the heart of the city or in a neighbouring locality, our
            team is ready to help.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {areas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-shadow hover:shadow-sm"
            >
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              {area}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">
          Don&apos;t see your area listed? We cover all of Visakhapatnam
          district and can travel to nearby cities in Andhra Pradesh. Contact
          us to check availability in your location.
        </p>

        <div className="mt-8 text-center">
          <Button asChild size="lg">
            <Link href="#contact">
              Get Free Quote in Visakhapatnam Today
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
