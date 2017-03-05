import React  from 'react';
import { Tooltip, Button, Icon } from 'rematerial';

const TooltipExample = () => {
  return (
    <div>
      <Tooltip text="Fab Button" placement="top">
        <Button type="fab">
          <Icon name="add" />
        </Button>
      </Tooltip>
    </div>
  );
};

export default TooltipExample;
