import React from "react";
import { StyledLogin } from "./Styles/StyledLogin";

class Login extends React.Component {
  state = {
    userSelected: ""
  };
  handleState = event => {
    this.setState({ userSelected: event.target.innerText });
    this.props.changeState(this.state.userSelected);
  };

  render() {
    return (
      <StyledLogin>
        <div className="dropdown">
          <button className="dropbtn">Login</button>
          <div className="dropdown-content">
            <button onClick={this.handleState}>grumpy19</button>
            <button onClick={this.handleState}>jessjelly</button>
            <button onClick={this.handleState}>tickle122</button>
            <button onClick={this.handleState}>happyamy2016</button>
            <button onClick={this.handleState}>cooljmessy</button>
            <button onClick={this.handleState}>weegembump</button>
          </div>
        </div>
      </StyledLogin>
    );
  }
}

export default Login;
