import React, { useEffect, useState } from "react";
import NewsItem from "../NewsItem/NewsItem";
import './NewsBoard.css'


function NewsBoard({category}) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div className="d-block m-3">
      <h2 className="d-flex justify-content-center">
        Latest &nbsp;
        <span className="">
          {category === "general" ? " News" : `${category}`}{" "}
        </span>
      </h2>
      <div className="d-flex justify-content-center overflow-hidden flex-wrap">
        {articles.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </div>

      {/* final div closes below */}
    </div>
  );
}

export default NewsBoard;
