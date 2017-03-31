import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Slider from './slider';

describe('<Slider />', () => {
  let slider;
  beforeEach(() => {
    slider = mount(<Slider value={50} />);
  });

  it('should pass the correct value', () => {
    expect(slider.props().value).to.equal(50);
  });
});
