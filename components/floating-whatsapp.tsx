"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { PERSONAL_DATA } from "@/data";

const FloatingWhatsapp = () => {
  const whatsappUrl = `https://wa.me/${PERSONAL_DATA.contact.whatsapp}?text=Hola%20${encodeURIComponent(PERSONAL_DATA.name)},%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar.`;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center justify-center">
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center p-4 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        {/* Efecto de anillo de pulso */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 animate-ping pointer-events-none" />
        
        <FaWhatsapp size={28} className="relative z-10" />

        {/* Tooltip informativo al pasar el cursor */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#030014] text-xs font-medium text-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-emerald-500/30 shadow-lg pointer-events-none">
          ¿Hablamos por WhatsApp?
        </span>
      </Link>
    </div>
  );
};

export default FloatingWhatsapp;