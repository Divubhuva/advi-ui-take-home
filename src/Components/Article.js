import React from "react";
import "./Article.css";

const ArticleComponent = ({ urlToImage, title, description }) => {
  return (
    <div className="article-container">
      {urlToImage && (
        <img
          src={urlToImage}
          alt="Article Thumbnail"
          className="article-image"
        />
      )}
      <h2 className="article-title">{title}</h2>
      <p className="article-description">{description}</p>
    </div>
  );
};

export default ArticleComponent;
