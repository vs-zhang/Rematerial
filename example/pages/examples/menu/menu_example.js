import React from 'react';
import { Menu, MenuItem, Divider } from 'rematerial';

const MenuExample = () => {
  return (
    <Menu className="docs-menu-container">
      <MenuItem>Some Action</MenuItem>
      <MenuItem>Another Action</MenuItem>
      <Divider />
      <MenuItem>Yet Another Action</MenuItem>
    </Menu>
  );
};

export default MenuExample;
