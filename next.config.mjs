/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    return [
      {
        source: "/od-consulting/family-businesses",
        destination: "/od-consulting/family-bussinesses",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/business-od",
        destination: "/od-consulting/business-od",
        permanent: true,
      },
      {
        source: "/diversity-inclusion",
        destination: "/od-consulting/diversity-and-inclusion",
        permanent: true,
      },
      {
        source: "/od-consulting/diversity-inclusion",
        destination: "/od-consulting/diversity-and-inclusion",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
