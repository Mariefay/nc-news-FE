import React from "react";
import CommentsToggler from "./CommentsToggler";
import Votes from "./Votes";
import { StyledFullArticle } from "./Styles/StyledFullArticle";
import { Link } from "@reach/router";
import * as api from "../api";

const FullArticle = ({ article, user }) => {
  const updatingVotes = value => {
    api.updateVotes(article.article_id, value);
  };

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
        <Votes votes={article.votes} updatingVotes={updatingVotes} />

        <p className="created_at">{article.created_at.slice(0, 10)}</p>
      </div>
      <CommentsToggler
        className="commentToggler"
        id={article.article_id}
        user={user}
      />
    </StyledFullArticle>
  );
};

export default FullArticle;
