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
        destination: "/od-consulting/diversity-inclusion",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
