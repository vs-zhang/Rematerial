import React, { Component, PropTypes } from 'react';
import Overlay from '../shared/overlay';

class Dialog extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    actions: PropTypes.element.isRequired,
  };

  render() {
    const { open, actions } = this.props;
    let content;

    if (open) {
      content = (<Overlay>
        <div className="rmd-dialog">
          <h4 className="rmd-dialog__title">Dialog</h4>
          <div className="rmd-dialog__content">
            <div>
              something here
            </div>
          </div>
          <div className="rmd-dialog__actions">
            {actions}
          </div>
        </div>
      </Overlay>);
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default Dialog;
