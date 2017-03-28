import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Button from '../button/button';

class Snackbar extends Component {
  static propTypes = {
    body: PropTypes.node.isRequired,
    actionLabel: PropTypes.string,
    isOpen: PropTypes.bool,
    autoHideDuration: PropTypes.number,
    onActionClick: PropTypes.func,
    onRequestClose: PropTypes.func,
  };

  static defaultProps = {
    autoHideDuration: 3000,
    actionLabel: '',
    isOpen: false,
    onActionClick: () => {},
    onRequestClose: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
    };
    this.onActionClick = ::this.onActionClick;
    this.onRequestClose = ::this.onRequestClose;
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.isOpen !== nextProps.isOpen) {
      this.setState({ isOpen: nextProps.isOpen });
    }
    if (nextProps.isOpen) {
      this.timeout = setTimeout(this.onRequestClose, this.props.autoHideDuration);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  onActionClick() {
    Promise.resolve(this.props.onActionClick()).then(() => {
      clearTimeout(this.timeout);
      this.onRequestClose();
    });
  }

  onRequestClose() {
    this.timeout = null;
    this.setState({ isOpen: false });
    this.props.onRequestClose();
  }

  render() {
    const { autoHideDuration, body, actionLabel } = this.props;
    const snackbarClass = classNames({
      'rmd-snackbar': true,
      'rmd-snackbar--active': this.state.isOpen,
    });

    const inlineStyle = {
      transitionDuration: autoHideDuration,
    };

    return (
      <div className={snackbarClass} style={inlineStyle}>
        <div className="rmd-snackbar__body">
          {body}
        </div>
        <Button type="flat" onClick={this.onActionClick}>
          {actionLabel}
        </Button>
      </div>
    );
  }
}

export default Snackbar;
