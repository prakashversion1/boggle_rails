import React, { Component } from "react";

class CurrentWord extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.getUserDetails(evt.target.userName.value);
  };

  render() {
    return (
      <div className="user-screen">
        <form onSubmit={this.handleSubmit}>
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
export default CurrentWord;
