import React, { Component, PropTypes } from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import Week from './week';
import DatePickerHeader from './header';
import Icon from '../icon/icon';

class DatePicker extends Component {
  static propsTypes = {
    year: PropTypes.number,
    month: PropTypes.number,
    format: PropTypes.oneOf(['MM/DD/YYYY', 'DD/MM/YYYY','MM-DD-YYYY', 'DD-MM-YYYY']),
  };

  static defaultProps = {
    year: Moment().year(),
    month: Moment().month(),
    format: 'MM/DD/YYYY',
  };

  constructor(props) {
    super(props);
    const calendar = this.getCalendar(this.props.year, this.props.month);
    this.state = {
      year: this.props.year,
      month: this.props.month,
      current: Moment(),
      calendar: calendar,
    };

    this.handleClickPrevMonth = ::this.handleClickPrevMonth;
    this.handleClickNextMonth = ::this.handleClickNextMonth;
    this.handleSelect = ::this.handleSelect;
  }

  handleClickPrevMonth() {
    const date = Moment([this.state.year, this.state.month]);
    const prevDate = date.subtract(1, 'M');
    this.updateCurrentMonth(prevDate);
  }

  handleClickNextMonth() {
    const date = Moment([this.state.year, this.state.month]);
    const nextDate = date.add(1, 'M');
    this.updateCurrentMonth(nextDate);
  }

  handleSelect(e) {
    const value = e.target.getAttribute('data-value');
    this.setState({ current: Moment(value, this.props.format) });
  }

  updateCurrentMonth(date) {
    const year = date.year();
    const month = date.month();
    const calendar = this.getCalendar(year, month);
    this.setState({
      year,
      month,
      calendar,
    });
  }

  getCalendar(year, month) {
    const moment = extendMoment(Moment);
    const startDate = moment([year, month]);
    const firstDay = moment(startDate).startOf('month');
    const endDay = moment(startDate).endOf('month');
    const f = moment(firstDay).startOf('week');
    const l = moment(endDay).endOf('week');
    const calendarRange = moment.range(f, l);
    const daysInWeek = 7;
    let calendar = {};
    let count = 0;
    let key = 0;
    for (let day of calendarRange.by('day')) {
      if ((count % daysInWeek) === 0) {
        key = count / daysInWeek;
        calendar[key] = [];
      }
      calendar[key].push(day);
      count++;
    }
    return calendar;
  }

  render() {
    console.log('render');
    const calendarElements = Object.values(this.state.calendar).map((week) => {
      return (
        <Week
          week={week}
          key={week.toString()}
          month={this.state.month}
          current={this.state.current}
          format={this.props.format}
          handleSelect={this.handleSelect}
        />
      );
    });

    const months = Moment.months();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const dayHeaderElements = days.map((d) => {
      return <div key={d} className="rmd-date-picker__header-day-name">{d}</div>;
    });

    return (
      <div className="rmd-date-picker">
        <div className="rmd-date-picker__header">
          <div>{this.state.current.format(this.props.format)}</div>
          <div className="rmd-date-picker__current-month">{this.state.year} {months[this.state.month]}</div>
          <div className="rmd-date-picker__nav">
            <a className="nav left" onClick={this.handleClickPrevMonth}>
              <Icon name="keyboard_arrow_left" />
            </a>
            <a className="nav right" onClick={this.handleClickNextMonth}>
              <Icon name="keyboard_arrow_right" />
            </a>
          </div>
          <div className="rmd-date-picker__header-days">
            {dayHeaderElements}
          </div>
        </div>
        {calendarElements}
      </div>
    );
  }
}

export default DatePicker;
