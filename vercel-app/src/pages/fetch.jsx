import { useState, useEffect } from "react";
export default function Fetch({ name }) {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);
  const FetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch(() => setError(true))
      .finally(() => console.log("ajillaj bn"));
  };
  // const fetchingData = () => {
  //   FetchData();
  // };
  // useEffect(fetchingData, []);

  // useEffect(() => {
  //   FetchData();
  // }, []);
  useEffect(FetchData, []);

  // console.log(articles);
  return (
    <div>
      {!error ? (
        articles.map((article) => {
          return (
            <div>
              <img src={article.social_image} />
              <p>{article.title}</p>
              <p>{name}</p>
            </div>
          );
        })
      ) : (
        <div>ajillasangue</div>
      )}
    </div>
  );
}

export const getServerSideProps = () => {
  let name = "Billy";
  console.log(name);
  return {
    props: { name },
  };
};
