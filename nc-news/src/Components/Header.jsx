import React from "react";
import { Link } from "@reach/router";
import { StyledHeader } from "./Styles/StyledHeader";

class Header extends React.Component {
  state = {};

  render() {
    return (
      <StyledHeader className="navbar">
        <ul>
          <li>NC-NEWS</li>
          {/* <li className="right down">
            <i className="fa fa-fw fa-user"></i>Login
          </li> */}

          <li className="right">
            <Link to="/articles">
              <i className="fa fa-fw fa-home"></i>Home
            </Link>
          </li>
        </ul>
      </StyledHeader>
    );
  }
}

export default Header;
