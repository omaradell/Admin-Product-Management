import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export default function AddNavigation() {
  return (
    <Form>
      <h2>Add Navigation</h2>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Page Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Page Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Tab Name</Form.Label>
          <Form.Control type="password" placeholder="Tab Name" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>URL</Form.Label>
          <Form.Control type="text" placeholder="Enter URL " />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>SEO Link Title</Form.Label>
          <Form.Control type="password" placeholder="SEO Link Title" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
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
          <Col className="d-flex p-3">
            <Card
              style={{
                "border-radius": "29px",
                "background-color": "lightblue",
              }}
              className="d-flex sm"
            >
              <Col>
                <Card.Body>products</Card.Body>
              </Col>
              <Col className="px-3">
                <h2>x</h2>{" "}
              </Col>
            </Card>
            <Col className="m-auto d-flex justify-content-end">
              <Button
                variant="primary"
                style={{
                  "border-radius": "60px",
                }}
              >
                +
              </Button>
              <p className="my-2 mx-1"> Add Sub Menu Tabs</p>
            </Col>
          </Col>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Appearance</Form.Label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Open in same window
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Open in New Window{" "}
            </label>
          </div>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Sub Page Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Page Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Sub Tab Name</Form.Label>
          <Form.Control type="password" placeholder="Sub Tab Name" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>URL</Form.Label>
          <Form.Control type="text" placeholder="Enter URL" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>SEO Link Title</Form.Label>
          <Form.Control type="password" placeholder="SEO Link Title" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
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

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Appearance</Form.Label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Open in same window
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Open in New Window{" "}
            </label>
          </div>
        </Form.Group>
      </Row>
      
      <Row>
        <Col className="d-flex  justify-content-end">
          <Button variant="primary" type="submit">
            Publish
          </Button>
        </Col>
        <Col className="">
          <Button variant="secondary" type="cancel">
            Delete
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
