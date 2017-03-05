import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import Group from './group';
import ChartContainer from './chart_container';
import Legend from './legend';
import Rect from './rect';
import Tooltip from './tooltip';

class BarChart extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    data: PropTypes.shape({
      xAxisKey: PropTypes.string,
      legendOptions: PropTypes.array,
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
    const yLabelWidth = 60;
    const xLabelHeight = 30;
    const legendHeight = 18;
    const { top, bottom, left, right } = this.props.margin;
    const chartHeight = this.props.height - xLabelHeight - legendHeight - top - bottom;
    const chartWidth = this.props.width - yLabelWidth - left - right;
    this.state = {
      origin: { x: yLabelWidth + left, y: top },
      base: { x: left + yLabelWidth, y: chartHeight + top },
      tooltip: { isActive: false, title: '', value: '', position: { top: 0, left: 0 }, color: '#FFFFFF' },
      chartWidth,
      chartHeight,
    };

    this.handleMouseEnter = ::this.handleMouseEnter;
    this.handleMouseLeave = ::this.handleMouseLeave;
  }

  getMaxMin = (dataValue, keys) => {
    let dataPoints = [];
    _.forEach(keys, (legend) => {
      dataPoints = dataPoints.concat(_.map(dataValue, legend));
    });
    dataPoints = _.sortBy(dataPoints);
    const min = _.first(dataPoints);
    const max = _.last(dataPoints);
    return { min, max };
  };

  getTicks = (max, min, tickCount) => {
    const range = max - min;
    const unroundedTickSize = range / (tickCount - 1);
    const x = Math.ceil(Math.log10(unroundedTickSize) - 1);
    const pow10x = 10 ** x;
    const roundNearHalf = Math.ceil((2 * unroundedTickSize) / pow10x) / 2;
    const roundedTickRange = roundNearHalf * pow10x;
    const lowerBound = roundedTickRange * Math.floor(min / roundedTickRange);
    const result = _.times(tickCount, i => lowerBound + (roundedTickRange * i));
    return (result);
  };

  getAxisTicks(dataValue, xAxisKey, legendKeys) {
    const xAxisTicks = _.map(dataValue, xAxisKey);
    const { max, min } = this.getMaxMin(dataValue, legendKeys);
    const yAxisTicks = this.getTicks(max, min, 5);
    return { xAxisTicks, yAxisTicks };
  }

  getXTickPositions(xAxisTicks) {
    const xTickCount = xAxisTicks.length;
    const xInterval = this.state.chartWidth / xTickCount;
    let offset;
    const result = [];
    _.times(xTickCount, (i) => {
      offset = xInterval;
      if (i === 0) {
        offset = xInterval * 0.5;
      }
      result.push((_.last(result) || this.state.origin.x) + offset);
    });
    return result;
  }

  getScaledData(dataValue, legendKeys, xTickPositions) {
    const { max, min } = this.getMaxMin(dataValue, legendKeys);
    const yTicks = this.getTicks(max, min, 5);
    const minTick = _.first(yTicks);
    const maxTick = _.last(yTicks);
    const result = {};
    const chartHeight = this.state.chartHeight;
    const marginTop = this.props.margin.top;
    _.forEach(legendKeys, (key) => {
      const value = _.map(dataValue, key);
      result[key] = _.map(value, (v, i) => {
        const y = (((maxTick - v) / (maxTick - minTick)) * chartHeight) + marginTop;
        const x = xTickPositions[i];
        return { x, y, value: v, title: key };
      });
    });
    return result;
  }

  handleMouseEnter(e) {
    const title = e.target.getAttribute('title');
    const value = e.target.getAttribute('value');
    const y = e.target.getAttribute('y');
    const x = e.target.getAttribute('x');
    const color = e.target.getAttribute('fill');
    const tooltip = {
      isActive: true,
      position: {
        top: parseInt(y, 10),
        left: parseInt(x, 10),
      },
      value,
      title,
      color,
    };
    this.setState({ tooltip });
  }

  handleMouseLeave() {
    const tooltip = {
      isActive: false,
      position: {
        top: 0,
        left: 0,
      },
      value: '',
      title: '',
      color: '#fff',
    };
    this.setState({ tooltip });
  }

  renderXAxis(xAxisTicks) {
    const xTickPositions = this.getXTickPositions(xAxisTicks);
    const { x, y } = this.state.origin;
    const lineHeight = 6;
    const xTickItems = _.times(xAxisTicks.length, (i) => {
      const key = _.uniqueId('XAxisGroup');
      return (
        <Group className="rmd-charts-axis-tick" key={key}>
          <line
            x1={xTickPositions[i]}
            x2={xTickPositions[i]}
            y1={y + this.state.chartHeight}
            y2={y + this.state.chartHeight + lineHeight}
            stroke="#666"
          />
          <text x={xTickPositions[i]} y={y + this.state.chartHeight + lineHeight} textAnchor="middle" style={{ fontSize: 14 }}>
            <tspan x={xTickPositions[i]} dy="10">
              {xAxisTicks[i]}
            </tspan>
          </text>
        </Group>
      );
    });

    return (
      <Group className="rmd-charts-axis">
        <Group className="rmd-charts-xAxis">
          <line
            x1={x}
            x2={x + this.state.chartWidth}
            y1={y + this.state.chartHeight}
            y2={y + this.state.chartHeight}
            stroke="#666"
          />
          <Group className="rmd-charts-axis-ticks">
            {xTickItems}
          </Group>
        </Group>
      </Group>
    );
  }

  renderYAxis(yAxisTicks) {
    const yTickCount = yAxisTicks.length;
    const interval = this.state.chartHeight / (yTickCount - 1);
    const { x, y } = this.state.origin;
    const lineHeight = 6;
    const yTickItems = _.times(yTickCount, (i) => {
      const key = _.uniqueId('YAxisGroup');
      return (
        <Group className="rmd-charts-axis-tick" key={key}>
          <line
            x1={x - lineHeight}
            x2={x}
            y1={(y + this.state.chartHeight) - (i * interval)}
            y2={(y + this.state.chartHeight) - (i * interval)}
            stroke="#666"
          />
          <text x={x - lineHeight} y={(y + this.state.chartHeight) - (i * interval)} textAnchor="end" style={{ fontSize: 14 }}>
            <tspan dx={-2} dy="5">
              {yAxisTicks[i]}
            </tspan>
          </text>
        </Group>
      );
    });
    return (
      <Group className="rmd-charts-axis">
        <Group className="rmd-charts-yAxis">
          <line
            x1={x}
            x2={x}
            y1={y}
            y2={y + this.state.chartHeight}
            stroke="#666"
          />
          <Group className="rmd-charts-axis-ticks">
            {yTickItems}
          </Group>
        </Group>
      </Group>
    );
  }

  renderGrid(yAxisTicks) {
    const yTickCount = yAxisTicks.length;
    const yInterval = this.state.chartHeight / (yTickCount - 1);
    const { x, y } = this.state.origin;
    const strokeDasharray = '3 3';
    const strokeColor = '#ccc';
    const horizontalGridLines = _.times(yTickCount, (i) => {
      const key = _.uniqueId('horizontalGridLines');
      return (
        <line
          key={key}
          x1={x}
          x2={x + this.state.chartWidth}
          y1={y + (i * yInterval)}
          y2={y + (i * yInterval)}
          stroke={strokeColor}
          strokeDasharray={strokeDasharray}
        />
      );
    });
    return (
      <Group className="rmd-charts-grid">
        <Group className="rmd-charts-grid-horizontal">
          {horizontalGridLines}
        </Group>
        <Group className="rmd-charts-grid-vertical" />
      </Group>
    );
  }

  renderRects(scaledDataEntriesMap, legendOptions) {
    const margin = 15;
    const legendCount = legendOptions.length;
    const gap = margin / legendCount;
    const xTickCount = scaledDataEntriesMap.pv.length;
    const xInterval = this.state.chartWidth / xTickCount;
    const width = (xInterval - (margin * 2) - ((legendCount - 1) * gap)) / legendCount;
    let count = 0;
    const rectItems = _.map(scaledDataEntriesMap, (points, k) => {
      const rectsKey = _.uniqueId('rects');
      const strokeColor = _.find(legendOptions, { key: k }).stroke;
      const rects = _.map(points, (point) => {
        const rectKey = _.uniqueId('rect');
        const x = (point.x - (xInterval / 2)) + margin + (count * (width + gap));
        const height = (this.state.chartHeight - point.y) + this.props.margin.top;
        return (
          <Rect
            className="rmd-charts-rect"
            key={rectKey}
            x={x}
            y={point.y}
            value={point.value}
            title={k}
            height={height}
            width={width}
            fill={strokeColor}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            base={this.state.base}
          />
        );
      });
      count += 1;
      return (
        <Group className="rmd-charts-rects" key={rectsKey}>
          {rects}
        </Group>
      );
    });

    return (
      <Group className="rmd-charts-bar">
        {rectItems}
      </Group>
    );
  }

  render() {
    const { width, height, data } = this.props;
    const legendOptions = data.legendOptions;
    const legendKeys = _.map(legendOptions, 'key');
    const { xAxisTicks, yAxisTicks } = this.getAxisTicks(data.value, data.xAxisKey, legendKeys);
    const xTickPositions = this.getXTickPositions(xAxisTicks);
    const scaledDataEntriesMap = this.getScaledData(data.value, legendKeys, xTickPositions);
    const { title, value, color, isActive, position } = this.state.tooltip;
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

    return (
      <div style={wrapperStyle}>
        <ChartContainer width={width} height={height}>
          {this.renderGrid(yAxisTicks)}
          {this.renderYAxis(yAxisTicks)}
          {this.renderXAxis(xAxisTicks)}
          {this.renderRects(scaledDataEntriesMap, legendOptions)}
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

export default BarChart;
