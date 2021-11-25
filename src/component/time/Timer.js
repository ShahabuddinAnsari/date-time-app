import React, { useState } from "react";

export const Timer = () => {

    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    const handleChange = (e) => {

        console.log(e.target.name);

        const inputFrom = e.target.name
        const inputValue = parseInt(e.target.value)

        if (typeof inputValue === 'number' && inputFrom === 'hour') {
            setHour(inputValue);
        } else if (typeof inputValue === 'number' && inputFrom === 'minute') {
            setMinute(inputValue);
        } else if (typeof inputValue === 'number' && inputFrom === 'second') {
            setSecond(inputValue);
        }
    }

    const onBtnClick = () => {

        let deadline = new Date();

        deadline.setSeconds(deadline.getSeconds() + 250);


        const total = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 * 60 * 60) % 24);

        console.log('total : ', total)
        console.log('hours : ', hours)
        console.log('minutes : ', minutes)
        console.log('seconds : ', seconds)

    }

    return (
        <div>
            <h2>Timer</h2>
            {/* <label>Hour</label><input type="number" name="hour" value={hour} onChange={handleChange} />
            <label>Minute</label><input type="number" name="minute" value={minute} onChange={handleChange} />
            <label>Second</label><input type="number" name="second" value={second} onChange={handleChange} />

            <p>{`${hour} : ${minute} : ${second}`}</p> */}

            <button onClick={onBtnClick}>Click</button>
        </div>
    );
}