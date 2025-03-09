"use client"
import Image from "next/image"
import MotionTransition from "./transition-component"
import Link from "next/link"
import { socialNetworks } from "../data"

const headbar = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-0 inline-block w-full top-5 md:top-10 px-0">
          <header>
                <div className="container justify-between max-w-7xl mx-auto md:flex">
                    <div>
                      <Image src="/Logo.png" alt="Logo.png" width={200} height={100}/> 
                    </div>
                  <div className="flex items-center justify-center gap-7">
                    {socialNetworks.map(({logo,src,id}) => (
                        <Link key={id}
                        href={src}
                        target="_blank"
                        className="transition-all duration-300 hover:shadow-xl hover:shadow-blue-500 hover:scale-110 rounded-full"
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
 
export default headbar;