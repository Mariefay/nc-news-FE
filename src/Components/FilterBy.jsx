import React from "react";
import { StyledFilterBy } from "./Styles/StyledFilterBy";
import { Link } from "@reach/router";

class FilterBy extends React.Component {
  state = {
    button: false
  };

  showOptions = () => {
    this.setState(prev => {
      return { button: !prev.button };
    });
  };

  render() {
    return (
      <StyledFilterBy>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            Filter By
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link to="/">all articles</Link>
            </li>
            {this.props.topics.map(topic => (
              <li key={topic.slug}>
                <Link to={`/articles/topics/${topic.slug}`}>{topic.slug}</Link>
              </li>
            ))}
          </ul>
        </div>
      </StyledFilterBy>
    );
  }
}

export default FilterBy;
