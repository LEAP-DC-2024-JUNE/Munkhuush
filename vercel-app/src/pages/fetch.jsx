import { useState, useEffect } from "react";
export default function Fetch() {
  const [articles, setArticles] = useState([]);
  const FetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  // const fetchingData = () => {
  //   FetchData();
  // };
  // useEffect(fetchingData, []);

  // useEffect(() => {
  //   FetchData();
  // }, []);
  useEffect(FetchData, []);

  console.log(articles);
  return (
    <div>
      {articles.map((article) => {
        return (
          <div>
            <img src={article.social_image} />
            <p>{article.title}</p>
          </div>
        );
      })}
    </div>
  );
}
