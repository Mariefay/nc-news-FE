import React from "react";
import CommentsToggler from "./CommentsToggler";
import { StyledFullArticle } from "./Styles/StyledFullArticle";
import { Link } from "@reach/router";
import * as api from '../api'

class FullArticle extends React.Component {
  state = {
    votes: 0,
    button : true
  };

  changeVotes = value => {
    this.setState(prev => {
      return { votes: prev.votes + value, button : false };
    });
    api.updateVotes(this.props.article.article_id, value)
    
  };
  render() {
    const { article } = this.props;
   
    return (
      <StyledFullArticle>
        <div className="top">
          <Link to={`/users/${article.author}`}>
            <p className="author">
              <i className="fa fa-user-circle"></i> {article.author}
            </p>
          </Link>
          <p className="topic">{article.topic}</p>
        </div>

        <div className="content">
          <h2>{article.title}</h2>
          <p>{article.body}</p>
        </div>

        <div className="bot">
          <div className="votes">
            Votes : {article.votes + this.state.votes}{" "}
            {this.state.button && <div className="buttonDiv">
              <button className="votesButt" onClick={event => this.changeVotes(1)}><i className="fa fa-thumbs-up"></i></button>
              <button className="votesButt" onClick={event => this.changeVotes(-1)}><i className="fa fa-thumbs-down"></i></button>
              </div>}</div>

          <p className="created_at">{article.created_at}</p>
        </div>
        <CommentsToggler className="commentToggler" id={article.article_id} />
      </StyledFullArticle>
    );
  }
}

export default FullArticle;
