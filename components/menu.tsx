"use client"
import MotionTransition from "./transition-component"
import Image from 'next/image';
import Link from 'next/link';

const MenuInteractivo = () => {
    return ( 
        <MotionTransition position="bottom" className="">
            <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
                <Link href="https://wa.me/521XXXXXXXXXX">
                    <Image src="/WhatsApp.svg" alt="WhatsApp" width={64} height={64} className="w-16 h-16 transition-all duration-300 hover:shadow-[0px_4px_10px_rgba(198,209,9,1)] hover:scale-110 rounded-full" />
                </Link>
            </div>    
        </MotionTransition>
     );
}
 
export default MenuInteractivo;