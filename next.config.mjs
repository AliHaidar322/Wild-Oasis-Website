/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fbihqqgcntntfwqftqci.supabase.co',
        port: '',
        pathname: '/storage/v1/object/sign/cabins/**',
      },
    ],
  },
};

export default nextConfig;
