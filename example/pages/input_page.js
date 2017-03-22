import React, { Component, PropTypes } from 'react';
import { Title, Inline, CodeBlock } from './shared/';
import { Input, Textarea, Divider, Collapsed } from 'rematerial';
import DocumentTitle from 'react-document-title';
import BasicInput from './examples/input/input_example';
import TextareaExample from './examples/input/textarea_example';
import SliderExample from './examples/input/slider_example';
import CheckboxExample from './examples/input/checkbox_example';
import RadioButtonsExample from './examples/input/radio_buttons_example';
import SelectExample from './examples/input/select_example';
const BasicInputSource = require('!!raw!./examples/input/input_example');
const TextareaExampleSource = require('!!raw!./examples/input/textarea_example');
const SliderExampleSource = require('!!raw!./examples/input/slider_example');
const CheckboxExampleSource = require('!!raw!./examples/input/checkbox_example');
const RadioButtonsExampleSource = require('!!raw!./examples/input/radio_buttons_example');

class InputPage extends Component {
  render() {
    return (
      <DocumentTitle title="Input">
        <div>
          <Title title="Form Inputs" desc="Variations of Form Inputs"/>

          <section>
            <h3 className="example-title">1. Text Inputs</h3>
            <BasicInput />
            <Collapsed>
              <CodeBlock type="javascript">
                {BasicInputSource}
              </CodeBlock>
            </Collapsed>
          </section>

          <section>
            <h3 className="example-title">2. Textarea</h3>
            <TextareaExample />
            <Collapsed>
              <CodeBlock type="javascript">
                {TextareaExampleSource}
              </CodeBlock>
            </Collapsed>
          </section>

          <section>
            <h3 className="example-title">3. Checkbox</h3>
            <CheckboxExample />
            <Collapsed>
              <CodeBlock type="javascript">
                {CheckboxExampleSource}
              </CodeBlock>
            </Collapsed>
          </section>

          <section>
            <h3 className="example-title">4. Radio Buttons</h3>
            <RadioButtonsExample />
            <Collapsed>
              <CodeBlock type="javascript">
                {RadioButtonsExampleSource}
              </CodeBlock>
            </Collapsed>
          </section>

          <section>
            <h3 className="example-title">5. Slider</h3>
            <SliderExample />
            <Collapsed>
              <CodeBlock type="javascript">
                {SliderExampleSource}
              </CodeBlock>
            </Collapsed>
          </section>

          <section>
            <h3 className="example-title">6. Select</h3>
            <SelectExample/>
          </section>

        </div>
      </DocumentTitle>
    )
  }
}

export default InputPage;
