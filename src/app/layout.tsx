import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Figtree } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { CtaButtons } from "@/components/cta-buttons";
import InViewObserver from "@/components/helper/InViewObserver";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/helper/theme-provider";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${figtree.className} no-scrollbar relative h-full antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          <div className="mt-28">
            <InViewObserver />
            {children}
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
