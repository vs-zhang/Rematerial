import React from 'react';
import { Menu, MenuItem, Divider } from 'rematerial';

const OpenMenuExample = () => {
  return (
    <Menu className="docs-open-menu" isOpen>
      <MenuItem>Some Action</MenuItem>
      <MenuItem>Another Action</MenuItem>
      <Divider />
      <MenuItem>Yet Another Action</MenuItem>
      <MenuItem>One More Action</MenuItem>
    </Menu>
  );
};

export default OpenMenuExample;
