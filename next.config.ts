import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: false,
  transpilePackages: ["next-mdx-remote"],
  async redirects() {
    return [
      {
        source: "/r/:path([^.]*)",
        destination: "/r/:path.json",
        permanent: true,
      },
    ];
  },
  outputFileTracingIncludes: {
    "/*": ["./src/registry/**/*"],
  },
};

export default nextConfig;
