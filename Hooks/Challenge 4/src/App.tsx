import { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./App.css";

export default function App() {
  const [val, setVal] = useState(0);
  const setValuer = (e:React.ChangeEvent<HTMLInputElement>) => setVal(Number(e.target.value));

  return (
    <>
      <div className="App">
        <h1>Progress Bar</h1>
        <ProgressBar inputWidth={val} />
        <form style={{marginTop: '10px'}}>
          <label>Input Percentage:</label>
          <input type="number" onChange={setValuer} style={{marginLeft: '10px'}}/>
        </form>
      </div>
    </>
  );
}

