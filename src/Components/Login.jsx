import React from "react";
import { StyledLogin } from "./Styles/StyledLogin";

class Login extends React.Component {
  state = {
    userSelected: ""
  };
  handleState = event => {
    this.props.changeStateUser(this.state.userSelected);
  };
  changeStateTemporary = event => {
    event.preventDefault();
    this.setState({ userSelected: event.target.innerText });
  };

  render() {
    return (
      <StyledLogin>
        <div className="dropdown">
          <button className="dropbtn">Login</button>
          <div className="dropdown-content">
            <button
              onMouseOver={this.changeStateTemporary}
              onClick={this.handleState}
            >
              grumpy19
            </button>
            <button
              onMouseOver={this.changeStateTemporary}
              onClick={this.handleState}
            >
              jessjelly
            </button>
            <button
              onMouseOver={this.changeStateTemporary}
              onClick={this.handleState}
            >
              tickle122
            </button>
            <button
              onMouseOver={this.changeStateTemporary}
              onClick={this.handleState}
            >
              happyamy2016
            </button>
            <button
              onMouseOver={this.changeStateTemporary}
              onClick={this.handleState}
            >
              cooljmessy
            </button>
            <button
              onMouseOver={this.changeStateTemporary}
              onClick={this.handleState}
            >
              weegembump
            </button>
          </div>
        </div>
      </StyledLogin>
    );
  }
}

export default Login;
