import React from "react";
import * as api from "../api";
import { StyledCommentBox } from "./Styles/StyledCommentBox";
import CommentCard from "./CommentCard";

class CommentBox extends React.Component {
  state = {
    commentList: []
  };
  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    api.getCommentsByID(this.props.id).then(comments => {
      this.setState({ commentList: comments });
    });
  };
    handleSubmit = (event) => {
        const value = event.target.value;
        console.log(value)
        event.preventDefault();
        this.setState({})
    }

  render() {
    return (
      <StyledCommentBox>
        {this.state.commentList.map(comment => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
        <form className="form" onSubmit={this.handleSubmit}>
          <textarea className="comment">Type your comment here.</textarea>

          <button className="submitButt" type="submit">Submit</button>
        </form>
      </StyledCommentBox>
    );
  }
}

export default CommentBox;
