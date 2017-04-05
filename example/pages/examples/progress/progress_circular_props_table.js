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
            <td>value</td>
            <td>number</td>
            <td>0.75</td>
            <td>any number between 0-1</td>
          </tr>
          <tr>
            <td>size</td>
            <td>number</td>
            <td>50</td>
            <td>size of the progress circular</td>
          </tr>
          <tr>
            <td>type</td>
            <td>oneOf [determinate, indeterminate]</td>
            <td>indeterminate</td>
            <td></td>
          </tr>
          <tr>
            <td>strokeWidth</td>
            <td>number</td>
            <td>5</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FabToolbarPropsTable;
