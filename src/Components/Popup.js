import React from "react";
import "./Popup.css";

const Popup = ({ article, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>

        <div className="popup-article-details">
          <div className="popup-article-image-container">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="popup-article-image"
            />
          </div>
          <div className="article-text-container">
            <h1 className="article-title">{article.title}</h1>

            <p className="article-published-at">
              Published at: { new Date(article.publishedAt).toLocaleString(('en-US', { timeZone: 'America/Phoenix' }))}
            </p>

            <p className="popup-article-author">Author: {article.author}</p>
            <p className="popup-article-source">
              Source: {article.source.name}
            </p>
            <p className="popup-article-description">{article.description}</p>
            <p className="popup-article-content">{article.content}</p>

            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more-link"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
