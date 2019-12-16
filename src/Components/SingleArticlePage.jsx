import React from "react";
import FullArticle from "./FullArticle";
import * as api from "../api";
import { StyledSingleArticlePage } from "./Styles/StyledSingleArticlePage";
import Login from "./Login";
import ErrorPage from "./ErrorPage";

class SingleArticlePage extends React.Component {
  state = {
    article: {},
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.getArticleById();
  }

  getArticleById = () => {
    api
      .getArticleById(this.props.id)
      .then(article =>
        this.setState({ article: article, isLoading: false, err: null })
      )
      .catch(err => {
        console.log(err);
        this.setState({
          isLoading: false,
          error: err
        });
      });
  };

  render() {
    const { user, changeUser } = this.props;
    const { isLoading, article } = this.state;
    if (this.state.error) return <ErrorPage msg="this article doesn't exist" />;
    return (
      <StyledSingleArticlePage>
        {user !== "" ? (
          <p className="LoggedIn">Logged in as {user}</p>
        ) : (
          <Login changeStateUser={changeUser} />
        )}
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <FullArticle article={article} user={user} />
        )}
      </StyledSingleArticlePage>
    );
  }
}

export default SingleArticlePage;
