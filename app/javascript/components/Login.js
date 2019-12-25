import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.getUserDetails(evt.target.userName.value);
  }

  render() {
    return (
      <div className="user-screen">
        <form onSubmit={evt => this.handleSubmit(evt)}>
          <label className="form-label">Enter Name:</label>
          <input className="form-input" type="text" name="userName" required />
          <button type="submit" className="form-button submit-button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
