import React, { useEffect, useState } from "react";
import NewsItem from "../NewsItem/NewsItem";
import './NewsBoard.css'


function NewsBoard() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <div>
      <h2 className="">
        Latest
        <span className=""> News</span>
      </h2>
      <div className="d-flex">
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
