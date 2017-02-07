import React, { Component, PropTypes } from 'react';
import { Input, Textarea } from 'rematerialize';

class InputPage extends Component {
  render() {
    return (
      <div>
        <div>
          <Input label="Basic Input"/>
        </div>
        <div>
          <Input
            label="Input with default value"
            defaultValue="default value"
          />
        </div>
        <div>
          <Input
            label="Floating Label"
            floatingLabel={true}
            defaultValue="abcd"
          />
        </div>
        <div>
          <Textarea
            label="Floating Textarea"
            floatingLabel={true}
            defaultValue="Textarea"
          />
        </div>
        <div>
          <Textarea
            rows="4"
            cols="50"
            label="Floating Textarea"
            floatingLabel={true}
            defaultValue="Textarea"
          />
        </div>

      </div>
    )
  }
}

export default InputPage;
