import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import FabActions from '../fab_speed_dial/fab_actions';
import FabTrigger from '../fab_speed_dial/fab_trigger';

class FabToolbar extends Component {
  static displayName = 'FabToolbar';

  static propTypes = {
    isOpen: PropTypes.bool,
    direction: PropTypes.oneOf(['left', 'right']),
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
    isOpen: false,
    direction: 'right',
    children: [<FabTrigger />, <FabActions />],
  };

  render() {
    const { direction, children, isOpen } = this.props;
    const items = React.Children.map(children,
      child => React.cloneElement(child, {
        isOpen,
      }),
    );

    const fabToolbarClasses = classNames({
      'rmd-fab-toolbar': true,
      open: isOpen,
    }, direction);
    return (
      <div className={fabToolbarClasses}>
        <div className="rmd-fab-toolbar-wrapper">
          {items}
        </div>
      </div>
    );
  }
}

export default FabToolbar;
