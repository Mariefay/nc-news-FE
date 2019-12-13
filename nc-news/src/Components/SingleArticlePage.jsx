import React from "react";
import FullArticle from "./FullArticle";
import * as api from "../api";
import { StyledSingleArticlePage } from "./Styles/StyledSingleArticlePage";
import Login from "./Login";

class SingleArticlePage extends React.Component {
  state = {
    article: {},
    isLoading: true
  };

  componentDidMount() {
    this.getArticleById();
  }

  getArticleById = () => {
    api
      .getArticleById(this.props.id)
      .then(article => this.setState({ article: article, isLoading: false }));
  };

  render() {
    return (
      <StyledSingleArticlePage>
        {this.props.user !== "" ? (
          <p className="LoggedIn">Logged in as {this.props.user}</p>
        ) : (
          <Login changeState={this.props.changeUser} />
        )}
        {this.state.isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <FullArticle article={this.state.article} user={this.props.user} />
        )}
      </StyledSingleArticlePage>
    );
  }
}

export default SingleArticlePage;
