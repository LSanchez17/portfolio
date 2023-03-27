import React from 'react'
import { ResumeContainer } from '../utils/enums'

export const Resume = ({reset}) => {

    return(
        <div id={ResumeContainer.ResumeContainer}>
            <a href='LuisSanchezResume2023.pdf'>Resume Download</a>
            <button onClick={() => reset()}>Go Back</button>
        </div>
    )
}