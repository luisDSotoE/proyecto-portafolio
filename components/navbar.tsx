"use client";

import { itemsNavbar } from "@/data";
import MotionTransition from "./transition-component";

export default function Navbar() {
  return (
    <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
          {itemsNavbar.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="p-2 transition-all duration-300 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 group relative"
              aria-label={item.title}
            >
              {item.icon}
              {/* Tooltip con nombre de sección */}
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-[#030014] text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 whitespace-nowrap pointer-events-none">
                {item.title}
              </span>
            </a>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
}