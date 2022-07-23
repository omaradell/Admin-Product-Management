import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function NewHomeBanner() {
  return (
    <>
      <Row>
        <Col >
          <Card >
            <Row className="d-flex justify-content-center p-2">
              <Card border="" style={{ width: "40rem", height: "20rem" }}>
                <Card.Title className="d-flex justify-content-lg-center py-5">
                  {" "}
                  Upload Image
                </Card.Title>
              </Card>
            </Row>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Image title</Form.Label>
                <Form.Control placeholder="title" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Image URL</Form.Label>
                <Form.Control placeholder="URL" />
              </Form.Group>
              <Row>
                <Col className="d-flex  justify-content-center">
                  <Button variant="primary" type="submit">
                    Publish
                  </Button>
                  <Button variant="secondary" type="cancel">
                    Delete
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="" style={{ width: "18rem" }}>
            <Card.Body>
            <h5>Order</h5>

              <InputGroup className="mb-3">
                <Form.Control aria-label="Text input with dropdown button" />

                <DropdownButton
                  variant="outline-secondary"
                  title=""
                  id="input-group-dropdown-2"
                  align="end"
                >
                  <Dropdown.Item href="#">1</Dropdown.Item>
                  <Dropdown.Item href="#">2</Dropdown.Item>
                  <Dropdown.Item href="#">3</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">4</Dropdown.Item>
                </DropdownButton>
              </InputGroup>
              <h5>Visibility</h5>

              <InputGroup className="mb-3">
                <Form.Control aria-label="Text input with dropdown button" />

                <DropdownButton
                  variant="outline-secondary"
                  title=""
                  id="input-group-dropdown-2"
                  align="end"
                >
                  <Dropdown.Item href="#">1</Dropdown.Item>
                  <Dropdown.Item href="#">2</Dropdown.Item>
                  <Dropdown.Item href="#">3</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">3</Dropdown.Item>
                </DropdownButton>
              </InputGroup>
              <h5>Published Date</h5>
              <InputGroup className="mb-3">
                <Form.Control aria-label="Text input with dropdown button" />

                <DropdownButton
                  variant="outline-secondary"
                  title=""
                  id="input-group-dropdown-2"
                  align="end"
                >
                  <Dropdown.Item href="#">1</Dropdown.Item>
                  <Dropdown.Item href="#">2</Dropdown.Item>
                  <Dropdown.Item href="#">3</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">4</Dropdown.Item>
                </DropdownButton>
              </InputGroup>
              <h5>Published time</h5>
              <InputGroup className="mb-3">
                <Form.Control aria-label="Text input with dropdown button" />

                <DropdownButton
                  variant="outline-secondary"
                  title=""
                  id="input-group-dropdown-2"
                  align="end"
                >
                  <Dropdown.Item href="#">1</Dropdown.Item>
                  <Dropdown.Item href="#">2</Dropdown.Item>
                  <Dropdown.Item href="#">3</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">4</Dropdown.Item>
                </DropdownButton>
              </InputGroup>
              <Row>
                <Col>
                <h5>Editor</h5>
                <Card border="primary" style={{ height: '50px' }}>
                    <Card.Title>Mohamed Ali</Card.Title>
                </Card>
                </Col>
                
              </Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Status</Form.Label>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    toggle
                  />
                  <label class="form-check-label" for="flexSwitchCheckChecked">
                    Active{" "}
                  </label>
                </div>
              </Form.Group>
              

              <Row>
                <Col className="d-flex  justify-content-center">
                  <Button variant="primary" type="submit">
                    Publish
                  </Button>
                  <Button variant="secondary" type="cancel">
                    Delete
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default NewHomeBanner;
