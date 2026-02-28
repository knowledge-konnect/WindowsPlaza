import { ImageResponse } from "next/og"

export const dynamic = "force-static"
export const alt = "Windows Plaza – uPVC Windows Manufacturer in Andhra Pradesh"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #1d4ed8 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "64px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative circle top-right */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(37, 99, 235, 0.18)",
          }}
        />
        {/* Decorative circle bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(37, 99, 235, 0.12)",
          }}
        />

        {/* Brand badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "rgba(37, 99, 235, 0.25)",
            border: "1.5px solid rgba(96, 165, 250, 0.4)",
            borderRadius: 40,
            padding: "8px 20px",
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#60a5fa",
            }}
          />
          <span style={{ color: "#93c5fd", fontSize: 20, fontWeight: 600, letterSpacing: 1 }}>
            DIRECT MANUFACTURER · ANDHRA PRADESH
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            color: "#ffffff",
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 28,
            maxWidth: 860,
          }}
        >
          <span style={{ color: "#ffffff" }}>Premium uPVC Windows&nbsp;</span>
          <span style={{ color: "#60a5fa" }}>Direct from Factory</span>
        </div>

        {/* Feature pills */}
        <div style={{ display: "flex", gap: 16, marginBottom: 52 }}>
          {["Soundproof", "Dust Resistant", "Energy Efficient", "Lifetime Frame Warranty"].map(
            (feat) => (
              <div
                key={feat}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 8,
                  padding: "6px 16px",
                  color: "#e2e8f0",
                  fontSize: 18,
                }}
              >
                {feat}
              </div>
            )
          )}
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 40,
          }}
        >
          <div
            style={{
              background: "#2563eb",
              borderRadius: 12,
              padding: "12px 32px",
              color: "#fff",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            Free Site Measurement
          </div>
          <span style={{ color: "#94a3b8", fontSize: 20 }}>
            📞 +91-8341166268
          </span>
          <span style={{ color: "#94a3b8", fontSize: 20 }}>
            windowsplaza.in
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
