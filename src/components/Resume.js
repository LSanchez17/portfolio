import React from 'react'
import { MenuItems } from '../utils/enums'

export const Resume = ({reset}) => {

    return(
        <div id={MenuItems.Resume}>
            <h2>Resume</h2>

            <button onClick={() => reset()}>Go Back</button>
        </div>
    )
}