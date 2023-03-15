import React from 'react'
import { FirePitItems } from '../utils/enums'

export const FirePit = ({visuals}) => {

    return(
        <div id={FirePitItems.FirePit}>
            <div id={FirePitItems.LeftLog}>

            </div>
            <div id={FirePitItems.RightLog}>

            </div>
        </div>
    )
}