import React from 'react'
import { ProjectContainer, MenuItems } from '../utils/enums'

export const Projects = ({reset}) => {

    return(
        <div id={ProjectContainer.ProjectContainer}>
            <ul>
                <li><a src='https://www.darbe.co'></a>Darbe</li>
            </ul>
            <button onClick={() => reset(MenuItems.Projects)}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg></button>
        </div>
    )
}