import React, { Component } from 'react';
import { ProgressLinear } from 'rematerial';

class ProgressLinearExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0.5,
    };
    this.calValue = ::this.calValue;
  }

  componentDidMount() {
    this.count = 0;
    this.interval = setInterval(this.calValue, 200);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  calValue() {
    const { value } = this.state;
    if (value >= 1) {
      this.setState({ value: 0.5 });
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
          <h5>Determinate Progress Linear Bar</h5>
          <ProgressLinear type="determinate" value={this.state.value} />
        </div>

        <div>
          <h5>Indeterminate Progress Linear Bar</h5>
          <ProgressLinear type="indeterminate" />
        </div>
      </div>
    );
  }
}

export default ProgressLinearExample;
