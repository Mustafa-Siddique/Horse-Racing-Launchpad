import React from "react";
import { Table } from "reactstrap";

const Tabularboard = (props) => {
  return (
    <div className="container bg-white px-4 py-3">
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Tabularboard;