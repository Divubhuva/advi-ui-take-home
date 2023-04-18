import React, { useState } from "react";
import Header from "./Pages/Header";
import ArticleList from "./Pages/ArticleList";
import "./App.css"; // import the CSS file

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(apiKey)

const [url, setUrl] = useState(`https://newsapi.org/v2/top-headlines?country=us&pageSize=100&category=business&apiKey=${apiKey}`);

// const featchUrl = (srcUrl) => {
// setUrl(srcUrl);
// };

return (
<div className="container">
<Header className="header" />
<ArticleList url={url} />
</div>
);
};

export default App;