import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import BackToTop from "@/components/common/BackToTop";


const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Abu Bakar Siddique | Full Stack Developer",
  description: "Portfolio of Md Abu Bakar Siddique, a Full Stack Developer specializing in Next.js, TypeScript, and modern web technologies.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <BackToTop />
      </body>

    </html>
  );
}
