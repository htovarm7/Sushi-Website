"use client"
import MotionTransition from "./transition-component"
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link';

const Introduction = () => {
    return ( 
        <MotionTransition position="bottom" className="">
            <div className="bg-green-100 shadow-lg rounded-2xl p-6 w-64 text-center border border-green-200 fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 transition-all duration-300 hover:scale-110">
                <h2 className="text-xl font-bold text-green-800 hover:text-blue-800">Horarios</h2>
                <h3 className="text-l font-bold text-green-800 hover:text-blue-800">Lunes a Domingo</h3>
                <p className="text-green-600 mt-2 font-bold hover:text-blue-600">Apertura: <span className="font-semibold">{"12 pm"}</span></p>
                <p className="text-green-600 font-bold hover:text-blue-600">Clausura: <span className="font-semibold">{"9:30 pm"}</span></p>
            </div>
            <div className = 'z-20 w-full bg-darkBg/60'>
            <div className = 'z-20 grid items-center h-full p-10 py-20 md:py-0 md:grid-cols-2'>
                <div className="flex items-center justify-center h-screen">
                    <Image src="/Perodico.png" priority width="400" height="400" alt="Periodico Pic" className="rounded-lg transition-transform duration-300 hover:scale-110 shadow-lg"/>
                </div>
                
                <div className = "flex flex-col justify-center max-m-md">
                    <h1 className='mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10'>Servimos,<br/>
                        <TypeAnimation
                        sequence ={[
                            "sabor auténtico",
                            1500,
                            "ingredientes frescos",
                            1500,
                            "arte en cada bocado",
                            1500,
                            "una experiencia única",
                            1500
                        ]}
                        wrapper = "span"
                        speed = {50}
                        repeat = {Infinity}
                        className = "font-bold text-secondary"
                        />
                    </h1>

                    <p className='mx-auto mb-2 text-xl text-justify md:mx-0 md:mb-8'>
                    Desde 2011, nos hemos dedicado a ofrecer platillos de alta calidad en gastronomía japonesa, con especialidad en sushi en todas sus variedades y opciones.
                    Con el paso del tiempo, nos convertimos en la elección favorita de quienes buscan disfrutar de un sabor auténtico, calidad excepcional y precios accesibles.
                    Disfruta de nuestro servicio en comedor, pide para llevar o recibe tu pedido en la comodidad de tu hogar con entregas a domicilio, ya sea a través de nuestro personal o mediante plataformas como Rappi y DiDi.
                    </p>
                    <div>
                        <div className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50">
                            <Link href="https://wa.me/521XXXXXXXXXX">
                                <Image src="/WhatsApp.svg" alt="WhatsApp" width={64} height={64} className="w-16 h-16 transition-all duration-300 hover:shadow-[0px_4px_10px_rgba(198,209,9,1)] hover:scale-110 rounded-full" />
                            </Link>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-3 md:justify-center md:gap-10'>
                        <Link href ="https://www.didi-food.com/es-MX/food/store/5764607684574445644/Unagi-Sushi---Teppanyaki/?pl=eyJwb2lJZCI6IjI4ODIzMDM3NjE1ODUyNTIwOTciLCJkaXNwbGF5TmFtZSI6IkF2ZW5pZGEgSm9zw6kgw4FuZ2VsIENvbmNoZWxsbyAyMDgzIiwiYWRkcmVzcyI6IlByaXZhZGEgUGlub3MsIFZpY3RvcmlhLCA2NDU4MCBNb250ZXJyZXksIE4uTC4sIE3DqXhpY28iLCJsYXQiOjI1LjY4OTc5NTU1LCJsbmciOi0xMDAuMjk0NzU2ODYsInNyY1RhZyI6Im5ld2VzI2FjX21pbmluZ190b3RhbCIsInBvaVNyY1RhZyI6Im1hbnVhbF9zdWciLCJjb29yZGluYXRlVHlwZSI6Indnczg0IiwiY2l0eUlkIjo1MjE5MDUwMCwiY2l0eSI6Ik1vbnRlcnJleSIsInNlYXJjaElkIjoiMGEwZjE2Mzg2N2NkMDZhZTIyNTY0MmNkMWZjOTgyMDIiLCJhZGRyZXNzQWxsIjoiQXZlbmlkYSBKb3PDqSDDgW5nZWwgQ29uY2hlbGxvIDIwODMsIFByaXZhZGEgUGlub3MsIFZpY3RvcmlhLCA2NDU4MCBNb250ZXJyZXksIE4uTC4sIE3DqXhpY28iLCJhZGRyZXNzQWxsRGlzcGxheSI6IlByaXZhZGEgUGlub3MsIFZpY3RvcmlhLCA2NDU4MCBNb250ZXJyZXksIE4uTC4sIE3DqXhpY28iLCJjb3VudHJ5Q29kZSI6Ik1YIiwiY291bnRyeUlkIjo1MiwiZGlzdFN0ciI6Ijk5K2ttIiwiZGlzdCI6NzA4MDczLCJwb2lUeXBlIjoiUG9pbnQgQWRkcmVzcyIsImNvdW50eUlkIjo1MjE5MDUwNywiY291bnR5R3JvdXBJZCI6NTIxOTA1MDAwMDAxLCJhaWQiOiIifQ%3D%3D#" className = "px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:scale-110">
                            DiDi
                        </Link>
                        <Link href ="https://www.rappi.com.mx/restaurantes/1923209607-unagi" className = "px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:scale-110">
                            Rappi
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </MotionTransition>
     );
}
export default Introduction;