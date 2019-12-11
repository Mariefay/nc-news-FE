import styled from "styled-components";

export const StyledHeader = styled.nav`
transition: top 0.3s;
position : fixed;
top: 0;
width: 100%;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0 15px;
    overflow: hidden;
    background-color: rgb(166, 3, 66);
  }
  li {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    float: left;
    font-family : "Courier new";
    font-size : 25px;
  }
  .right {
    float: right;
  }
  a{
    color : white;
    text-decoration: none;
  }
`;
