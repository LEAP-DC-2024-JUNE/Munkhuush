import Image from "next/image";
import { Inter } from "next/font/google";
import Bar from "@/components/Header";
import Intro from "@/components/Intro";
import Info from "@/components/Info";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Bar></Bar>
      <Intro />
      <Info />
    </div>
  );
}
