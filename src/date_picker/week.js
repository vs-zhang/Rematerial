import React, { Component, PropTypes } from 'react';
import Moment from 'moment';
import Day from './day';

class Week extends Component {
  static propTypes = {
    current: PropTypes.instanceOf(Moment).isRequired,
    month: PropTypes.number.isRequired,
    week: PropTypes.arrayOf(PropTypes.object).isRequired,
    format: PropTypes.oneOf(['MM/DD/YYYY', 'DD/MM/YYYY', 'MM-DD-YYYY', 'DD-MM-YYYY']),
    handleSelect: PropTypes.func,
  };

  static defaultProps = {
    format: 'MM/DD/YYYY',
    handleSelect: () => {},
  };

  render() {
    const weekElements = this.props.week.map(day =>
      <Day
        day={day}
        key={day.toString()}
        format={this.props.format}
        month={this.props.month}
        current={this.props.current}
        handleSelect={this.props.handleSelect}
      />,
    );

    return (
      <div className="rmd-date-picker__week">
        {weekElements}
      </div>
    );
  }
}

export default Week;
