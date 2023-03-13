import React, { useEffect, useState } from 'react';
import { UserMessages, AnimationStylePresets,
    SnowKeyFramesEnum, SnowTypesEnum } from '../utils/enums';

export const Snow = ({visuals, canStart}) => {
    const [snowFall, setSnowFall] = useState([]);
    const [snowballs, setSnowballs] = useState(0);

    const possibleSnow = [SnowTypesEnum.Snow, SnowTypesEnum.SmallSnow, SnowTypesEnum.BigSnow];
    const message = (
        <h2 id={`${UserMessages.regularMessage}`}>
            Please allow visuals to see the me!
        </h2>
    )

    useEffect(() => {
        const increment = () => {
            setSnowballs(snowballs => snowballs += 1)
        }

        // Look at increasing the dissapearance by one or two seconds or incresing duration of animation
        const createSnow = setInterval(() => {
            // Bitwise negation is fine here since the number is well within the 2^31 range
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

    return(
        <div id='snowCollector'>
            {(canStart && visuals) ? snowFall : message}
        </div>
    )
}