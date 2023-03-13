import React, { useEffect, useState } from 'react';
import { RegularKeyFramesEnum } from '../utils/enums';

export const ContentMenu = ({visuals, canStart}) => {
    const [content, setContent] = useState()

    useEffect(() => {
        if (visuals) {
            setTimeout((() => {
                const jsxElements = (
                    <div id={`menu${RegularKeyFramesEnum.ResumeGlow}`}>    
                        <div id={`resume${RegularKeyFramesEnum.ResumeGlow}`}>
                            <h1>Resume</h1>
                        </div>

                        <div id={`projects${RegularKeyFramesEnum.ProjectGlow}`}>
                            <h1>Projects</h1>
                        </div>
                    
                        <div id={`contact${RegularKeyFramesEnum.ContactGlow}`}>
                            <h1>Contact</h1>
                        </div>
                    </div>    
                )
                setContent(jsxElements)
            }), 3000)
        }
        else {
            const jsxElements = (
                <div id={`menu`}>    
                    <div id={`resume`}>
                        <h1>Resume</h1>
                    </div>

                    <div id={`projects`}>
                        <h1>Projects</h1>
                    </div>
                    
                    <div id={`contact`}>
                        <h1>Contact</h1>
                    </div>
                </div>    
            )
            setContent(jsxElements)
        }
    }, [visuals])

    return (
        <div id='contentHolder'>   
            {canStart && content}
        </div>
    )
}