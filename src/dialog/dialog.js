import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import Overlay from '../shared/overlay';

class Dialog extends Component {
  static propTypes = {
    open: PropTypes.bool,
    actions: PropTypes.arrayOf(PropTypes.element),
    title: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    open: false,
    actions: [],
    title: 'Dialog',
    children: 'Content',
  };

  render() {
    const { open, actions, title } = this.props;

    const actionsWithKey = React.Children.map(actions,
      child => React.cloneElement(child, {
        key: _.uniqueId('card-action'),
      }),
    );

    return (
      <div>
        {open &&
          <Overlay>
            <div className="rmd-dialog">
              <h4 className="rmd-dialog__title">{title}</h4>
              <div className="rmd-dialog__content">
                {this.props.children}
              </div>
              <div className="rmd-dialog__actions">
                {actionsWithKey}
              </div>
            </div>
          </Overlay>
        }
      </div>
    );
  }
}

export default Dialog;
