// Challenge: Implement a Stopwatch/timer as shown below with start, stop and reset button.
import "./App.css";
import React, { useState } from "react";

declare global {
  interface Window {
    myTimer: number;
  }
}

const App: React.FC = () => {
  const [timer, setTimer] = useState<number>(0);

  const startTimer = () => {
    window.myTimer = window.setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(window.myTimer);
  };

  const resetTimer = () => {
    clearInterval(window.myTimer);
    setTimer(0);
  };

  return (
    <div className="container">
      <h1>Timer</h1>
      <span>{Math.trunc(timer / 60)} mins </span>
      <span>{timer % 60} secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default App;