import MotionTransition from "./transition-component";
import Link from "next/link";
import { socialNetworks } from "@/data";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10 px-20">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex items-center">
                    <Link href="/">
                        <h1 className="my-3 text-4xl font-bold text-center md:text-left transition-transform hover:scale-105">
                            Luis <span className="text-cyan-400">Soto</span>
                        </h1>
                    </Link>
                    
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link 
                                key={id}
                                href={src}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all duration-300 hover:text-cyan-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] rounded-full"
                            >
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;