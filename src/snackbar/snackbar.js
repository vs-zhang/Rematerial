import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Snackbar extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    duration: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const snackbarClass = classNames({
      'rmd-snackbar': true,
      'rmd-snackbar--active': this.state.open,
    });

    const inlineStyle = {
      transitionDuration: `${this.props.duration}s`,
    };


    return (
      <div className={snackbarClass} style={inlineStyle}>
        <div className="rmd-snackbar__text">{this.props.text}</div>
      </div>
    );
  }
}

export default Snackbar;
