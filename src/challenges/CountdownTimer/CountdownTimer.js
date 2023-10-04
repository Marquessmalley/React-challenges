import { useState, useRef, useEffect } from "react";

const CountdownTimer = () => {
  const [timer, setTimer] = useState(60);
  const [timerComplete, setTimerComplete] = useState(false);
  const intervalId = useRef();

  useEffect(() => {
    if (timer === 0) {
      setTimerComplete(true);
      clearInterval(intervalId.current);
      setTimer(60);
    }
  }, [timer]);

  const handleStartTimer = () => {
    intervalId.current = setInterval(() => {
      setTimer((state) => state - 1);
    }, 1000);
    setTimerComplete(false);
  };
  const handlePauseTimer = () => {
    clearInterval(intervalId.current);
  };
  const handleResetTimer = () => {
    clearInterval(intervalId.current);
    setTimer(60);
  };

  return (
    <div>
      <h2>Countdown: {timer}s</h2>
      {timerComplete && <h3>Times Up!</h3>}
      <button onClick={handleStartTimer}>Start</button>
      <button onClick={handlePauseTimer}>Pause</button>
      <button onClick={handleResetTimer}>Rest</button>
    </div>
  );
};

export default CountdownTimer;
