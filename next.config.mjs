/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [320, 640, 960, 1200, 1400],
    imageSizes: [200, 542, 787, 986, 1220, 1374],
    domains: [],
  },
};

export default nextConfig;
