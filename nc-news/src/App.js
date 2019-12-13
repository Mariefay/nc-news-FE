import React from "react";
import { Router } from "@reach/router";
import Header from "./Components/Header";
import ArticlesPage from "./Components/ArticlesPage";
import SingleArticlePage from "./Components/SingleArticlePage";
import UserPage from "./Components/UserPage";
import "./App.css";


class App extends React.Component {
  state = {
    user: ""
  };
  changeUser = value => {
    this.setState({ user: value });
  };
  render() {
    return (
      <div className="App">
        
        <Header />
        
        <Router>
          <ArticlesPage
            path="/articles"
            user={this.state.user}
            changeUser={this.changeUser}
          />
          <ArticlesPage
            path="/:topic"
            user={this.state.user}
            changeUser={this.changeUser}
          />
          <SingleArticlePage
            path="/articles/:id"
            user={this.state.user}
            changeUser={this.changeUser}
          />
          <UserPage path="/users/:username" />
        </Router>
      </div>
    );
  }
}

export default App;
