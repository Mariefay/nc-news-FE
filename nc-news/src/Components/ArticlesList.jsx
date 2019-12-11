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
    if (prevProps.topic !== this.props.topic) {
      this.getArticles();
    }
    
  }

  getArticles = () => {
    api.getArticles(this.props.topic).then(articles => {
      this.setState({ articles: articles, isLoading: false });
    });
  };

  render() {
    console.log(this.props.topic)
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
