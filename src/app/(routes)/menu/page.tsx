"use client"

import MotionTransition from "../../../../components/transition-component";
import TransitionPage from "../../../../components/transition-page"
import MenuInteractivo from "../../../../components/menu";

const Menu = () => {
    return ( 
        <main>
            <TransitionPage />
            <div className="flex min-h-[100vh] h-full">
                <MenuInteractivo />
            </div>
        </main>
     );
}
 
export default Menu;