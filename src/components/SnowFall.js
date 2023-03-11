import React, { useEffect, useState } from 'react';
import { RegularKeyFramesEnum, AnimationStylePresets,
    SnowKeyFramesEnum, SnowTypesEnum } from '../utils/enums';
import '../css/styles.css'

export const SnowFall = () => {
    const [menuItems, setMenuItems] = useState('');
    const [snowFall, setSnowFall] = useState([]);
    const [snowballs, setSnowballs] = useState(0);

    const possibleSnow = [SnowTypesEnum.Snow, SnowTypesEnum.SmallSnow, SnowTypesEnum.BigSnow];
    
    useEffect(() => {
        setTimeout((() => {
            const jsxElements = (
                <div id={`menu${RegularKeyFramesEnum.FadeIn}`}>    
                    <div id='resume'>
                        <h1>Resume</h1>
                    </div>

                    <div id='projects'>
                        <h1>Projects</h1>
                    </div>
                    
                    <div id='contact'>
                        <h1>Contact</h1>
                    </div>
                </div>    
            )
            setMenuItems(jsxElements)
        }), 3000)
    }, [])


    useEffect(() => {
        const increment = () => {
            setSnowballs(snowballs => snowballs += 1)
        }

        // Look at increasing the dissapearance by one or two seconds or incresing duration of animation
        const createSnow = setInterval(() => {
            // Improve randomValue and direction to be more reader friendly, typescript it up
            const randomValue = ~~(Math.random() * ((Object.keys(SnowKeyFramesEnum).length) - 0) + 0);
            const direction = SnowKeyFramesEnum[Object.keys(SnowKeyFramesEnum)[randomValue]];
            const duration = ~~(Math.random() * (13 - 7) + 7);
            const snowType = possibleSnow[Math.floor(Math.random() * possibleSnow.length)]
            const animationStyles = {
                [AnimationStylePresets.NormalAnimation]: `${direction} ${duration}s linear infinite`,
                [AnimationStylePresets.WebKitAnimation]: `${direction} ${duration}s linear infinite`,
                [AnimationStylePresets.MozAnimation]: `${direction} ${duration}s linear infinite`,
                [AnimationStylePresets.OAnimation]: `${direction} ${duration}s linear infinite`,
                [AnimationStylePresets.MsAnimation]: `${direction} ${duration}s linear infinite`
            }
            
            const snowJsxDiv = (
                <span 
                    key={snowballs}
                    id={snowType}
                    style={animationStyles}>
                </span>
            )

            if ( snowFall.length > 7 ) {
                    setSnowFall(snowFall.unshift());
            }

            setSnowFall([...snowFall, snowJsxDiv]);
            increment();
        }, 2500)

        return () => {
            return clearInterval(createSnow);
        }
    }, [snowballs])

    return (
        <div id='frame'>
            <div id='snowingFrame'>
                <div id='snowCollector'>
                    {snowFall}
                </div>
                <div id='contentHolder'>   
                    {menuItems}
                </div>
            </div>
        </div>
    )
}
