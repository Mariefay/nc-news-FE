import React from "react";
import { StyledArticlesPage } from "./Styles/StyledArticlesPage";
import ArticlesList from "./ArticlesList";
import FilterBy from "./FilterBy";
import SortBy from "./SortBy";
import Login from "./Login";

class ArticlesPage extends React.Component {
  state = {
    userSelected: "",
    sortBy: null,
    orderBy : null
  };

  changeState = value => {
    this.setState({ userSelected: value });
    this.props.changeUser(this.state.userSelected);
  };

  sortState = (sortValue, orderValue) => {
    this.setState({sortBy : sortValue, orderBy: orderValue})
  }


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
          <SortBy sortState={this.sortState}/>
        </div>
        <ArticlesList topic={this.props.topic} sortBy={this.state.sortBy} orderBy={this.state.orderBy}/>
      </StyledArticlesPage>
    );
  }
}

export default ArticlesPage;
