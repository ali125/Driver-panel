import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Allura } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import "./globals.css";
import FavIcon from "@/public/images/favicon.png";
import NextTopLoader from "nextjs-toploader";
import fa_IR from "antd/lib/locale/fa_IR";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "کافه رنت",
  description: "",
  icons: [{ rel: "icon", url: FavIcon.src }],
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};
const allura = Allura({
  subsets: ["latin"],
  adjustFontFallback: false,
  variable: "--font-allura",
  weight: "400",
});
const yekanBakh = localFont({
  src: [
    { path: "../../public/fonts/YekanBakh-Regular.woff2", weight: "400" },
    { path: "../../public/fonts/YekanBakh-Bold.woff2", weight: "700" },
  ],
  variable: "--font-yekanBakh",
  adjustFontFallback: false,
});
const yekanBakhEn = localFont({
  src: [
    { path: "../../public/fonts/YekanBakhNoEn-Regular.woff2", weight: "400" },
    { path: "../../public/fonts/YekanBakhNoEn-Bold.woff2", weight: "700" },
  ],
  variable: "--font-yekanBakhEn",
  adjustFontFallback: false,
});

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html
    className={`${allura.variable} ${yekanBakh.variable} ${yekanBakh.className} ${yekanBakhEn.variable}`}
    lang="fa"
    dir="rtl"
  >
    <body className="min-h-svh">
      <NextTopLoader showSpinner={false} />
      <Toaster />
      <AntdRegistry>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "inherit",
              colorPrimary: "#1890FF",
              colorText: "#141414",
            },
            components: {
              Pagination: {
                itemBg: "transparent",
                itemActiveBg: "#000",
                fontFamily: "YekanBakh-Regular",
              },
              Table: {
                headerBg: "transparent",
              },
              Button: {
                fontWeight: "bold",
                borderRadius: 8,
              },
            },
          }}
          locale={fa_IR}
          direction="rtl"
        >
          {children}
        </ConfigProvider>
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
