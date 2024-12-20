import type { Metadata } from "next";
import { Urbanist, Roboto_Mono, } from "next/font/google";

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({
  variable: "--font-urbanist-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio de Ldsoto",
  description: "El mas fuerte",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${robotoMono.variable} antialiased`}>
          <Navbar />
          <Header/>
        {children}
      </body>
    </html>
  );
}
