import React from 'react'
import { ProjectContainer } from '../utils/enums'

export const Projects = ({reset}) => {

    return(
        <div id={ProjectContainer.ProjectContainer}>
            <ul>
                <li>Darbe</li>
                <li>Animarius</li>
            </ul>
            
            <button onClick={() => reset()}>Go Back</button>
        </div>
    )
}