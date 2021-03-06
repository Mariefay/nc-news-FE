import React from "react";
import { Router } from "@reach/router";
import Header from "./Components/Header";
import ArticlesPage from "./Components/ArticlesPage";
import SingleArticlePage from "./Components/SingleArticlePage";
import UserPage from "./Components/UserPage";
import ErrorPage from "./Components/ErrorPage";
import "./App.css";

class App extends React.Component {
  state = {
    user: ""
  };
  changeUser = value => {
    this.setState({ user: value });
  };
  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Header />
        <Router>
          <ArticlesPage path="/" changeUser={this.changeUser} />
          <ArticlesPage path="/articles/topics/:topic" changeUser={this.changeUser} />
          <SingleArticlePage
            path="/articles/:id"
            user={user}
            changeUser={this.changeUser}
          />
          <UserPage path="/users/:username" />
          <ErrorPage default msg="this url doesn't exist" />
        </Router>
      </div>
    );
  }
}

export default App;
