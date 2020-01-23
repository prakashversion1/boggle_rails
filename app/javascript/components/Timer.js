import React, { Component } from "react";
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      class: "black"
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>
          Time remaining :<b className={this.state.class}>{count}</b>
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
      if (this.state.count == 30) {
        console.log(`30 second has been reached`);
        this.setState({
          class: "warning-red"
        });
      }
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  };
}
export default Timer;
