import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Slider extends Component {
  static propTypes = {
    autoHideThumb: PropTypes.bool,
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
    autoHideThumb: false,
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
    this.state = {
      isHideThumb: this.props.autoHideThumb,
    };
    this.handleChange = ::this.handleChange;
  }

  handleChange(e) {
    const value = parseFloat(e.target.value);
    this.props.onChange(value);
  }

  handleMouseDown = () => {
    if (this.props.autoHideThumb) {
      this.setState({ isHideThumb: false });
    }
    this.props.onMouseDown();
  };

  handleMouseUp = () => {
    if (this.props.autoHideThumb) {
      this.setState({ isHideThumb: true });
    }
    this.props.onMouseUp();
  };

  render() {
    const { min, max, value, step, className } = this.props;
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
    const inputClasses = classNames({
      'rmd-slider': true,
      'auto-hide': this.state.isHideThumb,
    });
    return (
      <div className={classes}>
        <input
          type="range"
          className={inputClasses}
          onChange={this.handleChange}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
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
