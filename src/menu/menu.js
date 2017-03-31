import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Button from '../button/button';
import Paper from '../shared/paper';
import Icon from '../icon/icon';

class Menu extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    position: PropTypes.oneOf(['left', 'right']),
    isOpen: PropTypes.bool,
  };

  static defaultProps = {
    isOpen: false,
    position: 'left',
    className: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: this.props.isOpen,
    };
  }

  handleClick = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    const { children, isOpen, className } = this.props;
    const containerClasses = classNames({
      'rmd-menu-container': true,
      close: !isOpen,
    }, className);

    const menuClasses = classNames({
      'rmd-menu': true,
      'is-open': this.state.isMenuOpen,
      right: (this.props.position === 'right') && !isOpen,
    });

    return (
      <div className={containerClasses}>
        {!isOpen &&
        <Button className="rmd-menu-button" onClick={this.handleClick}>
          <Icon name="more_vert" />
        </Button>
        }
        <Paper className={menuClasses}>
          {children}
        </Paper>
      </div>
    );
  }
}

export default Menu;
