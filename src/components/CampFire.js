import React, { useEffect, useState } from 'react';
import { DirectionEnum } from '../utils/enums';

export const CampFire = () => {
    const [menuItems, setMenuItems] = useState('');
    const [snowFall, setSnowFall] = useState([]);
    const [snowballs, setSnowballs] = useState(0);

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
            let direction = snowballs % 2 === 0 ? DirectionEnum.DropLeft : DirectionEnum.DropRight;
            const duration = Math.floor(Math.random() * (15 - 9) + 9);
            
            const snowJsxDiv = (<div 
                key={snowballs}
                id={'snow'}
                style={ {animation:
                    `${direction} ${duration}s  linear infinite` }
                }>
            </div>)

            if ( snowFall.length > 5 ) {
                const randomSnowToDelete = Math.floor(Math.random * snowFall.length-1);
                setSnowFall(snowFall.splice(randomSnowToDelete, 1));
            }

            setSnowFall([...snowFall, snowJsxDiv]);
            increment();
        }, 1500)
        return () => {
            return clearInterval(createSnow);
        }
    }, [snowballs])

    return (
        <div id='frame'>
            {snowFall}
            <div id='contentHolder'>   
                {menuItems}
            </div>
        </div>
    )
}
