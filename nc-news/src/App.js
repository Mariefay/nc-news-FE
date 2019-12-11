import React from "react";
import { Router } from "@reach/router";
import Header from "./Components/Header";
import ArticlesPage from "./Components/ArticlesPage";
import SingleArticlePage from "./Components/SingleArticlePage";
import UserPage from "./Components/UserPage";
import "./App.css";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <ArticlesPage path="/articles" />
          <ArticlesPage path="/:topic" />
          <SingleArticlePage path="/articles/:id" />
          <UserPage path="/users/:username" />
        </Router>
      </div>
    );
  }
}

export default App;
