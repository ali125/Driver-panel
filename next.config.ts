import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/panel",
        permanent: true,
      },
      {
        source: "/panel",
        destination: "/panel/contract-list/person_pickup",
        permanent: true,
      },
      {
        source: "/panel/contract-list",
        destination: "/panel/contract-list/person_pickup",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
