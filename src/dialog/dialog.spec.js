import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Dialog from './dialog';

describe('<Dialog />', () => {
  describe('open state', () => {
    it('allows us to set props', () => {
      const dialog = mount(<Dialog open />);
      expect(dialog.props().open).to.equal(true);
    });

    it('should render modal', () => {
      const dialog = mount(<Dialog open />);
      expect(dialog.find('.rmd-dialog')).to.have.length(1);
    });
  });
});
