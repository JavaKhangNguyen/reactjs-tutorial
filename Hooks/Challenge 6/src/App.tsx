`Challenge: Implement a button and timer that will start from 10 and ends at 0 and tracks the 
counter untill the timer expires and button should disappear once timer expires`

import "./App.css";
import React, { useRef, useState, useEffect} from 'react';

export default function App() {
  const [count, setCount] = useState(0)
  const [timeLeft, setTimeLeft] = useState(10)
  const id = useRef<number | null>(null)

  const clear = () => {
    if (id.current !== null) {
      window.clearInterval(id.current);
    }
  }

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimeLeft((time) => time - 1)
    }, 1000)

    return clear
  }, [])

  useEffect(() => {
    if (timeLeft === 0) {
      clear()
    }
  }, [timeLeft])
  
  return (
    <div className="App">
      <h1>{count}</h1>
      <h3>Time left: {timeLeft} seconds</h3>
      {timeLeft === 0 ? null : 
        <button onClick={() => setCount((c) => c + 1)}>
          +
        </button>}
    </div>
  );
}