import React from 'react';
import './App.css';
import { DigitalClock } from './component/time/DitigalClock';
import { Timer } from './component/time/Timer';

function App() {
  return (
    <div className="App">
      <section className="navigationList"></section>
      <section className="mainContainer"></section>

      <Timer />
    </div>
  );
}

export default App;
