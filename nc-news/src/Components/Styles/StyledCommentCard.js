import styled from "styled-components";

export const StyledCommentCard = styled.ul`
  font-weight: normal;
  list-style-type: none;
  align-self: flex-start;
  border-top: 1px solid;
  border-left: 1px solid grey;
  margin-top : 20px;
  width: 90%;
  li {
    display: flex;
    flex-direction: row;
    text-align: justify;
    padding-top: 20px;
   
    color: black;
  }
  a:hover {
    cursor: pointer;
    color: rgb(166, 3, 66);
  }
  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
  .fa {
    padding-right: 5px;
  }
  .votesDiv{
    display : flex;
    flex-direction : row;
    font-weight : bolder;
  }
  .CommVotesButt {
    border-radius : 10px;
    margin-right : 10px;
    margin-left : 10px;
  }
  
`;
