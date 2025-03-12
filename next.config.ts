import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    publicRuntimeConfig: {
        baseUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : null,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dummyimage.com',
            },
        ],
    },
};

export default nextConfig;
