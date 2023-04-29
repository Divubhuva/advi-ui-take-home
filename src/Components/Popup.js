import React from "react";
import { format } from "date-fns";
import "./Popup.css";

const Popup = ({ article, onClose }) => {
  const { urlToImage, title, publishedAt, author, source, description, url } =
    article;
  const formattedDate = format(new Date(publishedAt), "MM/dd/yyyy hh:mm a");

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>

        <div className="popup-article-details">
          <div className="popup-article-image-container">
            <img src={urlToImage} alt={title} className="popup-article-image" />
          </div>
          <div className="popup-article-text-container">
            <h1 className="popup-article-title">{title}</h1>
            <p className="popup-article-published-at">
              Published at: {formattedDate}
            </p>
            <p className="popup-article-author">Author: {author}</p>
            <p className="popup-article-source">Source: {source.name}</p>
            <p className="popup-article-description">
              Description: {description}
            </p>

            <a
              href={url}
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
