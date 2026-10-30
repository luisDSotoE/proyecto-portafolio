"use client";

import { useState } from "react";
import TransitionPage from "@/components/transition-page";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Send, ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";

import { 
  serviceData, 
  dataPortfolio, 
  dataAboutPage, 
  dataTestimonials, 
  dataCounter,
  PERSONAL_DATA 
} from "@/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

// Componente modificado usando <img> nativo y la API de WordPress
function PortfolioImage({ urlDemo, title }: { urlDemo: string; title: string }) {
  const [hasError, setHasError] = useState(false);

  // Usamos el servicio de mshots de WordPress, que es gratuito y no requiere llaves
  const screenshotUrl = `https://s0.wp.com/mshots/v1/${encodeURIComponent(urlDemo)}?w=800`;

  if (hasError) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-purple-900/40 to-[#030014] flex flex-col items-center justify-center p-6 text-center border-b border-white/10">
        <div className="p-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-2">
          <Code2 size={28} />
        </div>
        <span className="text-sm font-semibold text-gray-200">{title}</span>
        <span className="text-xs text-gray-400 mt-1">Vista previa no disponible</span>
      </div>
    );
  }

  return (
    /* Usamos <img> nativo para evitar los bloqueos estrictos de next/image con URLs externas */
    <img 
      src={screenshotUrl} 
      alt={title}
      onError={() => setHasError(true)}
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
    />
  );
}

export default function Home() {
  const whatsappUrl = `https://wa.me/${PERSONAL_DATA.contact.whatsapp}?text=Hola%20${encodeURIComponent(PERSONAL_DATA.name)},%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar.`;

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      <TransitionPage />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. HERO SECTION */}
        <section id="inicio" className="min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="max-w-4xl flex flex-col items-center"
          >
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              {PERSONAL_DATA.role}
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Soluciones digitales <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Premium</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              {PERSONAL_DATA.description}
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#portfolio" className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105">
                Ver proyectos <ArrowRight size={20} />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 font-semibold text-white hover:scale-105">
                <Send size={20} /> Contactar ahora
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* 2. ESTADÍSTICAS / COUNTERS */}
        <section className="py-12 border-y border-white/10 my-12 backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {dataCounter.map((item) => (
              <motion.div 
                key={item.id}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className={`text-center ${item.lineRight ? 'md:border-r border-white/10' : ''}`}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">+{item.endCounter}</h3>
                <p className="text-gray-400 text-sm md:text-base">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. SERVICIOS */}
        <section id="services" className="py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Mis <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Servicios</span></h2>
            <p className="text-gray-400">Ingeniería y diseño aplicados a tus necesidades</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.map((service, index) => (
              <motion.div 
                key={index}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-cyan-500/40 hover:bg-white/[0.08] transition-all duration-300 group"
              >
                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. PORTAFOLIO */}
        <section id="portfolio" className="py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Proyectos <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Destacados</span></h2>
            <p className="text-gray-400">Trabajos recientes que demuestran mis capacidades</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dataPortfolio.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden group flex flex-col hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-500"
              >
                <a href={item.urlDemo} target="_blank" rel="noreferrer" className="relative h-56 w-full overflow-hidden bg-[#0a0a16] block cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent z-10 opacity-80 pointer-events-none"></div>
                  
                  {/* COMPONENTE ACTUALIZADO QUE RECIBE DIRECTAMENTE EL URL Y USA MSHOTS */}
                  <PortfolioImage 
                    urlDemo={item.urlDemo} 
                    title={item.title} 
                  />
                  
                </a>
                
                <div className="p-6 flex-1 flex flex-col relative z-20 -mt-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400 mb-4 flex-1 text-sm">{item.description}</p>

                  {/* Badges de Tecnologías */}
                  {item.tech && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tech.map((t, idx) => (
                        <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <a href={item.urlDemo} target="_blank" rel="noreferrer" className="w-full bg-white/10 hover:bg-cyan-500 text-white font-medium py-2.5 rounded-xl text-center text-sm transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 hover:border-cyan-400">
                      <ExternalLink size={16} /> Ver Web
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. TRAYECTORIA / EDUCACIÓN */}
        <section id="about-me" className="py-24 max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Sobre <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Mí</span></h2>
            <p className="text-gray-400">Mi formación y conocimientos técnicos</p>
          </motion.div>

          <div className="relative border-l border-white/10 ml-3 md:ml-6">
            {dataAboutPage.map((item) => (
              <motion.div 
                key={item.id}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="mb-12 ml-8 relative"
              >
                <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4] ring-4 ring-[#030014]" />
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300">
                  <span className="text-cyan-400 text-sm font-bold tracking-wider mb-2 block">{item.date}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <h4 className="text-gray-300 font-medium mb-4">{item.subtitle}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. TESTIMONIOS */}
        <section id="testimonials" className="py-24 mb-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Lo que dicen <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">mis clientes</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataTestimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 relative hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="text-cyan-500/20 absolute top-4 right-6 text-6xl font-serif select-none">"</div>
                <p className="text-gray-300 italic mb-6 relative z-10 text-sm sm:text-base">"{testimonial.description}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden relative border border-cyan-500/30">
                    <Image 
                      src={testimonial.imageUrl} 
                      alt={testimonial.name} 
                      fill 
                      sizes="48px"
                      className="object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}