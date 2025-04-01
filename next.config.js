/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Needed if using Next.js Image component
  },
};

module.exports = nextConfig;
