import React, { Component, PropTypes } from 'react';
import Button from '../button/button';

class FabActions extends Component {
  static displayName = 'FabActions';

  static propTypes = {
    isOpen: PropTypes.bool,
    children: (props, propName, componentName) => {
      const prop = props[propName];
      let error = null;
      React.Children.forEach(prop, (child) => {
        if (child.type !== Button) {
          error = new Error(`${componentName} children should be of type Button`);
        }
      });
      return error;
    },
  };

  static defaultProps = {
    isOpen: false,
    children: <Button>Default Fab</Button>,
  };

  render() {
    const { children, isOpen } = this.props;
    const delayInterval = 65;
    const items = React.Children.map(children,
      (child, n) => {
        const transitionDelay = isOpen ? `${(n * delayInterval)}ms` : `${(3 - (n * delayInterval))}ms`;
        const style = {
          opacity: isOpen ? 1 : 0,
          transform: `scale(${isOpen ? 1 : 0})`,
          transitionDelay,
        };
        return (
          <div className="rmd-fab-action-item" style={style}>
            {child}
          </div>
        );
      },
    );
    return (
      <div className="rmd-fab-actions">
        {items}
      </div>
    );
  }
}

export default FabActions;
