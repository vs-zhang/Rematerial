import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Checkbox from './checkbox';

describe('<Checkbox />', () => {
  let checkbox;
  beforeEach(() => {
    checkbox = mount(<Checkbox label="test checkbox" />);
  });

  it('should render correct label', () => {
    expect(checkbox.find('.rmd-checkbox__label').text()).to.equal('test checkbox');
  });
});
