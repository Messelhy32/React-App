import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import img from "./logo512.png";

function App() {
  return (
    <Container className="vw-100 vh-100 d-flex flex-column justify-content-center m-auto align-items-center">
      <Form className="w-50">
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className="text-primary">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label className="text-primary">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button>Sign In</Button>
          </Col>
          <Col className="m-auto text-center">
            <img src={img} alt="" className="w-50 m-auto"/>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default App;
