/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    // Conditionally apply client-only Webpack settings
    if (!isServer) {
      // Ignore fs module on client side to prevent Firebase SDK errors
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Set alias for undici
    config.resolve.alias = {
      ...config.resolve.alias,
      undici: false,
    };

    return config;
  },
};

module.exports = nextConfig;
