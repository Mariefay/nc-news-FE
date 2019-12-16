import React from "react";
import * as api from "../api";
import { StyledCommentBox } from "./Styles/StyledCommentBox";
import CommentCard from "./CommentCard";

class CommentBox extends React.Component {
  state = {
    commentList: [],
    commentValue: "",
    postFailMsg: "",
    error : null
  };
  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    api.getCommentsByID(this.props.id).then(comments => {
      this.setState({ commentList: comments })
    }).catch(err => this.setState({error : err}));;
  };

  requestDelete = commentId => {
    const newCommentList = this.state.commentList.filter(
      comment => comment.comment_id !== commentId
    );
    this.setState({ commentList: newCommentList });
    api.deleteComment(commentId).catch(err => this.setState({error: err}));
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.commentValue === "") {
      this.setState({ postFailMsg: "Please enter a valid comment" });
    } else if (this.props.user === "") {
      this.setState({ postFailMsg: "Please login to post a comment" });
    } else {
      api
        .postComment(this.props.id, this.props.user, this.state.commentValue)
        .then(comment => {
          this.setState(prev => {
            return {
              commentList: [comment, ...prev.commentList],
              commentValue: "",
              postFailMsg: ""
            };
          });
        });
    }
  };
  handleChange = event => {
    this.setState({ commentValue: event.target.value });
  };

  render() {
    console.log(this.props.user);
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
        <p>{this.state.postFailMsg}</p>
        {this.state.commentList.map(comment => (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            requestDelete={this.requestDelete}
            user={this.props.user}
          />
        ))}
      </StyledCommentBox>
    );
  }
}

export default CommentBox;
