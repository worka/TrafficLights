import React from 'react';

export function RedCircle() {
    return <Circle color="red"/>;
}

export function YellowCircle() {
    return <Circle color="yellow"/>;
}

export function GreenCircle() {
    return <Circle color="green"/>;
}

export function BlackCircle() {
    return <Circle color="black"/>;
}

function Circle({ color }) {
    return (
        <div style={ {
            width: '100px',
            height: '100px',
            backgroundColor: color,
            borderRadius: '50%',
            marginBottom: '5px'
        } }/>
    );
}
