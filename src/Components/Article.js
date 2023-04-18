import React, { useState } from "react";
import "./Article.css"
import Popup from "./Popup"; 


const ArticleComponent = ({ article }) => {

  const [showPopup, setShowPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };


  return (
    <div className="article-container" onClick={handlePopupToggle}>
      {article.urlToImage && (
        <img src={article.urlToImage} alt="Article Thumbnail" className="article-image" />
      )}
      <h2 className="article-title">{article.title}</h2>
      <p className="article-description">{article.description}</p>
      {showPopup && <Popup article={article} onClose={handlePopupToggle} />}
    </div>
  );
};

export default ArticleComponent;