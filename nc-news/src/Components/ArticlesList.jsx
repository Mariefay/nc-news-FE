import React from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import { StyledArticleList } from "./Styles/StyledArticleList";

class ArticlesList extends React.Component {
  state = {
    articles: [],
    isLoading: true
  };
  componentDidMount() {
    this.getArticles();
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.topic !== this.props.topic ||
      prevProps.sortBy !== this.props.sortBy ||
      prevProps.orderBy !== this.props.orderBy
    ) {
      this.getArticles();
    }
  }

  getArticles = () => {
    api
      .getArticles(this.props.topic, this.props.sortBy, this.props.orderBy)
      .then(articles => {
        this.setState({ articles: articles, isLoading: false });
      });
  };

  render() {
    if (this.state.isLoading) return <h2>Loading...</h2>;
    else {
      return (
        <StyledArticleList>
          {this.state.articles.map(article => (
            <ArticleCard key={article.article_id} article={article} />
          ))}
        </StyledArticleList>
      );
    }
  }
}

export default ArticlesList;
