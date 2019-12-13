import React from "react";
import { StyledArticlesPage } from "./Styles/StyledArticlesPage";
import ArticlesList from "./ArticlesList";
import FilterBy from "./FilterBy";
import SortBy from "./SortBy";
import Login from "./Login";

class ArticlesPage extends React.Component {
  state = {
    userSelected: ""
  };

  changeState = value => {
    this.setState({ userSelected: value });
    this.props.changeUser(this.state.userSelected);
  };

  render() {
    return (
      <StyledArticlesPage>
        <h1>Articles</h1>

        <div className="Toolbar">
          <FilterBy />
          {this.props.user !== "" ? (
            <p>Logged in as {this.props.user}</p>
          ) : (
            <Login changeState={this.changeState} />
          )}
          <SortBy />
        </div>
        <ArticlesList topic={this.props.topic} />
      </StyledArticlesPage>
    );
  }
}

export default ArticlesPage;
