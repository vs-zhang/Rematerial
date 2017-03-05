import React from 'react';
import { Divider } from 'rematerial';
import { Title, CodeBlock } from './shared/';
import DocumentTitle from 'react-document-title';
import DatePickerExample from './examples/date_picker/date_picker_example';
const DatePickerExampleSource = require('!!raw!./examples/date_picker/date_picker_example');

const DatePickerPage = () => {
  return (
    <DocumentTitle title="Date Picker">
      <div>
        <Title title="Date Picker" desc=""/>

        <section>
          <h3 className="example-title">1. Date Picker</h3>
          <DatePickerExample  />
          <CodeBlock type="javascript">
            {DatePickerExampleSource}
          </CodeBlock>
        </section>

        <Divider />
      </div>
    </DocumentTitle>
  )
};

export default DatePickerPage;
