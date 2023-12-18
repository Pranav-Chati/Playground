/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost:8000/api",
        port: "",
        pathname: "/content/**",
      },
    ],
  },
};

module.exports = nextConfig;
