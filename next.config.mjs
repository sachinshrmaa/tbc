/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Pages read content/*.md at runtime too (e.g. the register action), so
    // ship the folder with every serverless function.
    outputFileTracingIncludes: {
      "/**/*": ["./content/**/*"],
    },
  },
};

export default nextConfig;
