import React from "react";
import "./App.css";

interface ProgressBarProps{
    inputWidth: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ inputWidth }) => {
  return (
    <div>
      <div className="container">
        {inputWidth >= 0 && inputWidth <= 100 ? (
          <div className="innerContainer" style={{ width: `${inputWidth}%` }}>
            {inputWidth}%
          </div>
        ) : (
          <>
            {alert("please enter value less than 100")}
            null
          </>
        )}
      </div>
    </div>
  );
};
export default ProgressBar
