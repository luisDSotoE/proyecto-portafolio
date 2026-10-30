"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function BackgroundAnime() {
  const containerRef = useRef<HTMLDivElement>(null);

  // useGSAP es el hook oficial que reemplaza a useEffect para animaciones
  useGSAP(() => {
    const elements = gsap.utils.toArray('.orb');
    
    elements.forEach((el: any) => {
      gsap.to(el, {
        x: () => gsap.utils.random(-300, 300),
        y: () => gsap.utils.random(-300, 300),
        scale: () => gsap.utils.random(0.5, 1.5),
        duration: () => gsap.utils.random(5, 10),
        ease: 'sine.inOut',
        yoyo: true, // Hace que la animación vaya y venga (como el 'alternate' de anime.js)
        repeat: -1, // Loop infinito
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed inset-0 z-[-1] overflow-hidden bg-[#030014]">
      <div className="orb absolute top-[20%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-purple-600/20 blur-[120px] mix-blend-screen" />
      <div className="orb absolute top-[50%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-cyan-600/20 blur-[120px] mix-blend-screen" />
      <div className="orb absolute bottom-[-10%] left-[30%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen" />
      <div className="absolute inset-0 opacity-20 mix-blend-overlay"></div>
    </div>
  );
}