import React from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import { StyledArticleList } from "./Styles/StyledArticleList";

class ArticlesList extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    error: null
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
      }).catch(err => this.setState({error : err}));
  };

  render() {
    const { isLoading, err, articles } = this.state;
    if (isLoading) return <h2>Loading...</h2>;
    if (err) return <h1>{err.msg}</h1>;
    else {
      return (
        <StyledArticleList>
          {articles.map(article => (
            <ArticleCard key={article.article_id} article={article} />
          ))}
        </StyledArticleList>
      );
    }
  }
}

export default ArticlesList;
