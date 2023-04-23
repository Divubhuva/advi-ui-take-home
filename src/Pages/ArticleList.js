import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleComponent from "../Components/Article";
import "./ArticleList.css";
import Filter from "../Components/Filter";
import Loading from "../Components/Loading";

const ArticleList = ({ url }) => {
  const [articles, setArticles] = useState(null);
  const [filteredArticles, setFilteredArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [currentDate, setCurrentDate] = useState(null);
  const [currentPopularity, setCurrentPopularity] = useState("");


  const articlesPerPage = 12;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles
    ? filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle)
    : articles
    ? articles.slice(indexOfFirstArticle, indexOfLastArticle)
    : [];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  const applyFilter = ()=>{
   
    if (articles && articles.length > 0) {
      
      if (currentDate && currentPopularity) {
        
        const filteredList = articles.filter((article) => {
          const articleDate = new Date(article.publishedAt);
          const filterDate = new Date(currentDate);
          return (
            articleDate.getDate() === filterDate.getDate() &&
            articleDate.getMonth() === filterDate.getMonth() &&
            articleDate.getFullYear() === filterDate.getFullYear() && 
            article.source.name.toLowerCase() === currentPopularity.toLowerCase()
          );
        });

        if (JSON.stringify(filteredArticles) !== JSON.stringify(filteredList)) {
          setFilteredArticles(filteredList);
          setCurrentPage(1);
        }
      }
      else if (currentDate) {
        
        const filteredList = articles.filter((article) => {
          const articleDate = new Date(article.publishedAt);
          const filterDate = new Date(currentDate);


          

          return (
            articleDate.getDate() === filterDate.getDate() &&
            articleDate.getMonth() === filterDate.getMonth() &&
            articleDate.getFullYear() === filterDate.getFullYear()
          );
        });
        
        if (JSON.stringify(filteredArticles) !== JSON.stringify(filteredList)) {
          setFilteredArticles(filteredList);
          setCurrentPage(1);
        }
      } 
      else if (currentPopularity){
        
        const filteredList = articles.filter((article) => {
          return article.source.name.toLowerCase() === currentPopularity.toLowerCase();
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

  
  const handleFilterByDate = (date) => {
    setCurrentDate(date);
  };

  const handleFilterByPopularity = (popularSource) => {
    setCurrentPopularity(popularSource);
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
  }, [url]);


  useEffect(() => {
    applyFilter();
  }, [ articles, currentDate, currentPopularity]);  

  // If filter is applied then it should update here.
  // useEffect(() => {
  //   if (articles && filteredArticles && filteredArticles.length > 0) {
  //     handleFilterByDate(filteredArticles[0].publishedAt);
  //   }
  // }, [articles]);

    
  // useEffect(() => {
  //   console.log("text Serach for ", serachForText);
  // }, [serachForText]);


  return (
    <div className="container-fluid ">
      <div className="row">
        
        <div className="col-md-2">
          <h1>Filter</h1>
          <Filter handleFilterByDate={handleFilterByDate}  
          handleFilterByPopularity= {handleFilterByPopularity}
          />
        </div>
        
        <div className="col-md-10">
          <h2>Articles</h2>
          
          {loading && <div><Loading /></div>}
          {error && <div className="errorMessage">Error: {error.message}</div>}
          {!loading && !error && !currentArticles.length && <div className="empty-articleList">No articles found.</div>}

          {!loading && !error && articles && (
            <div className="row">
              {currentArticles.map((article, index) => (
  <div className="col-md-3 ">
                  <ArticleComponent  key={index} article={article} />
  </div>
))}
            </div>
          )}

          {!loading && !error && articles && (
            <nav>
              <ul className="pagination justify-content-center">
                {Array.from(
                  {
                    length: Math.ceil(
                      (filteredArticles || articles).length / articlesPerPage
                    ),
                  },
                  (_, i) => i + 1
                ).map((pageNumber) => (
                  <li
                    key={pageNumber}
                    className={
                      "page-item " +
                      (pageNumber === currentPage ? "active" : "")
                    }
                  >

                    <button
                      onClick={() => handlePageChange(pageNumber)}
                      className="page-link"
                    >
                      {pageNumber}
                    </button>

                  </li>

                ))}
              </ul>
            </nav>
          )}
        </div>

      </div>
    </div>
  );
};
export default ArticleList;
