import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class ProgressLinear extends Component {
  static displayName = 'ProgressLinear';

  static propTypes = {
    type: PropTypes.oneOf(['determinate', 'indeterminate']),
    value: PropTypes.number,
  };

  static defaultProps = {
    type: 'indeterminate',
    value: 0.5,
  };

  render() {
    const { type, value } = this.props;
    const linearClasses = classNames('rmd-progress-linear', type);
    const percentage = value > 1 ? 1 : value;
    let style = {};
    if (type === 'determinate') {
      const translateX = ((1 - percentage) * 100) / (2 * percentage);
      style = {
        transform: `scale(${percentage}, 1) translateX(-${translateX}%)`,
      };
    }
    return (
      <div className={linearClasses}>
        <div className="rmd-progress-container">
          <div className="rmd-progress-bar" style={style} />
        </div>
      </div>
    );
  }
}

export default ProgressLinear;
