import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimerProps {
  initialTime: number;
  onTimerEnd: () => void;
}

const Timer: React.FC<TimerProps> = ({ initialTime, onTimerEnd }) => {
  const [remainingTime, setRemainingTime] = useState<number>(initialTime * 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(intervalId);
          onTimerEnd();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [onTimerEnd]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <motion.div
      className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.1, 1], transition: { duration: 1, repeat: Infinity } }}
    >
      {formatTime(remainingTime)}
    </motion.div>
  );
};

export default Timer;

