/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"
const BASE_PATH = isProd ? "/WindowsPlaza" : ""

const nextConfig = {
  output: "export",
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH ? BASE_PATH + "/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
