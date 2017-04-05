import React, { Component } from 'react';
import Button from '../button/button';

class FabTrigger extends Component {
  static displayName = 'FabTrigger';

  static propTypes = {
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
    children: <Button>Default</Button>,
  };

  render() {
    return (
      <div className="rmd-fab-trigger">
        {this.props.children}
      </div>
    );
  }
}

export default FabTrigger;
