"use client"

import MotionTransition from "./transition-component"

const Introduction = () => {
    return ( 
        <MotionTransition position="bottom" className="absolute left-1/2 transform -translate-x-1/2 inline-block w-full top-5 md:top-10 px-0">
            <h1>asda</h1>
        </MotionTransition>
     );
}
export default Introduction;