"use client"

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className='z-20 w-full bg-darkBg/60'>
            <div className='z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2'>
                <Image src="/home-4.png" priority width="600" height="600" alt="Avatar" />

                <div className='flex flex-col justify-center max-w-md'>
                    <h1 className='mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10'>Programar es,
                        <TypeAnimation 
                            sequence={[
                                "Imaginar",
                                1000,
                                "plantear",
                                1000,
                                "Diseñar",
                                1000,
                                "Desarrollar",
                                1000 
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className='block font-bold text-secondary'
                        />
                    </h1>
                    <p className='mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8'>
                        Como ingeniero de sistemas, diseño y desarrollo aplicaciones de escritorio, web y móviles 
                        adaptadas a las necesidades y requisitos específicos de los usuarios,
                        garantizando soluciones eficientes y personalizadas.
                    </p>
                    <div className='flex items-center justify-center gap-3 md:justify-start md:gap-10'>
                        <a
                         href="/portfolio" 
                         className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                         Ver proyectos
                        </a>
                        <a
                         href="https://mail.google.com/mail/?view=cm&fs=1&to=ldsoto@unicesar.edu.co" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/50">
                         Contacta conmigo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Introduction;
