import React, { Component, PropTypes } from 'react';
import Overlay from '../shared/overlay';

class Dialog extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    actions: PropTypes.element.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { open, actions } = this.props;

    return (
      <div>
        {open &&
          <Overlay>
            <div className="rmd-dialog">
              <h4 className="rmd-dialog__title">Dialog</h4>
              <div className="rmd-dialog__content">
                {this.props.children}
              </div>
              <div className="rmd-dialog__actions">
                {actions}
              </div>
            </div>
          </Overlay>
        }
      </div>
    );
  }
}

export default Dialog;
