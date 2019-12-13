import styled from "styled-components";

export const StyledArticlesPage = styled.div`
  padding: 120px 0px 0px 0px;
  font-family: "Courier new";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index : 0;

  .Toolbar {
    padding-top: 2%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  

    p {
      font-weight: bolder;
      font-size: 15px;
    }
    @media only screen and (max-width: 600px) {
  p {
   width: 150px;
   margin-bottom : 0;
  }
}
  }
`;
