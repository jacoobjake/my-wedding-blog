/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                // Home is default landing page
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ]
    }
}

module.exports = nextConfig
