import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Row, Col } from "react-bootstrap";

export default function ManagePageContent() {
  return (
    <>
      <Row>
        <Col>
          <Card.Title>Manage Content Page</Card.Title>
          <Button variant="success">New Page</Button>{" "}
          <Button variant="info" style={{ margin: "0px 0px 0px 5px" }}>
            Export File{" "}
          </Button>{" "}
        </Col>
        <Col className="d-flex justify-content-end ">
          <InputGroup className="mb-3">
            <Form.Control
              // className="d-flex justify-content-end"
              // style={{q
              //   width: "50%",
              // }}
              className="d-flex justify-content-end "
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              ch
            />
            <Button variant="outline-secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </>
  );
}
