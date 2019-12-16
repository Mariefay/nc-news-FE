import styled from "styled-components";

export const StyledArticleCard = styled.li`
  list-style-type: none;
  width: 70%;
  margin: 15px 0px 0px 0px;
  border: 2px solid black;
  border-radius: 10px;
  transition: 0.2s;
  :hover {
    background-color: rgb(166, 3, 66);
    cursor: pointer;
  }
  a {
    color: black;
    text-decoration: none;
  }
`;
