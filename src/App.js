import React from 'react';
import './App.css';
import 'react-calendar/dist/Calendar.css';
import { Header } from './component/Header';
import { TimeContainer } from './component/container/TimeContainer';
import { CalcContainer } from './component/container/CalcContainer';
import { CalendarContainer } from './component/container/CalendarContainer';
import { WeatherContainer } from './component/container/WeatherContainer';

function App() {
  return (
    <main className="App">
      <Header />
      <section className="container">
        <div className="container-time"><TimeContainer /></div>
        <div className="container-calc"><CalcContainer /></div>
        <div className="container-calendar"><CalendarContainer /></div>
        <div className="container-weather"><WeatherContainer /></div>
      </section>
    </main>
  );
}

export default App;
