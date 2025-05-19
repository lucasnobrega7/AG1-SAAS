import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/dashboard",
  assetPrefix: "/dashboard",
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: "https://agentesdeconversao.com.br",
  },
  images: {
    domains: ["agentesdeconversao.com.br", "www.agentesdeconversao.com.br"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
