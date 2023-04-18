import React from "react";
import "./Article.css"



const ArticleComponent = ({ article }) => {
  return (
    <div className="article-container">
      {article.urlToImage && (
        <img src={article.urlToImage} alt="Article Thumbnail" className="article-image" />
      )}
      <h2 className="article-title">{article.title}</h2>
      <p className="article-description">{article.description}</p>
      
    </div>
  );
};

export default ArticleComponent;