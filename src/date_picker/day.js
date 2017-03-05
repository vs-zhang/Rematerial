import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Moment from 'moment';

class Day extends Component {
  static propTypes = {
    day: PropTypes.instanceOf(Moment).isRequired,
    current: PropTypes.instanceOf(Moment).isRequired,
    month: PropTypes.number.isRequired,
    handleSelect: PropTypes.func.isRequired,
    format: PropTypes.oneOf(['MM/DD/YYYY', 'DD/MM/YYYY', 'MM-DD-YYYY', 'DD-MM-YYYY']),
  };

  static defaultProps = {
    format: 'MM/DD/YYYY',
  };

  constructor(props) {
    super(props);
    this.handleSelectDay = ::this.handleSelectDay;
  }

  handleSelectDay() {
    const value = this.day.getAttribute('data-value');
    this.props.handleSelect(value);
  }

  render() {
    const format = this.props.format;
    const dayValue = this.props.day.format(format);
    const dayClasses = classNames({
      'rmd-date-picker__day': true,
      'is-active': this.props.month === this.props.day.month(),
      'is-current': dayValue === Moment().format(format),
      'is-selected': dayValue === this.props.current.format(format),
    });

    return (
      <div className={dayClasses} data-value={dayValue} ref={(day) => { this.day = day; }}>
        <button onClick={this.handleSelectDay}>{this.props.day.date()}</button>
      </div>
    );
  }
}

export default Day;
