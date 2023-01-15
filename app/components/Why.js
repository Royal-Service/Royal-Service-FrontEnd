import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Why() {
    return (
        <Container>
            <Row>
                <Col> Why Royal Services? </Col>
            </Row>
            <Row className="card-container">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title> USER-FRIENDLY platform</Card.Title>
                            Our platform is designed to make it easy for you to find the right professional for the job.
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title> SATISFACTION guaranteed</Card.Title>
                                We stand behind our work and are committed to your satisfaction.

                            </Card.Body>
                        </Card>
                    </Col>
                </Col>
            </Row>
            <Row className="card-container">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title> DEDICATED customer support</Card.Title>
                            Our customer support team is available to assist you with any questions or concerns.

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title> WIDE range of services offered</Card.Title>
                            Whether you need home repairs, office maintenance, or landscaping services, we've got you covered.

                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    )
}
