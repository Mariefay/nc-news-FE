import styled from "styled-components";

export const StyledFullArticle = styled.div`
  width: 70%;
  border: 2px solid black;
  margin-top: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Courier new";
  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 20px;
    color: rgb(166, 3, 66);
    font-weight: bolder;
    transition: 0.5s;
    font-size: 18px;
    .topic {
      font-style: italic;
    }
    .author:hover {
      cursor: pointer;
      color: black;
    }
    a {
      text-decoration: none;
      color: rgb(166, 3, 66);
    }
  }
  .bot {
    font-size: 18px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 20px;
    color: rgb(166, 3, 66);
    font-weight: bolder;
    align-items: center;
    .commentToggler {
      margin-bottom: 20px;
    }
  }
  .content {
    padding: 15px 20px 50px 20px;
  }
  .buttonDiv {
    padding: 10px;
  }
  .votesButt {
    border-radius: 10px;
    margin-left: 10px;
    border: 1px solid rgb(166, 3, 66);
  }
`;
