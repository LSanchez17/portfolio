import React from 'react'
import { ResumeContainer, MenuItems } from '../utils/enums'

export const Resume = ({reset}) => {

    return(
        <div id={ResumeContainer.ResumeContainer}>
            <a href='LuisSanchezResume2023.pdf'>Resume Download</a>
            <button onClick={() => reset(MenuItems.Resume)}>Go Back</button>
        </div>
    )
}