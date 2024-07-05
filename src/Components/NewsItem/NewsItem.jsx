import React from "react";
import { Button, Card } from "react-bootstrap";
import "./NewsItem.css";

function NewsItem({ title, description, src, url }) {
    if (!title || !url) {
      return null; // Don't render if title or URL is missing
    }

  return (
    <div className="col-md-6 col-lg-4 mb-4 p-3 d-inline-block my-3 mx-3" style={{maxWidth: "345px", overflow: "hidden"}}>
      <Card className="news-card h-100">
        <Card.Img
          variant="top"
          src={
            src ||
            "https://static.vecteezy.com/system/resources/previews/001/226/460/original/breaking-news-tv-background-vector.jpg"
          }
          alt="News Thumbnail" style={{height: "200px", width: "300px"}}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="flex-grow-1">
            {title
              ? title.length > 50
                ? title.slice(0, 50) + "..."
                : title
              : "No Title"}
          </Card.Title>
          <Card.Text>
            {description
              ? description.slice(0, 90)
              : "This news is trending today. If you would like to know more, you can view more. The news could likely be removed."}
          </Card.Text>
          
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto"
          >
                <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto"
          >
            <div className="col-6 mx-auto">
            <Button variant="primary" >View More</Button>
            </div>
          </a>
          </a>

        </Card.Body>
      </Card>
    </div>
  );
}

export default NewsItem;
