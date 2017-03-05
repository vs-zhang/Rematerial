import React  from 'react';
import { Sticky } from 'rematerial';

const StickyExample = () => {
  return (
    <div>
      <Sticky topOffset={64}>
        <div className="docs-sticky--yellow">
          Yellow
        </div>
      </Sticky>
      <Sticky topOffset={64 + 50}>
        <div className="docs-sticky--red">
          Red
        </div>
      </Sticky>
      <Sticky topOffset={64 + 100}>
        <div className="docs-sticky--green">
          Green
        </div>
      </Sticky>
      <Sticky topOffset={64 + 150}>
        <div className="docs-sticky--blue">
          blue
        </div>
      </Sticky>

      <br />
    </div>
  );
};

export default StickyExample;
