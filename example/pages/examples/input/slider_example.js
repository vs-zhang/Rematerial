import React, { Component, PropTypes } from 'react';
import { Slider } from 'rematerial';

class SliderExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 20,
    };

    this.handleChangeSlider = ::this.handleChangeSlider;
  }

  handleChangeSlider(value) {
    this.setState({ sliderValue: value });
  }

  render() {
    const style = {
      width: 500,
    };

    return (
      <div style={style}>
        <Slider value={this.state.sliderValue} onChange={this.handleChangeSlider} />
        <p>The value of slide is {this.state.sliderValue}</p>
      </div>
    )
  }
}

export default SliderExample;
