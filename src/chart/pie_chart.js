import React, { Component, PropTypes } from 'react';
import { pie } from 'd3-shape';
import _ from 'lodash';
import Group from './group';
import ChartContainer from './chart_container';
import Arc from './arc';
import Tooltip from './tooltip';
import Legend from './legend';

class PieChart extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    data: PropTypes.shape({
      xAxisKey: PropTypes.string,
      legendOptions: PropTypes.array,
      colorOptions: PropTypes.array,
      value: PropTypes.array,
    }).isRequired,
    margin: PropTypes.shape({
      top: PropTypes.number,
      left: PropTypes.number,
      bottom: PropTypes.number,
      right: PropTypes.number,
    }),
  };

  static defaultProps = {
    margin: { top: 0, left: 0, bottom: 0, right: 0 },
  };

  constructor(props) {
    super(props);
    const titleLabelHeight = 40;
    const legendHeight = 18;
    const legendMarginTop = 10;
    const { top, bottom, left, right } = this.props.margin;
    const { height, width } = this.props;
    const chartHeight = height - titleLabelHeight - legendHeight - legendMarginTop - top - bottom;
    const chartWidth = width - left - right;
    const radius = (chartHeight > chartWidth ? chartWidth : chartHeight) * 0.5;
    const defaultTooltip = { title: '', value: '', isActive: false, position: { top: 0, left: 0 }, color: '#ffffff' };
    this.state = {
      origin: {
        x: left + (chartWidth * 0.5),
        y: titleLabelHeight + top + (chartHeight * 0.5),
      },
      tooltip: defaultTooltip,
      defaultTooltip,
      radius,
    };

    this.handleMouseEnter = ::this.handleMouseEnter;
    this.handleMouseLeave = ::this.handleMouseLeave;
  }

  getScaledData = data => (pie().value(d => d.y))(data);

  handleMouseEnter(data, fillColor) {
    const { value, startAngle, endAngle, innerRadius, outerRadius } = data;
    const radius = innerRadius + outerRadius;
    const { x, y } = this.state.origin;
    const gapAngle = endAngle - startAngle;
    const angle = startAngle + ((gapAngle / 2) - (Math.PI / 2));
    const left = x + (Math.cos(angle) * radius * 0.5);
    const top = y + (Math.sin(angle) * radius * 0.5);
    const tooltip = {
      isActive: true,
      title: '',
      color: fillColor,
      value: value.toString(),
      position: {
        top,
        left,
      },
    };
    this.setState({ tooltip });
  }

  handleMouseLeave() {
    this.setState({ tooltip: this.state.defaultTooltip });
  }

  renderPies(scaledDataEntries, colorOptions) {
    const innerRadius = 0;
    const outerRadius = this.state.radius;
    const formattedDataEntries = _.map(scaledDataEntries, entry => (
      { ...entry, innerRadius, outerRadius }),
    );
    const arcs = _.map(formattedDataEntries, (entry) => {
      const key = _.uniqueId('arc');
      const { stroke, fill } = _.find(colorOptions, { key: entry.data.name });
      return (
        <Arc
          data={entry}
          stroke={stroke}
          fill={fill}
          key={key}
          className="rmd-charts-arc"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        />
      );
    });

    const { x, y } = this.state.origin;
    const style = {
      transform: `translate(${x}px, ${y}px)`,
    };

    return (
      <Group className="rmd-charts-arcs" style={style}>
        {arcs}
      </Group>
    );
  }

  render() {
    const { width, height, data } = this.props;
    const { legendOptions, colorOptions, title } = data;
    const wrapperStyle = {
      position: 'relative',
      width,
      height,
    };

    const legendStyle = {
      position: 'absolute',
      height: 'auto',
      left: this.props.margin.left,
      bottom: this.props.margin.bottom,
      width,
    };

    const titleStyle = {
      fontSize: 18,
      position: 'absolute',
      height: 'auto',
      textAlign: 'center',
      top: this.props.margin.top,
      width,
    };

    const { value, color, isActive, position } = this.state.tooltip;
    const scaledDataEntries = this.getScaledData(data.value);
    return (
      <div style={wrapperStyle}>
        <div style={titleStyle}>
          {title}
        </div>
        <ChartContainer width={width} height={height}>
          {this.renderPies(scaledDataEntries, colorOptions)}
        </ChartContainer>
        <Tooltip
          isActive={isActive}
          title={title}
          value={value}
          position={position}
          color={color}
        />
        <Legend options={legendOptions} style={legendStyle} />
      </div>
    );
  }
}

export default PieChart;
