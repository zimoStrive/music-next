// app layout 文件
import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import StoreProvider from "./StoreProvider";

// layout 组件
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

// 全局样式
import "normalize.css";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "云音乐商城-音乐购有趣",
  description:
    "云音乐商城是专注于音乐场景打造的音乐购物平台，包含音乐人周边、3c影音数码、音乐市集等，和我们一起让音乐购有趣，给生活加点料",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <StoreProvider>
            <NavBar />
            {children}
            <Footer />
          </StoreProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
