import React, { Component } from "react";
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>
          Time remaining : <b>{count}</b> sec
        </h2>
      </div>
    );
  }

  componentDidMount() {
    const { startCount } = this.props;
    this.setState({
      count: startCount
    });
    this.doIntervalChange();
  }

  doIntervalChange = () => {
    this.myInterval = setInterval(() => {
      if (this.state.count == 1) {
        this.props.handleTimeUp();
        clearInterval(this.myInterval);
      }
      const newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  };
}
export default Timer;
