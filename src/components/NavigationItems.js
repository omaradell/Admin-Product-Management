import React from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

function NavigationItems(props) {
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>Page Name</th>
            <th>Menu Tab</th>
            <th>URL</th>
            <th>Appearance</th>
            <th>Order</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.pagename}</td>
            <td>{props.menutab}</td>
            <td>{props.url}</td>
            <td>{props.appearance}</td>
            <td>{props.order}</td>
            <td>{props.status}</td>
            <td>{props.action}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default NavigationItems;
