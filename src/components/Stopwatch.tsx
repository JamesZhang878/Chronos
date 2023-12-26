import Image from "next/image";

export default function Stopwatch() {
  return (
    <div className="stopwatch">
      <span className="stopwatch" id="display">
        00:00:00
      </span>
      <div className="controls">
        <button className="play-button">
          <Image src="/img/play.svg" width={100} height={100} alt="play" />
        </button>
        <button className="pause-button">
          <Image src="/img/pause.svg" width={100} height={100} alt="pause" />
        </button>
        <button className="restart-button">
          <Image
            src="/img/restart.svg"
            width={100}
            height={100}
            alt="restart"
          />
        </button>
      </div>
    </div>
  );
}
