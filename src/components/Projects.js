import React from 'react'
import { ProjectContainer, MenuItems } from '../utils/enums'

export const Projects = ({reset}) => {

    return(
        <div id={ProjectContainer.ProjectContainer}>
            <ul>
                <li>Darbe</li>
                <li>Animarius</li>
            </ul>
            
            <button onClick={() => reset(MenuItems.Projects)}>Go Back</button>
        </div>
    )
}