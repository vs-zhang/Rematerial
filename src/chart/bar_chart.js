import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
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
    }),
    margin: PropTypes.shape({
      top: PropTypes.number,
      left: PropTypes.number,
      bottom: PropTypes.number,
      right: PropTypes.number,
    }),
  };

  static defaultProps = {
    margin: {top: 0, left: 0, bottom: 0, right: 0},
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
      origin: {x: yLabelWidth + left, y: top},
      base: {x: left+yLabelWidth, y: chartHeight + top },
      tooltip: {isActive: false, title: '', value: '', position: {top: 0, left: 0}, color: '#FFFFFF'},
      chartWidth,
      chartHeight,
    };

    this.handleMouseEnter = ::this.handleMouseEnter;
    this.handleMouseLeave = ::this.handleMouseLeave;
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
        top: parseInt(y),
        left: parseInt(x),
      },
      value,
      title,
      color
    };
    this.setState({tooltip});
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
    this.setState({tooltip});
  }

  getMaxMin(dataValue, keys) {
    let dataPoints = [];
    for (const legend of keys) {
      dataPoints = dataPoints.concat(_.map(dataValue, legend));
    }
    dataPoints = _.sortBy(dataPoints);
    const min = _.first(dataPoints);
    const max = _.last(dataPoints);
    return {min, max};
  }

  getTicks(max, min, tickCount) {
    const range = max - min;
    const unroundedTickSize = range / (tickCount - 1);
    const x = Math.ceil(Math.log10(unroundedTickSize) - 1);
    const pow10x = Math.pow(10, x);
    const roundNearHalf = Math.ceil(2 * unroundedTickSize / pow10x) / 2;
    const roundedTickRange = roundNearHalf * pow10x;
    const lowerBound = roundedTickRange * Math.floor(min / roundedTickRange);
    const result = _.times(tickCount, (i) => {
      return lowerBound + roundedTickRange * i;
    });
    return (result);
  }

  getAxisTicks(dataValue, xAxisKey, legendKeys) {
    let xAxisTicks = _.map(dataValue, xAxisKey);
    const { max, min } = this.getMaxMin(dataValue, legendKeys);
    const yAxisTicks = this.getTicks(max, min, 5);
    return {xAxisTicks, yAxisTicks};
  }

  renderXAxis(xAxisTicks) {
    const xTickPositions = this.getXTickPositions(xAxisTicks);
    const xTickCount = xAxisTicks.length;
    const interval = this.state.chartWidth / xTickCount;

    const { x, y } = this.state.origin;
    const lineHeight = 6;
    let offset;
    const xTickItems = _.times(xAxisTicks.length, (i) => {
      const key = _.uniqueId("XAxisGroup");
      offset = interval;
      if(i === 0 || i === (xAxisTicks.length-1)) {
        offset = interval * 0.5;
      }
      return <Group className="rmd-charts-axis-tick" key={key}>
        <line
          x1={xTickPositions[i]}
          x2={xTickPositions[i]}
          y1={y+this.state.chartHeight}
          y2={y+this.state.chartHeight+lineHeight}
          stroke="#666"
        />
        <text x={xTickPositions[i]} y={y+this.state.chartHeight+lineHeight} textAnchor="middle" style={ {fontSize:14}}>
          <tspan x={xTickPositions[i]} dy="10">
            {xAxisTicks[i]}
          </tspan>
        </text>
      </Group>
    });

    return (
      <Group className="rmd-charts-axis">
        <Group className="rmd-charts-xAxis">
          <line
            x1={x}
            x2={x+this.state.chartWidth}
            y1={y+this.state.chartHeight}
            y2={y+this.state.chartHeight}
            stroke="#666"
          />
          <Group className="rmd-charts-axis-ticks">
            {xTickItems}
          </Group>
        </Group>
      </Group>
    )
  }

  renderYAxis(yAxisTicks) {
    const yTickCount = yAxisTicks.length;
    const interval = this.state.chartHeight / (yTickCount - 1);
    const { x, y } = this.state.origin;
    const lineHeight = 6;
    const yTickItems = _.times(yTickCount, (i) => {
      const key = _.uniqueId("YAxisGroup");
      return <Group className="rmd-charts-axis-tick" key={key}>
        <line
          x1={x-lineHeight}
          x2={x}
          y1={y+this.state.chartHeight-i*interval}
          y2={y+this.state.chartHeight-i*interval}
          stroke="#666"
        />
        <text x={x-lineHeight} y={y+this.state.chartHeight-i*interval} textAnchor="end" style={ {fontSize:14}}>
          <tspan dx={-2} dy="5">
            {yAxisTicks[i]}
          </tspan>
        </text>
      </Group>
    });
    return (
      <Group className="rmd-charts-axis">
        <Group className="rmd-charts-yAxis">
          <line
            x1={x}
            x2={x}
            y1={y}
            y2={y+this.state.chartHeight}
            stroke="#666"
          />
          <Group className="rmd-charts-axis-ticks">
            {yTickItems}
          </Group>
        </Group>
      </Group>
    )
  }

  renderGrid(yAxisTicks, xAxisTicks) {
    const yTickCount = yAxisTicks.length;
    const xTickCount = xAxisTicks.length;
    const yInterval = this.state.chartHeight / (yTickCount - 1);
    const { x, y } = this.state.origin;
    const strokeDasharray = "3 3";
    const strokeColor = "#ccc";

    const horizontalGridLines = _.times(yTickCount, (i) => {
      const key = _.uniqueId("horizontalGridLines");
      return <line
        key={key}
        x1={x}
        x2={x+this.state.chartWidth}
        y1={y+i*yInterval}
        y2={y+i*yInterval}
        stroke={strokeColor}
        strokeDasharray={strokeDasharray}
      />
    });

    const xTickPositions = this.getXTickPositions(xAxisTicks);
    const verticalGridLines = _.times(xTickCount, (i) => {
      const key = _.uniqueId("verticalGridLines");
      return <line
        key={key}
        x1={xTickPositions[i]}
        x2={xTickPositions[i]}
        y1={y}
        y2={y+this.state.chartHeight}
        stroke={strokeColor}
        strokeDasharray={strokeDasharray}
      />
    });

    const startLine = <line x1={this.state.origin.x}
                            x2={this.state.origin.x}
                            y1={y}
                            y2={y+this.state.chartHeight}
                            stroke={strokeColor}
                            strokeDasharray={strokeDasharray} />;

    const endLine = <line x1={this.state.origin.x + this.state.chartWidth}
                          x2={this.state.origin.x + this.state.chartWidth}
                          y1={y}
                          y2={y+this.state.chartHeight}
                          stroke={strokeColor}
                          strokeDasharray={strokeDasharray} />;

    return (
      <Group className="rmd-charts-grid">
        <Group className="rmd-charts-grid-horizontal">
          {horizontalGridLines}
        </Group>
        <Group className="rmd-charts-grid-vertical">
        </Group>
      </Group>
    )
  }


  getXTickPositions(xAxisTicks) {
    const xTickCount = xAxisTicks.length;
    const xInterval = this.state.chartWidth / xTickCount;

    let offset;
    let result = [];
    _.times(xTickCount, (i) => {
      offset = xInterval;
      if (i === 0) {
        offset = xInterval * 0.5;
      }
      result.push((_.last(result) || this.state.origin.x) + offset );
    });
    return result;
  }

  getScaledData(dataValue, legendKeys, xTickPositions) {
    const { max, min } = this.getMaxMin(dataValue, legendKeys);
    const yTicks = this.getTicks(max, min, 5);
    const minTick = _.first(yTicks);
    const maxTick = _.last(yTicks);
    let result = {};
    for (const key of legendKeys) {
      const value = _.map(dataValue, key);
      result[key] = _.map(value, (v, i) => {
        const y = ((maxTick - v) / (maxTick - minTick)) * this.state.chartHeight + this.props.margin.top;
        const x = xTickPositions[i];
        return {x, y, value: v, title: key};
      });
    }
    return result;
  }

  renderRects(scaledDataEntriesMap, legendOptions) {
    const margin = 15;
    const legendCount = legendOptions.length;
    const gap = margin/legendCount;
    const xTickCount = scaledDataEntriesMap['pv'].length;
    const xInterval = this.state.chartWidth / xTickCount;
    const width = (xInterval - margin*2 - (legendCount - 1)*gap)/legendCount;
    let count = 0;
    const rectItems = _.map(scaledDataEntriesMap, (points, k) => {
      const rectsKey = _.uniqueId("rects");
      const strokeColor = _.find(legendOptions, {key: k}).stroke;
      const rects =_.map(points, (point) => {
        const rectKey = _.uniqueId("rect");
        const x = point.x - xInterval/2 + margin + count*(width+gap);
        const height = this.state.chartHeight - point.y + this.props.margin.top;
        return <Rect
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
      });
      count++;
      return <Group className="rmd-charts-rects" key={rectsKey}>
        {rects}
      </Group>;
    });

    return <Group className="rmd-charts-bar">
      {rectItems}
    </Group>;
  };

  render() {
    const { width, height, data } = this.props;
    const legendOptions = data.legendOptions;
    const legendKeys = _.map(legendOptions, 'key');

    const { xAxisTicks, yAxisTicks } = this.getAxisTicks(data.value, data.xAxisKey, legendKeys);
    const scaledDataEntriesMap = this.getScaledData(data.value, legendKeys, this.getXTickPositions(xAxisTicks));

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
          {this.renderGrid(yAxisTicks, xAxisTicks)}
          {this.renderYAxis(yAxisTicks)}
          {this.renderXAxis(xAxisTicks)}
          {this.renderRects(scaledDataEntriesMap, legendOptions)}
        </ChartContainer>
        <Tooltip isActive={isActive} title={title} value={value} position={position} color={color} />
        <Legend options={legendOptions} style={legendStyle}/>
      </div>
    )
  }
}

export default BarChart;
