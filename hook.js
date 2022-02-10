import { useEffect, useRef, useState } from 'react';
// import {
//     GREEN_BLINK_TIME,
//     GREEN_COLOR,
//     GREEN_TIME,
//     RED_BLINK_TIME,
//     RED_COLOR,
//     RED_TIME,
//     YELLOW_COLOR,
//     YELLOW_TIME
// } from './constants';

function next(time) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
}

export function useColorSwitcher(schedule) {
    const [ cycle, setCycle ] = useState(0);
    const [ color, setColor ] = useState(null);

    let i = useRef(0);

    useEffect(() => {
        const item = schedule[i.current];

        setColor(item.color);

        if (item.blink) {
            const interval = setInterval(() => setColor(prevColor => prevColor ? null : item.color), 250);
            setTimeout(() => clearInterval(interval), item.time);
        }

        next(item.time).then(() => {
            i.current = i.current < schedule.length - 1 ? i.current + 1 : 0;

            setCycle(prevPeriod => ++prevPeriod);
        });

        // Promise.resolve()
        //     .then(() => {
        //         setColor(RED_COLOR);
        //
        //         return next(RED_TIME);
        //     })
        //     .then(() => {
        //         const interval = setInterval(() => setColor(prevColor => prevColor ? null : RED_COLOR), 250);
        //         setTimeout(() => clearInterval(interval), RED_BLINK_TIME);
        //
        //         return next(RED_BLINK_TIME);
        //     })
        //     .then(() => {
        //         setColor(YELLOW_COLOR);
        //
        //         return next(YELLOW_TIME);
        //     })
        //     .then(() => {
        //         setColor(GREEN_COLOR);
        //
        //         return next(GREEN_TIME);
        //     })
        //     .then(() => {
        //         const interval = setInterval(() => setColor(prevColor => prevColor ? null : GREEN_COLOR), 250);
        //         setTimeout(() => clearInterval(interval), GREEN_BLINK_TIME);
        //
        //         return next(GREEN_BLINK_TIME);
        //     })
        //     .then(() => {
        //         setCycle(prevPeriod => ++prevPeriod);
        //     });
    }, [ cycle ]);

    return color;
}
