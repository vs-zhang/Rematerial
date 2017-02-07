import React, { Component, PropTypes } from 'react';
import { ChartContainer, Curve, Legend, Group, LineChart, BarChart, AreaChart, PieChart } from 'rematerialize';

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

const data2 = {
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

class ChartPage extends Component {
  render() {
    return (
      <div>
        <div>
          <LineChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          />
        </div>

        <br />
        <br />

        <div>
          <BarChart
            width={730}
            height={250}
            data={data2}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          />
        </div>

        <br/>
        <br/>

        <div>
          <PieChart
            width={730}
            height={350}
            data={browserMarketData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          />
        </div>

        <br/>
        <br/>

        <div>
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          />
        </div>



      </div>
    )
  }
}

export default ChartPage;
