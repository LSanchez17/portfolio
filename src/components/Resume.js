import React from 'react'
import { ResumeContainer, MenuItems } from '../utils/enums'

export const Resume = ({reset}) => {

    return(
        <div id={ResumeContainer.ResumeContainer}>
            <a href='LuisSanchezResume2023.pdf'>Resume Download</a>
            <button onClick={() => reset(MenuItems.Resume)}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg></button>
        </div>
    )
}