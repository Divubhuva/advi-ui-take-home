import Header from "./Pages/Header";
import ArticleList from "./Pages/ArticleList";
import Filter from "./Components/Filter";

import "./App.css"; // import the CSS file

const App = () => {
  return (
    <div className="container">
      <Header className="header" />
      <Filter className="filter" />
      <ArticleList className="article-list" />
    </div>
  );
};

export default App;