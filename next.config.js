/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "https://unsplash.com/",
            },
        ],
    },
};

module.exports = nextConfig;
