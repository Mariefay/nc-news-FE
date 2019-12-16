import React from "react";

class Votes extends React.Component {
  state = {
    votes: 0,
    button: true
  };
  changeVotes = value => {
    this.setState(prev => {
      return { votes: prev.votes + value, button: false };
    });
    this.props.updatingVotes(value);
  };
  render() {
    return (
      <div className="votes">
        Votes : {this.props.votes + this.state.votes}{" "}
        {this.state.button && (
          <div className="buttonDiv">
            <button
              className="votesButt"
              onClick={event => this.changeVotes(1)}
            >
              <i className="fa fa-thumbs-up"></i>
            </button>
            <button
              className="votesButt"
              onClick={event => this.changeVotes(-1)}
            >
              <i className="fa fa-thumbs-down"></i>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Votes;
