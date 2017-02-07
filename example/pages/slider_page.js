import React, { Component, PropTypes } from 'react';
import { Slider } from 'rematerialize';

class SliderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 20,
    };

    this.handleChangeSlider = ::this.handleChangeSlider;
  }

  handleChangeSlider(e, value) {
    this.setState({ sliderValue: value });
  }

  render() {
    return (
      <div>
        <Slider
          value={this.state.sliderValue}
          onChange={this.handleChangeSlider}
        />
        <p>The value of slide is {this.state.sliderValue}</p>
      </div>
    )
  }
}

export default SliderPage;
