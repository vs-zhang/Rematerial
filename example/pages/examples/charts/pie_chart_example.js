import React from 'react';
import { PieChart } from 'rematerial';

const browserMarketData = {
  title: "Browser market shares",
  xAxisKey: 'name',
  legendOptions: [
    {key: 'IE', stroke: '#7CB5EC',},
    {key: 'Chrome', stroke: '#5C5C61'},
    {key: 'Firefox', stroke: '#A9FF96'},
    {key: 'Safari', stroke: '#FFBC75'},
    {key: 'Opera', stroke: '#999EFF'},
    {key: 'Undetectable', stroke: '#F15C80'},
  ],
  colorOptions: [
    {key: 'IE', stroke: '#FFFFFF', fill: '#7CB5EC',},
    {key: 'Chrome', stroke: '#FFFFFF', fill: '#5C5C61'},
    {key: 'Firefox', stroke: '#FFFFFF', fill: '#A9FF96'},
    {key: 'Safari', stroke: '#FFFFFF', fill: '#FFBC75'},
    {key: 'Opera', stroke: '#FFFFFF', fill: '#999EFF'},
    {key: 'Undetectable', stroke: '#FFFFFF', fill: '#F15C80'},
  ],
  value: [
    {name: 'IE', y: 58.3},
    {name: 'Chrome', y: 24.9},
    {name: 'Firefox', y: 10.7},
    {name: 'Safari', y: 4.9},
    {name: 'Opera', y: 0.9},
    {name: 'Undetectable', y: 0.2},
  ]
};

const BarChartExample = () => {
  return (
    <PieChart
      width={730}
      height={350}
      data={browserMarketData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    />
  )
};

export default BarChartExample;
