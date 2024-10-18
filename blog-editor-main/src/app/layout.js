import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Mobilenavbar from "@/components/Navbar/Mobilenavbar";
import Parallex from "@/components/Parallex";
import Head from "next/head";
import Link from "next/link";
import "aos/dist/aos.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "synesxi",
  description:
    "Unleash the Potential of Solana with Synesxi. Discover a comprehensive platform designed to empower individuals (Solana developer, Solana NFT investor), freelancers (Solana project manager, Solana marketing specialist), investors (VC investor in Solana projects, retail investor in Solana tokens), and businesses (B2B/B2C/D2C) within the Solana blockchain. Explore tokens, dApps, services, and investment opportunities tailored to your needs.",
  keywords:
    "Solana Blockchain Platform, Solana Ecosystem, Solana dApps, Solana Tokens, Solana Developers, Solana Investors, Solana Service Providers, Solana Marketplace, Web3, Cryptocurrency, DeFi, Blockchain Technology, Secure, Trusted, Vetted, Collaboration, Synesxi Synesxi ecosystem, Solana blockchain platform, Solana dApps marketplace, Solana blockchain services, Solana blockchain community, Solana blockchain solutions, Synesxi gateway, Metaverse, Solana blockchain developers, Solana blockchain traders, Solana blockchain investors, Mods, influencers, KOLs, Shillers, Marketers, Solana call channels",
};
export const viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full ">
      <Head>
        <Link rel="icon" href="/favicon.png" />
      </Head>
      <body
        className={`bg-black flex flex-col items-center justify-center relative overflow-x-hidden`}
      >
        <Parallex pos="top-0" />
        <Navbar />
        <Mobilenavbar />
        {children}
        <Parallex pos="bottom-0" />
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-KHC1TS8FTH" />
    </html>
  );
}