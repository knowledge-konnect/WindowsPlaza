import type { Metadata, Viewport } from 'next'
import { Poppins, Open_Sans } from 'next/font/google'
import { LeadModalProvider } from '@/components/lead-modal-provider'
import { BUSINESS_INFO } from '@/lib/constants/business'
import './globals.css'

const _poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-poppins" });
const _openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });

const SITE_URL = "https://www.windowsplaza.in"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.windowsplaza.in"),
  title: {
    default: 'Windows Plaza | uPVC Windows Manufacturer in Visakhapatnam',
    template: '%s | Windows Plaza Vizag',
  },
  description: 'Windows Plaza – Direct uPVC windows manufacturer in Visakhapatnam (Vizag). Sliding windows, casement windows, tilt & turn windows. Free site measurement, custom sizes, professional installation. A Unit of SP Builders and Traders (GST Registered).',
  keywords: [
    'uPVC windows Visakhapatnam',
    'uPVC windows Vizag',
    'sliding windows Vizag',
    'casement windows Visakhapatnam',
    'uPVC windows manufacturer Vizag',
    'uPVC window installation Visakhapatnam',
    'windows plaza Visakhapatnam',
    'soundproof windows Vizag',
    'dust resistant windows Visakhapatnam',
    'energy efficient windows Vizag',
    'tilt and turn windows Vizag',
    'uPVC windows price Visakhapatnam',
    'custom uPVC windows Vizag',
    'SP Builders and Traders',
    'windows Andhra Pradesh',
    'Madhurawada uPVC windows',
    'Bheemili windows',
    'Anandapuram uPVC',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Windows Plaza | uPVC Windows Manufacturer in Visakhapatnam',
    description: 'Direct uPVC windows manufacturer in Visakhapatnam. Premium sliding, casement & tilt-turn windows. Free site visit. A Unit of SP Builders and Traders (GST Registered).',
    url: SITE_URL,
    siteName: 'Windows Plaza',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Windows Plaza | uPVC Windows Manufacturer in Visakhapatnam',
    description: 'Direct uPVC windows manufacturer in Visakhapatnam. Free site measurement & custom sizes. Call now for factory pricing.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: BUSINESS_INFO.brandName,
  legalName: BUSINESS_INFO.parentCompany,
  description: BUSINESS_INFO.description,
  url: SITE_URL,
  telephone: BUSINESS_INFO.phoneNumber,
  email: BUSINESS_INFO.email,
  image: `${SITE_URL}/images/hero-windows.jpg`,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rajula Tallavalasa, Near Thirumala College, Bheemunipatnam",
    addressLocality: BUSINESS_INFO.location.city,
    addressRegion: BUSINESS_INFO.location.state,
    postalCode: "531162",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.6868,
    longitude: 83.2185,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Visakhapatnam" },
    { "@type": "City", name: "Bheemili" },
    { "@type": "City", name: "Madhurawada" },
    { "@type": "City", name: "Anandapuram" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "uPVC Windows",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "uPVC Sliding Windows" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "uPVC Casement Windows" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "uPVC Tilt & Turn Windows" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Fixed Glass & Vents" } },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.svg`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${_poppins.variable} ${_openSans.variable} font-sans antialiased`}>
        <LeadModalProvider>
          {children}
        </LeadModalProvider>
      </body>
    </html>
  )
}
