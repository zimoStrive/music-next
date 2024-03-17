import type { Metadata } from "next";
import { Provider } from "react-redux";
import { wrapper } from "@/store/index";
// import store from "@/store/index";

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
  const { store } = wrapper.useWrappedStore();
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <NavBar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
