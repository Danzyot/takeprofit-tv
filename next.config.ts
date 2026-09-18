import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Never let another site embed us in an iframe (clickjacking).
          { key: "X-Frame-Options", value: "DENY" },
          // Browsers must respect our content types, no MIME sniffing.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Don't leak full URLs to the firms we link out to.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // We never use any of these browser capabilities.
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
