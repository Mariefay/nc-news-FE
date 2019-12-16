import React from "react";
import { StyledArticlesPage } from "./Styles/StyledArticlesPage";
import ArticlesList from "./ArticlesList";
import FilterBy from "./FilterBy";
import SortBy from "./SortBy";
import Login from "./Login";
import * as api from "../api";
import ErrorPage from "./ErrorPage";

class ArticlesPage extends React.Component {
  state = {
    username: "",
    sortBy: null,
    orderBy: null,
    topicList: [],
    topicSlugs: [],
    error : null
  };

  componentDidMount() {
    this.getTopics();
  }

  getTopics = () => {
    api.getTopics().then(topics => {
      const slugs = topics.map(topic => topic.slug);
      this.setState({ topicList: topics, topicSlugs: slugs });
    }).catch(err => this.setState({error: err}));
  };

  changeStateUser = value => {
    this.props.changeUser(value);
    this.setState({ username: value });
  };

  changeStateSorting = (sortValue, orderValue) => {
    this.setState({ sortBy: sortValue, orderBy: orderValue });
  };

  render() {
    const { topic } = this.props;
    const { sortBy, orderBy, username, topicSlugs, topicList } = this.state;
    return (
      <div>
        {topicSlugs.indexOf(topic) === -1 && topic !== undefined ? (
          <ErrorPage msg={`${topic} is not a topic`} />
        ) : (
          <StyledArticlesPage>
            <h1>Articles</h1>

            <div className="Toolbar">
              <FilterBy topics={topicList} />
              {username !== "" ? (
                <p>Logged in as {username}</p>
              ) : (
                <Login changeStateUser={this.changeStateUser} />
              )}
              <SortBy changeStateSorting={this.changeStateSorting} />
            </div>

            <ArticlesList topic={topic} sortBy={sortBy} orderBy={orderBy} />
          </StyledArticlesPage>
        )}
      </div>
    );
  }
}

export default ArticlesPage;
