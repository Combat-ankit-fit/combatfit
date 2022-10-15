/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/',
            'firebasestorage.googleapis.com',
        ],
    },
};

module.exports = nextConfig;
