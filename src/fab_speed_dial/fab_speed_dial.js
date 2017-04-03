import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import FabTrigger from './fab_trigger';
import FabActions from './fab_actions';

class FabSpeedDial extends Component {
  static displayName = 'FabSpeedDial';

  static propTypes = {
    direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
    isOpen: PropTypes.bool,
    animationType: PropTypes.oneOf(['fling', 'scale']),
    children: (props, propName, componentName) => {
      const prop = props[propName];
      let error = null;
      const allowedChildTypes = [FabTrigger, FabActions].sort();
      const childTypes = React.Children.map(prop, child => (child.type)).sort();
      if (!_.isEqual(childTypes, allowedChildTypes)) {
        error = new Error(`${componentName} only Accept one FabTrigger and one FabActions in Children`);
      }
      return error;
    },
  };

  static defaultProps = {
    direction: 'up',
    isOpen: false,
    animationType: 'scale',
    children: [<FabTrigger />, <FabActions />],
  };

  render() {
    const { children, isOpen } = this.props;
    const items = React.Children.map(children,
      child => React.cloneElement(child, {
        isOpen,
      }),
    );

    return (
      <div className="rmd-fab-speed-dial-wrapper">
        <div className={`rmd-fab-speed-dial ${this.props.direction} ${this.props.animationType}`}>
          {items}
        </div>
      </div>
    );
  }
}

export default FabSpeedDial;
