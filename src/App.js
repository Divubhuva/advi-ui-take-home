import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Header";
import ArticleList from "./Pages/ArticleList";
import ErrorNotFound from "./Components/ErrorPage";
import Footer from "./Pages/Footer";
import "./App.css";

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [searchTextInput, setSearchTextInput] = useState("");

  const getUrl = (category) => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=${apiKey}`;
    if (category) {
      url += `&category=${category}`;
    }
    return url;
  };

  const getSearchUrl = () => {
    if (searchTextInput) {
      return `https://newsapi.org/v2/everything?q=${searchTextInput}&apiKey=${apiKey}`;
    }
    return getUrl("");
  };

  const onSearch = (searchText) => {
    setSearchTextInput(searchText);
  };

  return (
    <div className="news-app-container">
      <Router>
        <Header SearchForText={onSearch} />
        <Routes>
          <Route path="/" element={<ArticleList url={getUrl("")} />} />
          <Route
            path="/business"
            element={<ArticleList url={getUrl("business")} />}
          />
          <Route
            path="/entertainment"
            element={<ArticleList url={getUrl("entertainment")} />}
          />
          <Route
            path="/general"
            element={<ArticleList url={getUrl("general")} />}
          />
          <Route
            path="/health"
            element={<ArticleList url={getUrl("health")} />}
          />
          <Route
            path="/science"
            element={<ArticleList url={getUrl("science")} />}
          />
          <Route
            path="/sports"
            element={<ArticleList url={getUrl("sports")} />}
          />
          <Route
            path="/technology"
            element={<ArticleList url={getUrl("technology")} />}
          />
          <Route
            path="/search"
            element={<ArticleList url={getSearchUrl()} />}
          />
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
