import React, { Component, PropTypes } from 'react';

class Slider extends Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    value: PropTypes.number,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    min: 0,
    max: 100,
    value: 0,
    step: 1,
  };

  constructor(props) {
    super(props);
    const { min, max } = this.props;
    const range = max - min;

    this.state = {
      value: this.props.value || max - (range / 2),
    };

    this.handleChange = ::this.handleChange;
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(e, value);
    }
  }

  render() {
    const { min, max } = this.props;
    const range = max - min;
    const v = this.state.value - min;
    const percentage = v / range;
    const leftStyle = {
      flex: `${percentage} 1 0%`,
    };
    const rightStyle = {
      flex: `${1 - percentage} 1 0%`,
    };

    return (
      <div className="rmd-slider__container">
        <input
          type="range"
          className="rmd-slider"
          onChange={this.handleChange}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          value={this.state.value}
        />

        <div className="rmd-slider__background">
          <div className="rmd-slider__background-left" style={leftStyle} />
          <div className="rmd-slider__background-right" style={rightStyle} />
        </div>
      </div>
    );
  }
}

export default Slider;
