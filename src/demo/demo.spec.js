import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Demo from './demo'

describe('<Demo />', () => {
  it('should render one div', () => {
    const wrapper = shallow(<Demo />)
    expect(wrapper.find('div')).to.have.length(1)
  })
});
