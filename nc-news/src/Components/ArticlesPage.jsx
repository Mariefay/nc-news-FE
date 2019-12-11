import React from "react";
import { StyledArticlesPage } from "./Styles/StyledArticlesPage";
import ArticlesList from "./ArticlesList";
import FilterBy from "./FilterBy";
import SortBy from './SortBy'

class ArticlesPage extends React.Component {
  state = {};

  render() {
    return (
      <StyledArticlesPage>
        <h1>Articles</h1>
        <div className="Toolbar">
        <FilterBy />
        <SortBy/></div>
        <ArticlesList topic={this.props.topic} />
      </StyledArticlesPage>
    );
  }
}

export default ArticlesPage;
