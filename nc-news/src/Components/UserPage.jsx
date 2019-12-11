import React from "react";
import { StyledUserPage } from "./Styles/StyledUserPage";
import * as api from "../api";

class UserPage extends React.Component {
  state = {
    user: {},
    isLoading: true
  };
  getUser = () =>
    api.getUser(this.props.username).then(user => {
      this.setState({ user: user, isLoading: false });
    });
  componentDidMount() {
    this.getUser();
  }
  render() {
    return (
      <StyledUserPage>
        {this.state.isLoading ? (
          <h2>Loading...</h2>
            ) : (
                    
                    <div className="userCard">
            <img src={this.state.user.avatar_url} alt="User Avatar"></img>
            <h2>{this.state.user.username}</h2>
            <h4>{this.state.user.name}</h4>
          </div>
        )}
      </StyledUserPage>
    );
  }
}

export default UserPage;
