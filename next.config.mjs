/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    images:{
        loader:"custom",
        loaderFile:"./loader.js",
        remotePatterns:[
            {
                protocol: 'https',
                hostname:"images.pexels.com",
                
                
            },
            {
                protocol: 'https',
                hostname:"i.pinimg.com"
            },
            {
                protocol: 'https',
                hostname:"avatars.githubusercontent.com"
            }
        ]
    }
};

export default nextConfig;
