import React from 'react'
import { FirePitItems, UserMessages } from '../utils/enums'

export const FirePit = ({ visuals }) => {

    const message = (
        <h2 id={`${UserMessages.regularMessage}`}>
            Imagine a fire in the foreground!
        </h2>
    )

    const campFire = (
        <div id={FirePitItems.FirePit}>
            <div id={FirePitItems.LeftLog}>

            </div>

            <div id={FirePitItems.RightLog}>

            </div>

            <div>
                <svg id={FirePitItems.BigFlame} width="110px" height="90px" viewBox="0 0 30 42">
                    <path fill="red" stroke="##FFBF00" strokeWidth="1.5"
                        d="M15 3 Q16.5 6.8 25 18
       A12.8 12.8 0 1 1 5 18
       Q13.5 6.8 15 3z" />
                </svg>
            </div>
            
            <div>
                <svg id={FirePitItems.MediumFlame} width="100px" height="80px" viewBox="0 0 30 42">
                    <path fill="orange" stroke="##FFBF00" strokeWidth="1.5"
                        d="M15 3 Q16.5 6.8 25 18
       A12.8 12.8 0 1 1 5 18
       Q13.5 6.8 15 3z" />
                </svg>
            </div>

            <div>
                <svg id={FirePitItems.SmallFlameShootLeft} width="10px" height="10px" viewBox="0 0 2 100">
                    <circle fill='#e25222' cy='50' r='50' />
                </svg>
                <svg id={FirePitItems.SmallFlameShoottRight} width="10px" height="10px" viewBox="0 0 2 100">
                    <circle fill='#e25222' cy='50' r='50' />
                </svg>
                <svg id={FirePitItems.SmallFlameShootUpward} width="10px" height="10px" viewBox="0 0 2 100">
                    <circle fill='#e25222' cy='50' r='50' />
                </svg>
            </div>
        </div>
    )

    const visualRendering = visuals ? (campFire) : (message);

    return (
        <>
            {visualRendering}
        </>
    )
}