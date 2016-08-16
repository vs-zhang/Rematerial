import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Chip from './chip'

describe('<Chip />', () => {
  it('should have class rmd__chip', () => {
    const wrapper = shallow(<Chip />);
    expect(wrapper.is('.rmd__chip')).to.eql(true);
  });
});
