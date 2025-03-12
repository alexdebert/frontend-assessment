import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    publicRuntimeConfig: {
        baseUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : null,
    },
};

export default nextConfig;
