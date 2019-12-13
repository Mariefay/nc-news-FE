import React from "react";
import { StyledSortBy } from './Styles/StyledSortBy'
import {Link} from '@reach/router'

class SortBy extends React.Component {
  state = {};
  render() {
      return (
        <StyledSortBy>
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
        >
          Sort By
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link to="/">Date</Link>
          </li>
          <li>
            <Link to="/">Comment</Link>
          </li>
          <li>
            <Link to="/">Votes</Link>
          </li>
        </ul>
      </div></StyledSortBy>
    );
  }
}

export default SortBy;
