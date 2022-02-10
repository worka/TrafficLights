import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { TrafficLights } from './TrafficLights';
import {
    GREEN_BLINK_TIME,
    GREEN_COLOR, GREEN_TIME,
    RED_BLINK_TIME,
    RED_COLOR,
    RED_TIME,
    YELLOW_COLOR,
    YELLOW_TIME
} from './constants';

export default function App() {
    const schedule = [
        { color: RED_COLOR, time: RED_TIME, blink: false },
        { color: RED_COLOR, time: RED_BLINK_TIME, blink: true },
        { color: YELLOW_COLOR, time: YELLOW_TIME, blink: false },
        { color: GREEN_COLOR, time: GREEN_TIME, blink: false },
        { color: GREEN_COLOR, time: GREEN_BLINK_TIME, blink: true }
    ];

    return (
        <BrowserRouter>
            <TrafficLights schedule={ schedule }/>
        </BrowserRouter>
    );
}
