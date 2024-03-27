/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'http.cat',
        port: '',
        pathname: '/*'
      }
    ]
  }
};

export default nextConfig;
