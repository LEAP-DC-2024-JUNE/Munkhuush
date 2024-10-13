import Image from "next/image";
import localFont from "next/font/local";
import {
  BlogContainer,
  CarouselCard,
  Footer,
  Header,
  TrendingCard,
  TrendingContainer,
  CarouselContainer,
} from "@/components";
import { useState } from "react";

export default function Home() {
  // const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <Header />
      <CarouselContainer />
      <TrendingContainer />
      <BlogContainer />
      <Footer />
    </div>
  );
}
