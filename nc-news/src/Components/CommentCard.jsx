import React from "react";
import { StyledCommentCard } from "./Styles/StyledCommentCard";
import { Link } from "@reach/router";
import * as api from "../api";

class CommentCard extends React.Component {
  state = {
    votes: 0,
    button: true
  };

  changeVotesComm = value => {
    this.setState(prev => {
      return { votes: prev.votes + value, button: false };
    });
    api.updateVotesComments(this.props.comment.comment_id, value)
  };

  render() {
    return (
      <StyledCommentCard>
        <li className="author">
          <Link to={`/users/${this.props.comment.author}`}>
            {" "}
            <i className="fa fa-user-circle"></i> {this.props.comment.author}
          </Link>
        </li>
        <li>{this.props.comment.body}</li>
        <li className="votesDiv">
          <div className="CommButtonDiv">
            {this.state.button && (
              <button
                className="CommVotesButt"
                onClick={event => this.changeVotesComm(1)}
              >
                <i className="fa fa-thumbs-up"></i>
              </button>
            )}
            {this.props.comment.votes + this.state.votes}
            {this.state.button && (
              <button
                className="CommVotesButt"
                onClick={event => this.changeVotesComm(-1)}
              >
                <i className="fa fa-thumbs-down"></i>
              </button>
            )}{" "}
          </div>
        </li>
      </StyledCommentCard>
    );
  }
}

export default CommentCard;
