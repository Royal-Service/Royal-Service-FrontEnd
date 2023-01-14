import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function WhyUs() {
  return (
    <Container>
      <div className="why-royal">Why Royal Service</div>
      <Row>
        <Col md={6}>
          <Card className="card-why border-0">
            <Card.Body>
              <Card.Title>Convenience</Card.Title>
              <Card.Text>
                The Royal Service application allows users to easily order and
                schedule a craftsman at a time that is most convenient for them,
                without the need to call or visit a physical location.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-why border-0">
            <Card.Body>
              <Card.Title>Time-saving</Card.Title>
              <Card.Text>
                Using the application allows users to quickly find and book a
                qualified craftsman for their needs without having to spend time
                searching for one.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="card-why border-0">
            <Card.Body>
              <Card.Title>Trustworthy</Card.Title>
              <Card.Text>
                The application allows users to read reviews from previous
                customers, which increases the chance of getting a trustworthy
                craftsman.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-why border-0">
            <Card.Body>
              <Card.Title>Cost-effective</Card.Title>
              <Card.Text>
                The application allows users to compare prices and services from
                different craftsmen, which can help users save money and find
                the best deal for their needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
