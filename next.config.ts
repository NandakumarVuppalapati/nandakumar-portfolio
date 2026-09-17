import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the dev-only route indicator badge; build/runtime errors still surface.
  devIndicators: false,
  images: {
    // Next 16 restricts next/image's `quality` prop to an explicit allowlist
    // (defaulting to [75] otherwise); the hero photo needs 95 to avoid
    // visible compression softness versus the source PNG.
    qualities: [75, 95],
  },
};

export default nextConfig;
