import React from "react";
import { StyledSortBy } from "./Styles/StyledSortBy";

const SortBy = ({sortState})=> {
  

  const changeStateAsc = event => {
    const {value}= event.target
    sortState(value, "asc");
  };
  const changeStateDesc = event => {
    const {value}= event.target
    sortState(value, "desc");
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
              <button value="created_at" onClick={changeStateAsc}>
                Date - Asc
              </button>
            </li>
            <li>
              <button value="created_at" onClick={changeStateDesc}>
                Date - Desc
              </button>
            </li>
            <li>
              <button value="comment_count" onClick={changeStateAsc}>
                Comment - Asc
              </button>
            </li>
            <li>
              <button value="comment_count" onClick={changeStateDesc}>
                Comment - Desc
              </button>
            </li>
            <li>
              <button value="votes" onClick={changeStateAsc}>
                Votes- Asc
              </button>
            </li>

            <li>
              <button value="votes" onClick={changeStateDesc}>
                Votes- Desc
              </button>
            </li>
          </ul>
        </div>
      </StyledSortBy>
    );
  }


export default SortBy;
