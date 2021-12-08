import React from 'react';
import { DigitalClock } from '../time/DitigalClock';

export const TimeContainer = () => {
    return (
        <>
        <p>Time</p>
            <DigitalClock />
            <div className="timer-stopWatch">
                <p className="time-container-timer">Timer</p>
                <p className="time-container-stopWatch">Stop watch</p>
            </div>
        </>
    );
}