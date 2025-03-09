"use client"

import Image from "next/image"
import MotionTransition from "./transition-component"
import Link from "next/link"
import { socialNetworks } from "../data"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const headbar = () => {
    const router = usePathname();
    const [key, setKey] = useState(0);

    useEffect(() => {
        setKey(prevKey => prevKey + 1);
    }, [router]);

    return (
        <MotionTransition key={key} position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10 px-20">
          <header>
                <div className = "container justify-between max-w-6xl mx-auto md:flex">
                    <Image src="/Logo.png" alt = "Logo.png" width={200} height={100}/> 
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({logo,src,id}) => (
                            <Link key={id}
                            href={src}
                            target ="_blank"
                            className="transition-all duration-300 hover:shadow-xl hover:shadow-pink-200 hover:scale-110 rounded-full">
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
          
        </MotionTransition>
      );
}
 
export default headbar;