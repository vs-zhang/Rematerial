import React from 'react';
import { Menu, MenuItem, Divider } from 'rematerial';

const MenuExample = () => {
  return (
    <Menu className="docs-menu-container">
      <MenuItem label="Some Action" />
      <MenuItem label="Another Action" />
      <Divider />
      <MenuItem label="Yet Another Action" />
    </Menu>
  );
};

export default MenuExample;
