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
    const { user, isLoading } = this.state;
    return (
      <StyledUserPage>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <div className="userCard">
            <img src={user.avatar_url} alt="User Avatar"></img>
            <h2>{user.username}</h2>
            <h5>{user.name}</h5>
          </div>
        )}
      </StyledUserPage>
    );
  }
}

export default UserPage;
