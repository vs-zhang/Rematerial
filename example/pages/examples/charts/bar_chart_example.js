import React from 'react';
import { BarChart } from 'rematerial';

const data = {
  xAxisKey: 'name',
  legendOptions: [
    {key: 'pv', stroke: '#82ca9d'},
    {key: 'uv', stroke: '#8884d8'},
    {key: 'hv', stroke: '#888544'}
  ],
  value: [
    {name: 'Page A', pv: 2400, uv: 4000, hv: 5000},
    {name: 'Page B', pv: 1398, uv: 3000, hv: 7000},
    {name: 'Page C', pv: 9800, uv: 2000, hv: 6000},
    {name: 'Page D', pv: 3908, uv: 2780, hv: 3380},
    {name: 'Page E', pv: 4800, uv: 1890, hv: 2890},
    {name: 'Page F', pv: 3800, uv: 2390, hv: 1390},
    {name: 'Page G', pv: 4300, uv: 3490, hv: 3590},
  ]
};

const BarChartExample = () => {
  return (
    <BarChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    />
  )
};

export default BarChartExample;
