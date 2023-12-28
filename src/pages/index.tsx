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
          <TabsTrigger className={styles["TabsTrigger"]} value="analytics">
            <Image
              className={styles["TabsIcon"]}
              src="/img/chart.svg"
              width={30}
              height={30}
              alt="chart"
            />
          </TabsTrigger>
          <TabsTrigger className={styles["TabsTrigger"]} value="account">
            <Image
              className={styles["TabsIcon"]}
              src="/img/clock.svg"
              width={30}
              height={30}
              alt="clock"
            />
          </TabsTrigger>
          <TabsTrigger className={styles["TabsTrigger"]} value="profile">
            <Image
              className={styles["TabsIcon"]}
              src="/img/profile.svg"
              width={26}
              height={26}
              alt="profile"
            />
          </TabsTrigger>
        </TabsList>
        <TabsContent className={styles["TabsContent"]} value="analytics">
          TODO: Add analytics graphs
        </TabsContent>
        <TabsContent className={styles["TabsContent"]} value="account">
          <Timing />
        </TabsContent>
        <TabsContent className={styles["TabsContent"]} value="profile">
          TODO: Add: 1. Profile information 2. How-to Guide
        </TabsContent>
      </Tabs>
    </div>
  );
}
