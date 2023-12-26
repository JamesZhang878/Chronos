import { Inter } from "next/font/google";
import Stopwatch from "@/components/Stopwatch";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Stopwatch />
    </div>
  );
}
