import React, { useState, useEffect } from "react";
import axios from 'axios';
import ArticleComponent from "../Components/Article";
import "./ArticleList.css";
import Filter from '../Components/Filter';

const ArticleList = ({url}) => {

  const [articles, setArticles] = useState(null);
  const [filteredArticles, setFilteredArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles ? filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle) 
                                           : articles 
                                                    ? articles.slice(indexOfFirstArticle, indexOfLastArticle) 
                                                    : [];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterByDate = (date) => {
    if (articles && articles.length > 0) {
      if (date) {
        
      const filteredList = articles.filter((article) => {
        const articleDate = new Date(article.publishedAt);
        const filterDate = new Date(date);
        return articleDate.getDate() === filterDate.getDate() &&
          articleDate.getMonth() === filterDate.getMonth() &&
          articleDate.getFullYear() === filterDate.getFullYear();
      });

      if (JSON.stringify(filteredArticles) !== JSON.stringify(filteredList)) {  
        setFilteredArticles(filteredList); 
        setCurrentPage(1);
      }
    }
    else {
      
      setFilteredArticles(articles);
      
    }
    }
    
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(url);
        
        setArticles(data.articles);
        
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  },[url]);

  // If filter is applied then it should update here.
  useEffect(() => {
    if (articles && filteredArticles && filteredArticles.length > 0) {
        handleFilterByDate(filteredArticles[0].publishedAt);  
      }
  },[articles]);

  return (
    
    <div className="a-container">
      <h1>Articles</h1>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {articles && (
        <div>
          
          <div>
            <Filter  
              handleFilterByDate={handleFilterByDate}
            />
          </div>
          
          <div className="article-grid">
            {currentArticles.map((article, index) => (
              <ArticleComponent
                key={index}
                article={article} />
            ))}
          </div>

          <div className="pagination">
            {Array.from({ length: Math.ceil((filteredArticles || articles).length / articlesPerPage) }, (_, i) => i + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={pageNumber === currentPage ? "active" : ""}
                >
                  {pageNumber}
                </button>
              )
            )}
          </div>
          
        </div>
      )}
    </div>
  );
};

export default ArticleList;
