"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PERSONAL_DATA } from "@/data";
import { Code2, ArrowRight } from "lucide-react";

const Introduction = () => {
    return (
        <section id="inicio" className="z-10 w-full min-h-screen flex items-center justify-center pt-24 pb-12 md:py-0">
            <div className="container max-w-6xl mx-auto px-6 grid items-center gap-8 md:grid-cols-2">
                {/* Lado Izquierdo: Avatar / Imagen de Impacto */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex justify-center relative group order-2 md:order-1"
                >
                    {/* Anillo de resplandor trasero */}
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000"></div>
                    
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.2)] bg-[#0a0a16]">
                        <Image
                            src="/home-4.png" // Cambia la ruta a tu imagen/avatar de preferencia dentro de public/
                            alt={PERSONAL_DATA.name}
                            fill
                            priority
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </motion.div>

                {/* Lado Derecho: Titular y CTAs */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col justify-center text-center md:text-left order-1 md:order-2"
                >
                    <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2">
                        {PERSONAL_DATA.role}
                    </span>

                    <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white">
                        Construyendo <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                            experiencias digitales
                        </span> <br />
                        de alto nivel
                    </h1>

                    <p className="mb-8 text-sm sm:text-base text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        {PERSONAL_DATA.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                        <Link
                            href="#portfolio"
                            className="px-6 py-3.5 transition-all duration-300 border border-cyan-500/40 rounded-xl text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2 font-medium text-sm sm:text-base backdrop-blur-sm"
                        >
                            <Code2 size={18} />
                            Ver Proyectos
                        </Link>
                        
                        <Link
                            href={`https://api.whatsapp.com/send?phone=${PERSONAL_DATA.contact.whatsapp}&text=Hola%20Luis,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3.5 transition-all duration-300 rounded-xl text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:scale-105 flex items-center gap-2 font-medium text-sm sm:text-base"
                        >
                            Contactar
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Introduction;