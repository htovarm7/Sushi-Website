"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { itemsNavbar } from "../data";
import MotionTransition from "./transition-component";
import { useEffect, useState } from "react";

const NavBar = () => {
    const router = usePathname();
    const [key, setKey] = useState(0);

    useEffect(() => {
        setKey(prevKey => prevKey + 1);
    }, [router]);

    return ( 
        <MotionTransition key={key} position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white background-blur-sa">
                {itemsNavbar.map((item) => (
                    <div key={item.id}
                    className={`px-3 py-2 transition duration-150 
                        rounded-full cursor-pointer hover:bg-green-100
                        ${router === item.link && 'bg-secondary'}`}
                            >
                            <Link href={item.link}>{item.text}</Link>
                    </div>
                ))}
                </div>
            </nav>
        </MotionTransition>
    );
}
 
export default NavBar;