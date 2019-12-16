import React from "react";
import { Link } from "@reach/router";
import { StyledHeader } from "./Styles/StyledHeader";

const Header = () => {
  return (
    <StyledHeader className="navbar">
      <ul>
        <li>NC-NEWS</li>

        <li className="right">
          <Link to="/articles">
            <i className="fa fa-fw fa-home"></i>Home
          </Link>
        </li>
      </ul>
    </StyledHeader>
  );
};

export default Header;
