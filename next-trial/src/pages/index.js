import Image from "next/image";
import { Inter } from "next/font/google";
import Bar from "@/components/Header";
import Intro from "@/components/Intro";
import Info from "@/components/Info";
import { WorkHistory } from "@/components/WorkHistory";
import { useTheme } from "next-themes";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Bottom } from "@/components/Bottom";
import { Skills } from "@/components/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const { setTheme, theme } = useTheme();
  // console.log(theme);
  // const toggleTheme = () => {
  //   if (theme == "dark") {
  //     setTheme("light");
  //   } else {
  //     setTheme("dark");
  //   }
  // };
  return (
    <div>
      <Bar></Bar>
      <Intro />
      <Info />
      <Skills />
      <Experience />
      <WorkHistory />
      <Footer />
      <Bottom />

      {/* <button onClick={toggleTheme}>Toggle theme</button> */}
    </div>
  );
}
