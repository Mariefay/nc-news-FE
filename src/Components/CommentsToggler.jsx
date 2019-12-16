import React from "react";
import CommentBox from "./CommentBox";
import { StyledCommentToggler } from "./Styles/StyledCommentToggler";
class CommentsToggler extends React.Component {
  state = {
    showContent: false
  };
  changeState = () => {
    this.setState(prev => {
      return { showContent: !prev.showContent };
    });
  };
  render() {
    const { showContent } = this.state;
    return (
      <StyledCommentToggler>
        <button className="commentsButton" onClick={this.changeState}>
          {showContent ? (
            <p>
              <i className="fa fa-comments"></i> Hide Comments
            </p>
          ) : (
            <p>
              <i className="fa fa-comments"></i> Show Comments
            </p>
          )}
        </button>
        {showContent && (
          <CommentBox id={this.props.id} user={this.props.user} />
        )}
      </StyledCommentToggler>
    );
  }
}

export default CommentsToggler;
