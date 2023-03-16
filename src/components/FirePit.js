import React from 'react'
import { FirePitItems } from '../utils/enums'

export const FirePit = ({visuals}) => {

    return(
        <div id={FirePitItems.FirePit}>
            <div id={FirePitItems.LeftLog}>

            </div>
            
            <div id={FirePitItems.RightLog}>

            </div>

            {/* <div id={FirePitItems.SmallFlame}>

            </div> */}
            <div id={FirePitItems.MediumFlame}>

            </div>

            <div id={FirePitItems.BigFlame}>

            </div>
        </div>
    )
}