import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const SITE_URL = "https://www.windowsplaza.in"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
