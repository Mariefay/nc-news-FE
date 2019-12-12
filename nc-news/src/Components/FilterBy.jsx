import React from "react";
import * as api from "../api";
import { StyledFilterBy } from "./Styles/StyledFilterBy";
import {Link} from '@reach/router'

class FilterBy extends React.Component {
  state = {
    button: false,
    topics: []
  };
  componentDidMount() {
    this.getTopics();
  }

  getTopics = () => {
    api.getTopics().then(topics => {
      this.setState({ topics: topics });
    });
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
              <Link to="/articles">all articles</Link>
            </li>
            {this.state.topics.map(topic => (
              <li key = {topic.slug}><Link to={`/${topic.slug}`}>{topic.slug}</Link></li>
            ))}
          </ul>
        </div>
      </StyledFilterBy>
    );
  }
}

export default FilterBy;
