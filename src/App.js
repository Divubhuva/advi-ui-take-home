import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Header";
import ArticleList from "./Pages/ArticleList";
import ErrorNotFound from "./Components/ErrorPage";
import Footer from "./Pages/Footer";
import './App.css'

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [searchTextInput, setSearchTextInput] = useState("");
  
 

  const onSearch = (serachText) => {
    setSearchTextInput(serachText);
  };


  const getUrl = (category) => {
    if (category) {
      return `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&category=${category}&apiKey=${apiKey}`;
    }
    return `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=${apiKey}`;
  };

  const getSerachUrl = ()=>{
      if (searchTextInput){
        return `https://newsapi.org/v2/everything?q=${searchTextInput}&apiKey=${apiKey}`;
      }
      return `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=${apiKey}`;
  }

  return (
    
    <div className="news-app-container">
      
      {<Router>
        <div>
          <Header SearchForText={onSearch}/>
          <Routes>
            <Route path="/" element={<ArticleList url={getUrl("")}  />} />
            <Route
              path="/business"
              element={<ArticleList url={getUrl("business")}  />}
            />
            <Route
              path="/entertainment"
              element={<ArticleList url={getUrl("entertainment")} />}
            />
            <Route
              path="/general"
              element={<ArticleList url={getUrl("general")}  />}
            />
            <Route
              path="/health"
              element={<ArticleList url={getUrl("health")}  />}
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
              element={<ArticleList url={getUrl("technology")}  />}
            />

            <Route 
              path="/search" 
              element={<ArticleList url={getSerachUrl()} />} 
            />
           <Route path="*" element={<ErrorNotFound />} />
          </Routes>
          
          <Footer  />
        </div>
      </Router> }
    </div>
  );

  
};

export default App;
