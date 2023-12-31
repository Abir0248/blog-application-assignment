/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["roar.media"],
  },

  distDir: "build",

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
