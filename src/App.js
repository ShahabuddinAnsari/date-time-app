import React from 'react';
import './App.css';
import 'react-calendar/dist/Calendar.css';
import { DigitalClock } from './component/time/DitigalClock';
import { Timer } from './component/time/timer/Timer';
import AnalogueClock from './component/time/AnalogueClock';
import { CalendarComponent } from './component/calendar/Calendar';
import { Header } from './component/Header';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <DigitalClock />
      <Timer />
      <AnalogueClock />
      <CalendarComponent /> */}
    </div>
  );
}

export default App;
