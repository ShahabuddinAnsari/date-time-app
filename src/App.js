import React from 'react';
import './App.css';
import { DigitalClock } from './component/time/DitigalClock';
import { Timer } from './component/time/Timer';
import AnalogueClock from './component/time/AnalogueClock';

function App() {
  return (
    <div className="App">
      <DigitalClock />
      <Timer />
      <AnalogueClock />
    </div>
  );
}

export default App;
