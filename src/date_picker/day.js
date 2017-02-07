import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Moment from 'moment';

class Day extends Component {
  static propsType = {
    day: PropTypes.object.isRequired,
    current: PropTypes.object.isRequired,
    month: PropTypes.number.isRequired,
    handleSelect: PropTypes.func.isRequired,
  };

  handleSelectDay(e) {
    this.props.handleSelect(e);
  }

  render() {
    const format = this.props.format;
    const dayClasses = classNames({
      "rmd-date-picker__day": true,
      "is-active": this.props.month === this.props.day.month(),
      "is-current":  this.props.day.format(format) === Moment().format(format),
      "is-selected": this.props.day.format(format) === this.props.current.format(format),
    });

    return(
      <div
        className={dayClasses}
        onClick={this.handleSelectDay.bind(this)}
        data-value={this.props.day.format(this.props.format)}
      >
        {this.props.day.date()}
      </div>
    )
  }
}

export default Day;
