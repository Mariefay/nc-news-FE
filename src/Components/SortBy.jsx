import React from "react";
import { StyledSortBy } from "./Styles/StyledSortBy";

const SortBy = ({ changeStateSorting }) => {
  const changeStateAsc = event => {
    const { value } = event.target;
    const order = event.target.name;
    changeStateSorting(value, order);
  };

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
            <button name="asc" value="created_at" onClick={changeStateAsc}>
              Date - Asc
            </button>
          </li>
          <li>
            <button name="desc" value="created_at" onClick={changeStateAsc}>
              Date - Desc
            </button>
          </li>
          <li>
            <button name="asc" value="comment_count" onClick={changeStateAsc}>
              Comment - Asc
            </button>
          </li>
          <li>
            <button name="desc" value="comment_count" onClick={changeStateAsc}>
              Comment - Desc
            </button>
          </li>
          <li>
            <button name="asc" value="votes" onClick={changeStateAsc}>
              Votes- Asc
            </button>
          </li>

          <li>
            <button name="desc" value="votes" onClick={changeStateAsc}>
              Votes- Desc
            </button>
          </li>
        </ul>
      </div>
    </StyledSortBy>
  );
};

export default SortBy;
