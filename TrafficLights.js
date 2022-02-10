import { useNavigate } from 'react-router-dom';
import { useColorSwitcher } from './hook';
import React, { Fragment, useEffect } from 'react';
import { GREEN_COLOR, RED_COLOR, YELLOW_COLOR } from './constants';
import { BlackCircle, GreenCircle, RedCircle, YellowCircle } from './Circle';

const PATH = document.location.pathname;

export function TrafficLights({ schedule }) {
    const navigate = useNavigate();

    const color = useColorSwitcher(schedule);

    useEffect(() => {
        color && navigate(`${ PATH }/${ color }`, { replace: true });
    }, [ color ]);

    return (
        <Fragment>
            { color === RED_COLOR ? <RedCircle/> : <BlackCircle/> }
            { color === YELLOW_COLOR ? <YellowCircle/> : <BlackCircle/> }
            { color === GREEN_COLOR ? <GreenCircle/> : <BlackCircle/> }
        </Fragment>
    );
}
