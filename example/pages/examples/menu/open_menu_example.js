import React from 'react';
import { Menu, MenuItem, Divider } from 'rematerial';

const OpenMenuExample = () => {
  return (
    <Menu className="docs-open-menu" isOpen>
      <MenuItem label="Some Action" />
      <MenuItem label="Another Action" />
      <Divider />
      <MenuItem label="Yet Another Action" />
      <MenuItem label="One More Action" />
    </Menu>
  );
};

export default OpenMenuExample;
