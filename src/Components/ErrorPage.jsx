import React from "react";
import { StyledErrorPage } from "./Styles/StyledErrorPage";
class ErrorPage extends React.Component {
  state = {};

  render() {
    return (
      <StyledErrorPage>
        <h1>Oops, Page not found</h1>
        {this.props.msg && <p>{this.props.msg}</p>}
      </StyledErrorPage>
    );
  }
}

export default ErrorPage;
