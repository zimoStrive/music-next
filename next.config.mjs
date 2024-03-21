/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        // hostname: "p4.music.126.net", // 匹配指定路由
        // hostname: "*.music.126.net", // 匹配单个路径段或子域
        hostname: "**.music.126.net", // 匹配末尾任意数量的路径段或开头的子域
      },
      {
        protocol: "https",
        hostname: "**.music.126.net", // 匹配末尾任意数量的路径段或开头的子域
      },
    ],
  },
};

export default nextConfig;
