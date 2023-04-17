import React, { useState } from "react";
import ArticleComponent from "../Components/Article";
import "./ArticleList.css"; // Import the CSS file for the App component

const ArticleList = () => {
  const newsItems = [
    {
      id: 1,
      imageSrc: "news1.jpg",
      title: "Breaking News 1",
      description: "This is the description for Breaking News 1",
    },
    {
      id: 2,
      imageSrc: "news2.jpg",
      title: "Breaking News 2",
      description: "This is the description for Breaking News 2",
    },
    {
      id: 3,
      imageSrc: "news1.jpg",
      title: "Breaking News 1",
      description: "This is the description for Breaking News 1",
    },
    {
      id: 4,
      imageSrc: "news2.jpg",
      title: "Breaking News 2",
      description: "This is the description for Breaking News 2",
    },
    {
      id: 5,
      imageSrc: "news1.jpg",
      title: "Breaking News 1",
      description: "This is the description for Breaking News 1",
    },
    {
      id: 6,
      imageSrc: "news2.jpg",
      title: "Breaking News 2",
      description: "This is the description for Breaking News 2",
    },
    {
      id: 7,
      imageSrc: "news1.jpg",
      title: "Breaking News 1",
      description: "This is the description for Breaking News 1",
    },
    {
      id: 8,
      imageSrc: "news2.jpg",
      title: "Breaking News 2",
      description: "This is the description for Breaking News 2",
    },
    {
      id: 9,
      imageSrc: "news1.jpg",
      title: "Breaking News 1",
      description: "This is the description for Breaking News 1",
    },
    {
      id: 10,
      imageSrc: "news2.jpg",
      title: "Breaking News 2",
      description: "This is the description for Breaking News 2",
    },
    {
      id: 11,
      imageSrc: "news1.jpg",
      title: "Breaking News 1",
      description: "This is the description for Breaking News 1",
    },
    {
      id: 12,
      imageSrc: "news2.jpg",
      title: "Breaking News 2",
      description: "This is the description for Breaking News 2",
    },
    {
      id: 13,
      imageSrc: "news1.jpg",
      title: "Breaking News 1",
      description: "This is the description for Breaking News 1",
    },
    {
      id: 14,
      imageSrc: "news2.jpg",
      title: "Breaking News 2",
      description: "This is the description for Breaking News 2",
    },
    {
      id: 15,
      imageSrc: "news1.jpg",
      title: "Breaking News 1",
      description: "This is the description for Breaking News 1",
    },
    {
      id: 16,
      imageSrc: "news2.jpg",
      title: "Breaking News 2",
      description: "This is the description for Breaking News 2",
    },
    {
      id: 17,
      imageSrc: "news1.jpg",
      title: "Breaking News 1",
      description: "This is the description for Breaking News 1",
    },
    {
      id: 18,
      imageSrc: "news2.jpg",
      title: "Breaking News 2",
      description: "This is the description for Breaking News 2",
    },
    {
      id: 19,
      imageSrc: "news1.jpg",
      title: "Breaking News 1",
      description: "This is the description for Breaking News 1",
    },
    {
      id: 20,
      imageSrc: "news2.jpg",
      title: "Breaking News 2",
      description: "This is the description for Breaking News 2",
    },
    {
      id: 21,
      imageSrc: "news1.jpg",
      title: "Breaking News 1",
      description: "This is the description for Breaking News 1",
    },
    {
      id: 22,
      imageSrc: "news2.jpg",
      title: "Breaking News 2",
      description: "This is the description for Breaking News 2",
    },
    // Add more news items as needed
  ];

  const [articles, setArticles] = useState(newsItems);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Change the current page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="a-container">
      <h1>Articles</h1>
      <div className="article-grid">
        {currentArticles.map((article, index) => (
          <ArticleComponent
            key={index}
            urlToImage={article.urlToImage}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(articles.length / articlesPerPage) },
          (_, i) => i + 1
        ).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={pageNumber === currentPage ? "active" : ""}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
