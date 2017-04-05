import React, { Component, PropTypes } from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import _ from 'lodash';
import Week from './week';
import Icon from '../icon/icon';

class DatePicker extends Component {
  static propTypes = {
    year: PropTypes.number,
    month: PropTypes.number,
    defaultDate: PropTypes.instanceOf(Date),
    format: PropTypes.oneOf(['MM/DD/YYYY', 'DD/MM/YYYY', 'MM-DD-YYYY', 'DD-MM-YYYY']),
    onChange: PropTypes.func,
  };

  static defaultProps = {
    year: Moment().year(),
    month: Moment().month(),
    defaultDate: Moment().toDate(),
    format: 'MM/DD/YYYY',
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    const calendar = this.getCalendar(this.props.year, this.props.month);
    this.state = {
      year: this.props.year,
      month: this.props.month,
      current: Moment(this.props.defaultDate),
      isOpen: false,
      inputWidth: 0,
      calendar,
    };

    this.handleClickPrevMonth = ::this.handleClickPrevMonth;
    this.handleClickNextMonth = ::this.handleClickNextMonth;
    this.handleSelect = ::this.handleSelect;
    this.handleOnFocus = ::this.handleOnFocus;
    this.handleClose = ::this.handleClose;
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClose);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClose);
  }

  getCalendar = (year, month) => {
    const moment = extendMoment(Moment);
    const startDate = moment([year, month]);
    const firstDay = moment(startDate).startOf('month');
    const endDay = moment(startDate).endOf('month');
    const f = moment(firstDay).startOf('week');
    const l = moment(endDay).endOf('week');
    const calendarRange = moment.range(f, l);
    const daysInWeek = 7;
    const calendar = {};
    let count = 0;
    let key = 0;
    const range = Array.from(calendarRange.by('day'));
    _.forEach(range, (day) => {
      if ((count % daysInWeek) === 0) {
        key = count / daysInWeek;
        calendar[key] = [];
      }
      calendar[key].push(day);
      count += 1;
    });
    return calendar;
  };

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

  handleSelect(value) {
    this.setState({ current: Moment(value, this.props.format), isOpen: false });
    this.props.onChange(value);
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

  handleClose(e) {
    if (this.state.isOpen) {
      this.setState({ isOpen: this.container.contains(e.target) });
    }
  }

  handleOnFocus() {
    this.setState({ isOpen: true, inputWidth: this.input.offsetWidth });
  }

  render() {
    const calendarElements = _.values(this.state.calendar).map(week =>
      <Week
        week={week}
        key={week.toString()}
        month={this.state.month}
        current={this.state.current}
        format={this.props.format}
        handleSelect={this.handleSelect}
      />,
    );
    const months = Moment.months();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const dayHeaderElements = days.map(d =>
      <div key={d} className="rmd-date-picker__header-day-name">{d}</div>,
    );

    const arrowStyle = {
      left: this.state.inputWidth / 2,
    };

    return (
      <div className="rmd-date-picker" ref={(container) => { this.container = container; }}>
        <input
          type="text"
          className="rmd-date-picker__input"
          value={this.state.current.format(this.props.format)}
          onBlur={this.handleOnBlur}
          onFocus={this.handleOnFocus}
          ref={(input) => { this.input = input; }}
          readOnly
        />
        {this.state.isOpen &&
        <div>
          <span className="rmd-date-picker__arrow" style={arrowStyle} />
          <div className="rmd-date-picker__calendar-container">
            <div className="rmd-date-picker__header">
              <div className="rmd-date-picker__nav">
                <div className="rmd-date-picker__current-month">{this.state.year} {months[this.state.month]}</div>
                <button className="nav left" onClick={this.handleClickPrevMonth} >
                  <Icon name="keyboard_arrow_left" />
                </button>
                <button className="nav right" onClick={this.handleClickNextMonth} >
                  <Icon name="keyboard_arrow_right" />
                </button>
              </div>
              <div className="rmd-date-picker__header-days">
                {dayHeaderElements}
              </div>
            </div>
            {calendarElements}
          </div>
        </div>
        }
      </div>
    );
  }
}

export default DatePicker;
