import React from "react";
import * as api from "../api";
import { StyledCommentBox } from "./Styles/StyledCommentBox";
import CommentCard from "./CommentCard";

class CommentBox extends React.Component {
  state = {
    commentList: [],
    username: this.props.user,
    commentValue: "Type your comment here.",
    deleted: false
  };
  componentDidMount() {
    this.getComments();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.deleted !== prevState.deleted) {
      this.getComments();
    }
  }

  getComments = () => {
    api.getCommentsByID(this.props.id).then(comments => {
      this.setState({ commentList: comments });
    });
  };
  deleteComm = commentId => {
    api.deleteComment(commentId).then(() =>
      this.setState(prev => {
        return { deleted: !prev.deleted };
      })
    );
  };
  requestDelete = commentId => {
    this.deleteComm(commentId);
  };

  handleSubmit = event => {
    event.preventDefault();
    api
      .postComment(this.props.id, this.state.username, this.state.commentValue)
      .then(comment => {
        this.setState(prev => {
          return {
            commentList: [comment, ...prev.commentList],
            commentValue: "Type your comment here."
          };
        });
      });
  };
  handleChange = event => {
    this.setState({ commentValue: event.target.value });
  };

  render() {
    return (
      <StyledCommentBox>
        <form className="form" onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.commentValue}
            onChange={this.handleChange}
            className="comment"
          ></textarea>

          <button className="submitButt" type="submit">
            Submit
          </button>
        </form>
        {this.state.commentList.map(comment => (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            requestDelete={this.requestDelete}
            user = {this.props.user}
          />
        ))}
      </StyledCommentBox>
    );
  }
}

export default CommentBox;
