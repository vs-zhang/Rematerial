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

  it('should render correct check value', () => {
    expect(checkbox.hasClass('is-checked')).to.equal(false);
    checkbox.setState({ isChecked: true });
    expect(checkbox.hasClass('is-checked')).to.equal(true);
  });

  it('should trigger the value after click the checkbox', () => {
    expect(checkbox.hasClass('is-checked')).to.equal(false);
    expect(checkbox.state().isChecked).to.equal(false);
    checkbox.find('input').simulate('change');
    expect(checkbox.hasClass('is-checked')).to.equal(true);
    expect(checkbox.state().isChecked).to.equal(true);
  });
});
