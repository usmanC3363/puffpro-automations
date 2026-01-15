import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import localFont from "next/font/local";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { CtaButtons } from "@/components/cta-buttons";
import InViewObserver from "@/components/helper/InViewObserver";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/helper/theme-provider";
import LenisWrapper from "@/components/helper/lenis-wrapper";

const aeonik = localFont({
  variable: "--font-aeonik",
  fallback: ["system-ui", "sans-serif"],
  src: [
    {
      path: "../../public/fonts/aeonik/Aeonik-Air.woff2",
      weight: "100",
      // style: "thin",
    },
    // {
    //   path: "../../public/fonts/aeonik/Aeonik-Thin.woff2",
    //   weight: "200",
    //   // style: "light",
    // },
    {
      path: "../../public/fonts/aeonik/Aeonik-Light.woff2",
      weight: "300",
      // style: "extralight",
    },
    {
      path: "../../public/fonts/aeonik/Aeonik-Regular.woff2",
      weight: "400",
      // style: "normal",
    },
    {
      path: "../../public/fonts/aeonik/Aeonik-Medium.woff2",
      weight: "500",
      // style: "medium",
    },
    {
      path: "../../public/fonts/aeonik/Aeonik-Bold.woff2",
      weight: "600",
      // style: "bold",
    },
    {
      path: "../../public/fonts/aeonik/Aeonik-Black.woff2",
      weight: "700",
      // style: "black",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar" suppressHydrationWarning>
      <body className={`${aeonik.className}`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          <div className="mt-28">
            <InViewObserver />
            <LenisWrapper>{children}</LenisWrapper>
            <Toaster />
          </div>
          <Footer />
          <PrismicPreview repositoryName={repositoryName} />
          <CtaButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
