import { useState, useEffect } from "react";
import { CarouselCard } from "./CarouselCard";
import PrevButton from "@/icons/prevButton";
import NextButton from "@/icons/nextButton";

export const CarouselContainer = () => {
  const [articles, setArticles] = useState([]);
  const [index, setIndex] = useState(0);
  const FetchData = () => {
    fetch("https://dev.to/api/articles?per_page=4&state=fresh")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    FetchData();
  }, []);
  //   const handleNext = () => {
  //     if (index == articles.length - 1) {
  //       setIndex(0);
  //     } else {
  //       setIndex(index + 1);
  //     }
  //   };

  const handleNext = () => {
    setIndex((state) => (state == articles.length - 1 ? 0 : state + 1));
  };

  //   const handlePrevious = () => {
  //     if (index == 0) {
  //       setIndex(articles.length - 1);
  //     } else {
  //       setIndex(index - 1);
  //     }
  //   };

  const handlePrevious = () => {
    setIndex((state) => (state == 0 ? articles.length - 1 : state - 1));
  };

  return (
    <div className="flex flex-col items-center gap-[11px]">
      <CarouselCard article={articles[index]} />
      <div className="flex w-[1215px] justify-end">
        <PrevButton props={handlePrevious} />
        <NextButton props2={handleNext} />
      </div>
    </div>
  );
};
