"use client"
import MotionTransition from "./transition-component"
import Image from 'next/image';
import Link from 'next/link';

const MenuInteractivo = () => {
    return ( 
        <MotionTransition position="bottom" className="">
            <div className="">
                <h1 className="">Rollos Tradicionales</h1>
                <h2 className="">Chicos</h2>
                <h3 className="">Es un rollo que contiene arroz al vapor por fuera con ajonjoli y por la parte interna lleva queso philadelphia, aguacate, y pepino además del marisco de su elección</h3>
                <div className="">
                    <p>Camarón</p>
                </div>
            </div>
        </MotionTransition>
     );
}
 
export default MenuInteractivo;