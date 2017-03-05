import { ChartContainer, Curve, Legend, Group, LineChart, BarChart, AreaChart, PieChart } from 'rematerial';
import React, { Component, PropTypes } from 'react';
import { Title, Inline, CodeBlock } from './shared/';
import { Input, Textarea, Divider, Collapsed } from 'rematerial';
import DocumentTitle from 'react-document-title';
import LineChartExample from './examples/charts/line_chart_example';
import BarChartExample from './examples/charts/bar_chart_example';
import PieChartExample from './examples/charts/pie_chart_example';
import AreaChartExample from './examples/charts/area_chart_example';
const LineChartExampleSource = require('!!raw!./examples/charts/line_chart_example');
const BarChartExampleSource = require('!!raw!./examples/charts/bar_chart_example');
const PieChartExampleSource = require('!!raw!./examples/charts/pie_chart_example');
const AreaChartExampleSource = require('!!raw!./examples/charts/area_chart_example');

const ChartPage = () => {
  return (
    <DocumentTitle title="Charts">
      <div>
        <Title title="Graph Charts" desc="Variations of Charts"/>

        <section>
          <h3 className="example-title">1. Line Chart</h3>
          <LineChartExample />
          <Collapsed>
            <CodeBlock type="javascript">
              {LineChartExampleSource}
            </CodeBlock>
          </Collapsed>
        </section>

        <Divider />

        <section>
          <h3 className="example-title">2. Bar Chart</h3>
          <BarChartExample />
          <Collapsed>
            <CodeBlock type="javascript">
              {BarChartExampleSource}
            </CodeBlock>
          </Collapsed>
        </section>

        <Divider />

        <section>
          <h3 className="example-title">3. Pie Chart</h3>
          <PieChartExample />
          <Collapsed>
            <CodeBlock type="javascript">
              {PieChartExampleSource}
            </CodeBlock>
          </Collapsed>
        </section>

        <Divider />

        <section>
          <h3 className="example-title">4. Area Chart</h3>
          <AreaChartExample />
          <Collapsed>
            <CodeBlock type="javascript">
              {AreaChartExampleSource}
            </CodeBlock>
          </Collapsed>
        </section>

        <Divider />
      </div>
    </DocumentTitle>
  )
};

export default ChartPage;
