import React from "react";
import { StyledErrorPage } from "./Styles/StyledErrorPage";
class ErrorPage extends React.Component {
  state = {};

  render() {
    return (
      <StyledErrorPage>
        <h1>Oops Page not found</h1>
      </StyledErrorPage>
    );
  }
}

export default ErrorPage;
