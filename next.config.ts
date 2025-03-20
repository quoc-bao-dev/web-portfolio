import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    distDir: 'build',
    output: 'standalone',
    /* config options here */
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
