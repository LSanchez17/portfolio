import React from 'react'
import { MenuItems } from '../utils/enums'

export const Projects = ({reset}) => {

    return(
        <div id={MenuItems.Projects}>
            <ul>
                <li>Project #1</li>
                <li>Project #2</li>
                <li>Project #3</li>
            </ul>
            
            <button onClick={() => reset()}>Go Back</button>
        </div>
    )
}