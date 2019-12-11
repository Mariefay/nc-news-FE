import styled from "styled-components";

export const StyledUserPage = styled.div`
  margin: 150px 0 100px 0   ;
  font-family: "Courier new";
  display: flex;
  flex-direction: column;
  justify-content: center;
  .userCard {
      
    border: 2px solid black;
    border-radius: 10px;
    padding: 40px 100px;
    align-self : center;
    background: linear-gradient(to bottom, rgb(166,3,66) 55%, white 45%);
    /* background-color : rgb(166,3,66); */
  }
  img {
    border : 2px solid black;
    border-radius : 50%;
    max-height: 300px;
    max-width: 300px;
  }
`;
