import React from 'react';

const FabToolbarPropsTable = () => {
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
            <td>oneOf [left, right]</td>
            <td>right</td>
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

export default FabToolbarPropsTable;
