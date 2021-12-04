import React, { useEffect } from 'react';

const AnalogueClock = () => {

    function clock() {
        const now = new Date();

        const second = now.getSeconds();
        document.querySelector('.second').style.transform = `rotate(${second * 6}deg)`;

        const min = now.getMinutes();
        document.querySelector('.minute').style.transform = `rotate(${min * 6}deg)`;

        const hour = (now.getHours() + 11) % 12 + 1;
        document.querySelector('.hour').style.transform = `rotate(${hour * 30}deg)`;
    }

    useEffect(() => {
        setInterval(clock, 1000);
    }, []);

    return (
        <>
            <h1>AnalogueClock</h1>
            <div className="clock">
                <div className="wrap">
                    <span className="hour"></span>
                    <span className="minute"></span>
                    <span className="second"></span>
                    <span className="dot"></span>
                </div>
            </div>
        </>
    )
}

export default AnalogueClock;