import  MotionTransition from "./transition-component";
import Link from "next/link";
import { socialNetworks } from "@/data";


const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute <-40 inline-block w-full top-5 md:top-10 px-20">
            <header>
                <div className="container justify-between mas-w-6xl mx-auto md:flex">
                <Link href="/">
                <h1 className="my-3 text-4xl font-bold text-center md-text-left">
                    Luis{" "}Soto 
                    {/* <span className="text-secondary">
                        soto
                    </span> */}
                    </h1>
                </Link>
                <div className="flex items-center justify-center gap-7">
                {socialNetworks.map(({logo, src, id}) => (
                    <Link key={id}
                    href={src}
                    target="_blanck"
                    className="transition-all duration-300 hover:text-secondary"
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