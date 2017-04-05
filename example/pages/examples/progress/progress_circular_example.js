import React, { Component } from 'react';
import { ProgressCircular } from 'rematerial';

class ProgressCircularExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0.3,
    };
    this.calValue = ::this.calValue;
  }

  componentDidMount() {
    this.count = 0;
    this.interval = setInterval(this.calValue, 60);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  calValue() {
    const { value } = this.state;
    if (value >= 1) {
      this.setState({ value: 0.3 });
      this.count = 0;
    } else {
      this.setState({ value: value + 0.01 });
      this.count += 1;
    }
  }

  render() {
    return (
      <div>
        <div>
          <h5>Determinate Progress Circular</h5>
          <ProgressCircular value={this.state.value} type="determinate" />
        </div>

        <div>
          <h5>Indeterminate Progress Circular</h5>
          <ProgressCircular type="indeterminate" />
        </div>

      </div>
    );
  }
}

export default ProgressCircularExample;
