import type { Metadata } from "next";
import { Urbanist, Roboto_Mono } from "next/font/google";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import { BackgroundAnime } from "@/components/background-anime";
import FloatingWhatsapp from "@/components/floating-whatsapp";

const urbanist = Urbanist({
  variable: "--font-urbanist-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luis Soto | Desarrollador Web & Ingeniero de Sistemas",
  description: "Portafolio premium de Luis Soto. Especialista en crear soluciones digitales modernas, funcionales y escalables para negocios y personas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${urbanist.variable} ${robotoMono.variable} font-sans bg-[#030014] text-white antialiased selection:bg-cyan-500/30 selection:text-cyan-200`}>
        
        {/* Fondo animado premium */}
        <BackgroundAnime />
        
        {/* Elementos de UI globales */}
        <Header />
        <Navbar />
        
        {/* Contenido principal por encima del fondo */}
        <main className="relative z-10">
          {children}
        </main>
        
        {/* Botón flotante para conversiones y contacto directo */}
        <FloatingWhatsapp />

      </body>
    </html>
  );
}