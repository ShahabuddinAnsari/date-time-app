import React, { useState, useEffect } from 'react';

export const DigitalClock = () => {

    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        setInterval(() => {
            const now = new Date();

            setHour(now.getHours());
            setMinute(now.getMinutes());
            setSecond(now.getSeconds());
        })
    }, [hour, minute, second])

    const calculateHour = (hrs) => {
        if (hrs <= 12) {
            return hrs;
        } else if (hrs === '24') {
            return '00'
        } else {
            return (hour - 12);
        }
    }

    const hourFormatted = ('0' + calculateHour(hour)).slice(-2);
    const minuteFormatted = ('0' + minute).slice(-2);
    const secondFormatted = ('0' + second).slice(-2);
    const section = hour >= 12 ? 'PM' : 'AM';

    return (
        <div className="digitalClockContainer">
            <h1>DigitalClock</h1>
            <p className="digiClock">{`${hourFormatted} : ${minuteFormatted} : ${secondFormatted} ${section}`} </p>
        </div>
    )
}