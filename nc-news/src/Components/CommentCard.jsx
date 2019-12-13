import React from "react";
import { StyledCommentCard } from "./Styles/StyledCommentCard";
import { Link } from "@reach/router";
import * as api from "../api";
import Votes from './Votes'

const CommentCard = ({comment, requestDelete, user}) => {
  

  const changeVotesComm = value => {
    api.updateVotesComments(comment.comment_id, value)
  };

  const removeComment = (event) => {
    event.preventDefault()
    requestDelete(comment.comment_id)
  }

  
    return (
      <StyledCommentCard>
        <li className="author">
          <Link to={`/users/${comment.author}`}>
            {" "}
            <i className="fa fa-user-circle"></i> {comment.author}
          </Link>
        </li>
        <li>{comment.body}</li>
        <li className="votesDiv">
          <Votes votes={comment.votes} upVotes={changeVotesComm}/>
        </li>
        {comment.author === user &&
          <li><button className="delete" onClick={removeComment}>Delete</button></li>}
      </StyledCommentCard>
    );
  }


export default CommentCard;
