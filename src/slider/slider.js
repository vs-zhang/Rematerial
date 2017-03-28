import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Slider extends Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    value: PropTypes.number,
    onChange: PropTypes.func,
    className: PropTypes.string,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
  };

  static defaultProps = {
    min: 0,
    className: '',
    max: 100,
    value: 0,
    step: 1,
    onChange: () => {},
    onMouseDown: () => {},
    onMouseUp: () => {},
  };

  constructor(props) {
    super(props);
    this.handleChange = ::this.handleChange;
  }

  handleChange(e) {
    const value = parseFloat(e.target.value);
    this.props.onChange(value);
  }

  render() {
    const { min, max, onMouseUp, onMouseDown, value, step, className } = this.props;
    const numAfterDec = 5;
    const range = max - min;
    const v = (value - min).toFixed(numAfterDec);
    const percentage = (v / range).toFixed(numAfterDec);
    const leftStyle = {
      flex: `${percentage} 1 0%`,
    };
    const rightStyle = {
      flex: `${1 - percentage} 1 0%`,
    };
    const classes = classNames('rmd-slider__container', className);
    return (
      <div className={classes}>
        <input
          type="range"
          className="rmd-slider"
          onChange={this.handleChange}
          onMouseDown={() => { onMouseDown(); }}
          onMouseUp={() => { onMouseUp(); }}
          value={value}
          min={min}
          max={max}
          step={step}
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
