import React, { useState } from "react";
import { CountDownTimer } from "./CountDownTimer";

export const Timer = () => {
    const hoursMinSecs = { hours: 0, minutes: 0, seconds: 10 };

    return (
        <div>
            <CountDownTimer hoursMinSecs={hoursMinSecs} />
        </div>
    );
}
