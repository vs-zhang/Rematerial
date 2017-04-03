import React from 'react';

const FabSpeedDialPropsTable = () => {
  return (
    <div className="docs-prop-table-container">
      <table className="docs-prop-table bordered">
        <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>isOpen</td>
          <td>boolean</td>
          <td>false</td>
          <td></td>
        </tr>
        <tr>
          <td>direction</td>
          <td>oneOf [up, down, left, right]</td>
          <td>up</td>
          <td></td>
        </tr>
        <tr>
          <td>animationType</td>
          <td>oneOf [scale]</td>
          <td>scale</td>
          <td></td>
        </tr>
        <tr>
          <td>children</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FabSpeedDialPropsTable;
