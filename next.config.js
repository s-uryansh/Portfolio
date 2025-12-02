/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Temporarily ignore build errors during production builds
    ignoreDuringBuilds: false,
  },
  // Add custom ESLint configuration
  experimental: {
    // Enable if needed
  }
}

module.exports = nextConfig