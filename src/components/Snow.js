import React, { useEffect, useRef, useState } from 'react';
import { UserMessages, AnimationStylePresets,
    SnowKeyFramesEnum, SnowTypesEnum } from '../utils/enums';

const MAX_SNOWFLAKES = 6;
const SNOW_INTERVAL_MS = 3000;
const snowKeys = Object.keys(SnowKeyFramesEnum);
const possibleSnow = [SnowTypesEnum.Snow, SnowTypesEnum.SmallSnow, SnowTypesEnum.BigSnow];

export const Snow = ({visuals, canStart}) => {
    const [snowFall, setSnowFall] = useState([]);
    const keyRef = useRef(0);

    const message = (
        <h2 id={`${UserMessages.regularMessage}`}>
            Imagine snow falling in the background!
        </h2>
    )

    useEffect(() => {
        const createSnow = setInterval(() => {
            // Bitwise negation is fine here since the number is well within the 2^31 range
            const randomValue = ~~(Math.random() * snowKeys.length);
            const direction = SnowKeyFramesEnum[snowKeys[randomValue]];
            const duration = ~~(Math.random() * (13 - 7) + 7);
            const snowType = possibleSnow[Math.floor(Math.random() * possibleSnow.length)];
            const animationStyles = {
                [AnimationStylePresets.NormalAnimation]: `${direction} ${duration}s linear infinite`,
                [AnimationStylePresets.WebKitAnimation]: `${direction} ${duration}s linear infinite`,
                [AnimationStylePresets.MozAnimation]: `${direction} ${duration}s linear infinite`,
                [AnimationStylePresets.OAnimation]: `${direction} ${duration}s linear infinite`,
                [AnimationStylePresets.MsAnimation]: `${direction} ${duration}s linear infinite`
            }

            const snowJsxDiv = (
                <span
                    key={keyRef.current++}
                    id={snowType}
                    style={animationStyles}>
                </span>
            )

            setSnowFall(prev => {
                const next = [...prev, snowJsxDiv];
                return next.length > MAX_SNOWFLAKES ? next.slice(next.length - MAX_SNOWFLAKES) : next;
            });
        }, SNOW_INTERVAL_MS)

        return () => clearInterval(createSnow);
    }, [])

    return(
        <div id='snowCollector'>
            {(canStart && visuals) ? snowFall : message}
        </div>
    )
}