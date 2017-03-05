import React from 'react';
import { AreaChart } from 'rematerial';

const data = {
  xAxisKey: 'name',
  legendOptions: [
    {key: 'pv', stroke: '#82ca9d'},
    {key: 'uv', stroke: '#8884d8'}
  ],
  value: [
    {name: 'Page A', pv: 2400, uv: 4000},
    {name: 'Page B', pv: 1398, uv: 3000},
    {name: 'Page C', pv: 9800, uv: 2000},
    {name: 'Page D', pv: 3908, uv: 2780},
    {name: 'Page E', pv: 4800, uv: 1890},
    {name: 'Page F', pv: 3800, uv: 2390},
    {name: 'Page G', pv: 4300, uv: 3490},
  ]
};

const AreaChartExample = () => {
  return (
    <AreaChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    />
  )
};

export default AreaChartExample;
