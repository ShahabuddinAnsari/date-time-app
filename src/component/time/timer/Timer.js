import React, { useState } from "react";
import { CountDownTimer } from "./CountDownTimer";

export const Timer = () => {
    const hoursMinSecs = { hours: 0, minutes: 0, seconds: 0 };

    return (
        <div >
            <CountDownTimer hoursMinSecs={hoursMinSecs} />
        </div>
    );
}
