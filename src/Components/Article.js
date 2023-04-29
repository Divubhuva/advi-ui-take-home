import React, { useState } from "react";
import "./Article.css";
import Popup from "./Popup";

const ArticleComponent = ({ article }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="article-container card" onClick={handlePopupToggle}>
      {article.urlToImage && (
        <div className="article-image-container">
          <img
            src={article.urlToImage}
            alt="Article Thumbnail"
            className="card-img-top article-image"
          />
        </div>
      )}

      <div className="card-body">
        <h2 className="card-title article-title">{article.title}</h2>
        <p className="card-text article-description">{article.description}</p>
      </div>

      {showPopup && <Popup article={article} onClose={handlePopupToggle} />}
    </div>
  );
};

export default ArticleComponent;
