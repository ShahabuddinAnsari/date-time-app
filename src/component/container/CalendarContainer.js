import React from 'react';
import { CalendarComponent } from '../calendar/Calendar';

export const CalendarContainer = () => {

    const date = new Date().toDateString().split(" ");
    const currentDay = date[0];
    const currentMonth = date[1]
    const currentDate = date[2]
    const currentYear = date[3]

    return (
        <>
        <p>Calendar</p>
            {/* <CalendarComponent /> */}
            <div>{`${currentDay} ${currentDate}-${currentMonth}-${currentYear}`}</div>
        </>
    );
}