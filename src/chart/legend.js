import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import ChartContainer from './chart_container';
import Group from './group';

class Legend extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  static defaultProps = {
    style: {},
  };

  render() {
    const { options, ...otherProps } = this.props;
    const itemStyle = {
      display: 'inline-block',
      marginRight: 10,
    };
    const legendItems = _.map(options, (option) => {
      const key = _.uniqueId('legendItems');
      return (
        <li className="rmd-charts-legend-item" style={itemStyle} key={key}>
          <ChartContainer width={18} height={18} style={{ marginRight: 5 }}>
            <Group>
              <line
                x1={0}
                x2={18}
                y1={14}
                y2={14}
                stroke={option.stroke}
                strokeWidth={3}
                fill={option.stroke}
              />
            </Group>
          </ChartContainer>
          {option.key}
        </li>
      );
    });

    return (
      <div {...otherProps}>
        <ul className="rmd-charts-legend" style={{ margin: 0, textAlign: 'center' }}>
          {legendItems}
        </ul>
      </div>
    );
  }
}

export default Legend;
