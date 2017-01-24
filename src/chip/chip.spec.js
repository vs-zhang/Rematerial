import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Chip from './chip';

describe('<Chip />', () => {
  it('should have class rmd-chip', () => {
    const wrapper = shallow(<Chip />);
    expect(wrapper.is('.rmd-chip')).to.eql(true);
  });
});
