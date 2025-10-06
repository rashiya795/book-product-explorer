import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   devIndicators: {
    buildActivity: false, // disables the round loading indicator in dev mode
  },
};

export default nextConfig;
