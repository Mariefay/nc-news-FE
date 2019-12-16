import styled from "styled-components";

export const StyledLogin = styled.div`
  .dropbtn {
    background-color: rgb(166, 3, 66);
    font-size: 15px;
    font-weight: bolder;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    border-color: #2e6da4;
    border-radius: 4px;
    cursor: pointer;
  }
  .dropbtn:hover {
    background-color: #286090;
  }

  .dropdown {
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 19;
  }

  .dropdown-content button {
    width: 100%;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border: none;
    background-color: #f1f1f1;
  }
  .dropdown-content button:hover {
    background-color: #ddd;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
`;
