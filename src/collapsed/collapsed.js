import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Icon from '../icon/icon';

class Collapsed extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isCollapsed: PropTypes.bool,
  };

  static defaultProps = {
    isCollapsed: true,
  };

  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: this.props.isCollapsed,
    };
    this.handleClick = ::this.handleClick;
  }

  handleClick() {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  }

  render() {
    const classes = classNames({
      'rmd-collapsed-container': true,
      'is-collapsed': this.state.isCollapsed,
    });

    const iconClasses = classNames({
      'rmd-collapsed-icon': true,
      'is-expanded': !this.state.isCollapsed,
    });

    return (
      <div className="rmd-collapsed-wrapper">
        <Icon
          className={iconClasses}
          onClick={this.handleClick}
          name="expand_more"
        />
        <div className={classes}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Collapsed;
