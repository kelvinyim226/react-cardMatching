import { useState, useEffect } from "react";
export const useTimer = () => {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);
  const [timesUp, setTimesUp] = useState(false);

  useEffect(() => {
    console.log(time);
    let interval = null;
    if (timesUp) return false;
    if (active) {
      if (time === 0) {
        setTimesUp(true);
        setActive(false);
      }
      interval = setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else {
      clearTimeout(interval);
    }
  }, [time]);

  return [time, setTime, active, setActive, timesUp, setTimesUp];
};
