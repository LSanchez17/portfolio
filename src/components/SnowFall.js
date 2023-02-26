import React, { useEffect, useState } from 'react';
import { DirectionEnum, RegularKeyFramesEnum, 
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
                <div id='menuFadeIn'>    
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

        const increment = () => {
            setSnowballs(snowballs => snowballs += 1)
        }

        const createSnow = setInterval(() => {
            let direction = snowballs % 2 === 0 ? SnowKeyFramesEnum.DropLeft : SnowKeyFramesEnum.DropRight;
            const duration = Math.floor(Math.random() * (13 - 7) + 7);
            const snowType = possibleSnow[Math.floor(Math.random() * possibleSnow.length)]

            
            const snowJsxDiv = (
                <span 
                    key={snowballs}
                    id={snowType}
                    style={ {animation:
                        `${direction} ${duration}s  linear infinite` }
                    }>
                </span>)

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
                <div id='contentHolder'>   
                    {menuItems}
                </div>
                {snowFall}
            </div>
        </div>
    )
}
