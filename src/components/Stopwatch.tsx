import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Stopwatch.module.css";

import PauseModal from "./PauseModal";
import { PassThrough } from "stream";

export default function Stopwatch() {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (timeInSeconds: number): string => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const chooseButton = () => {
    if (!isRunning) {
      if (time == 0) {
        return <Image src="/img/play.svg" width={50} height={50} alt="play" />;
      } else {
        return <PauseModal />;
      }
    } else {
      return <Image src="/img/pause.svg" width={50} height={50} alt="pause" />;
    }
  };

  return (
    <div className={styles.stopwatch}>
      <span className={styles["time-display"]}>{formatTime(time)}</span>
      <div className={styles.controls}>
        <button className={styles["start-stop"]} onClick={handleStartStop}>
          {chooseButton()}
        </button>
        <button className={styles.reset} onClick={handleReset}>
          <Image src="/img/restart.svg" width={50} height={50} alt="restart" />
        </button>
      </div>
    </div>
  );
}
