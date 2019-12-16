import React from "react";
import { StyledErrorPage } from "./Styles/StyledErrorPage";
const ErrorPage = (props) => {
  return (
    <StyledErrorPage>
      <h1>Oops, Page not found</h1>
      {props.msg && <p>{props.msg}</p>}
    </StyledErrorPage>
  );
};

export default ErrorPage;
