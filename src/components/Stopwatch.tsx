import Image from "next/image";

export default function Stopwatch() {
  return (
    <div className="stopwatch">
      <span className="stopwatch" id="display">
        00:00:00
      </span>
      <div className="controls">
        <Image src="/img/play.svg" width={100} height={100} alt="play" />
      </div>
    </div>
  );
}
