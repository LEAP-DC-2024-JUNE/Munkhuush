import "@/styles/globals.css";
import { MyContext } from "@/utils/context";
import { useState } from "react";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  // const name = "Billy";

  const [count1, setCount1] = useState(0);

  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(12);
  const [category, setCategory] = useState("");
  const [inputValue, setInputValue] = useState("");

  const FetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${count}&tag=${category}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    FetchData();
  }, [count, category]);
  return (
    <MyContext.Provider
      value={{
        count1,
        setCount1,
        articles,
        setArticles,
        count,
        setCount,
        category,
        setCategory,
        inputValue,
        setInputValue,
      }}
    >
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}
