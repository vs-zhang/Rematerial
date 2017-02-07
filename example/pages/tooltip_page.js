import React, { Component, PropTypes } from 'react';
import { Tooltip } from 'rematerialize';

class TooltipPage extends Component {
  render() {
    return (
      <div>
        <div>
          <Tooltip
            text="hello top"
            placement="top"
          >
            <a href="#">Tooltip top</a>
          </Tooltip>
        </div>
        <div>
          <Tooltip
            text="hello right"
            placement="right"
          >
            <a href="#">Tooltip right</a>
          </Tooltip>
        </div>
        <div>
          <Tooltip
            text="hello bottom"
            placement="bottom"
          >
            <a href="#">Tooltip bottom</a>
          </Tooltip>
        </div>
        <div>
          <Tooltip
            text="hello left"
            placement="left"
          >
            <a href="#">Tooltip left</a>
          </Tooltip>
        </div>
      </div>
    )
  }
}

export default TooltipPage;
