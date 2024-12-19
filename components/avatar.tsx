"use client"

import Image from "next/image";
import MotionTransition from "./transition-component";



const Avatar = () => {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute ">
            <Image src="/avatar-1.png" width="600" height="400"  className="w-full h-full " alt="Particles " />
        </MotionTransition>
    )
}
export default Avatar;