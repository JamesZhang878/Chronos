import { Inter } from "next/font/google";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import styles from "../styles/Index.module.css";
import Timing from "./timing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Tabs className={styles["TabsRoot"]} defaultValue="timing">
        <TabsList className={styles["TabsList"]}>
          <TabsTrigger className={styles["TabsTrigger"]} value="account">
            <Image
              className={styles["TabsIcon"]}
              src="/img/clock.svg"
              width={35}
              height={35}
              alt="clock"
            />
          </TabsTrigger>
          <TabsTrigger className={styles["TabsTrigger"]} value="password">
            Password
          </TabsTrigger>
        </TabsList>
        <TabsContent className={styles["TabsContent"]} value="account">
          <Timing />
        </TabsContent>
        <TabsContent className={styles["TabsContent"]} value="password">
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  );
}
