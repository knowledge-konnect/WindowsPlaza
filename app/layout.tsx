import type { Metadata, Viewport } from 'next'
import { Poppins, Inter, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-poppins" });
const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });

const SITE_URL = "https://www.windowsplaza.in"

export const metadata: Metadata = {
  title: {
    default: 'Windows Plaza | Premium uPVC & Aluminium Windows and Doors',
    template: '%s | Windows Plaza',
  },
  description: 'Windows Plaza delivers premium uPVC and Aluminium Windows & Doors across India. Expert craftsmanship, energy-efficient solutions, 10-year warranty, and professional installation.',
  keywords: [
    'uPVC windows India',
    'aluminium doors India',
    'premium uPVC windows',
    'aluminium sliding doors',
    'uPVC casement windows',
    'French doors India',
    'double glazed windows',
    'energy efficient windows',
    'window installation India',
    'aluminium windows supplier',
    'uPVC doors supplier',
    'windows plaza',
    'premium windows and doors',
    'soundproof windows',
    'weatherproof windows India',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Windows Plaza | Premium uPVC & Aluminium Windows and Doors',
    description: 'Windows Plaza delivers premium uPVC and Aluminium Windows & Doors across India. Expert craftsmanship, energy-efficient solutions, and 10-year warranty.',
    url: SITE_URL,
    siteName: 'Windows Plaza',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Windows Plaza | Premium uPVC & Aluminium Windows and Doors',
    description: 'Premium uPVC and Aluminium Windows & Doors across India. Expert installation, energy-efficient designs, and 10-year warranty.',
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
  name: "Windows Plaza",
  description: "Windows Plaza is a premium supplier and installer of uPVC and Aluminium Windows & Doors across India. Known for quality craftsmanship, energy-efficient solutions, and professional installation.",
  url: SITE_URL,
  telephone: "+91-9876543210",
  email: "info@windowsplaza.in",
  image: `${SITE_URL}/images/hero-windows.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
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
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Windows & Doors",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "uPVC Casement Windows" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Aluminium Sliding Doors" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Sliding Windows" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "French Doors" } },
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
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${_poppins.variable} ${_inter.variable} ${_openSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
