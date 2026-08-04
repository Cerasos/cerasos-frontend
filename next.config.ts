import path from "path";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // a stray lockfile above this directory makes Next infer the wrong root
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
