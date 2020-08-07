import React, { useEffect, useState } from "react";

function Rate({ rate }) {
  const red = "#fd0000";
  const green = "#00a305";
  let [seconds, setSeconds] = useState(0);
  let [currentRate, setCurrentRate] = useState(rate);
  let [color, setColor] = useState(red);
  useEffect(() => {
    if (seconds < 60 * 5) {
      const id = setInterval(() => {
        setSeconds((c) => c + 5);
        if (
          (seconds >= 60 && seconds < 60 * 2) ||
          (seconds >= 60 * 3 && seconds < 60 * 4)
        ) {
          if (currentRate > 1.0001) {
            setCurrentRate((r) => r - 0.0001);
            setColor(red);
          }
        } else {
          setCurrentRate((r) => r + 0.0001);
          setColor(green);
        }
      }, 5000); //
      return () => clearInterval(id);
    }
  }, [seconds, currentRate]);

  return (
    <span style={{ color }}>{Number.parseFloat(currentRate).toFixed(4)}</span>
  );
}

export default Rate;
