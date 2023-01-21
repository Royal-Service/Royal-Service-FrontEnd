import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Why() {
    return (
        <Container className='why'>
            <Row>
                <Col><h3 className='why-header'> Why Royal Services? </h3></Col>
            </Row>
            <Row className="card-container">
                <Col>
                    <Card.Body className='why-body'>
                        <Card.Title>Time-saving</Card.Title>
                        <p>                The Royal Service application allows users to easily order and
                schedule a craftsman at a time that is most convenient for them,
                without the need to call or visit a physical location.
                        </p>
                    </Card.Body>
                </Col>
                <Col>
                    <Col>
                        <Card.Body className='why-body'>
                            <Card.Title> Convenience</Card.Title>
                            <p>The Royal Service application allows users to easily order and
                schedule a craftsman at a time that is most convenient for them,
                without the need to call or visit a physical location.
</p>

                        </Card.Body>
                    </Col>
                </Col>
            </Row>
            <Row className="card-container">
                <Col>
                    <Card.Body className='why-body'>
                        <Card.Title> DEDICATED customer support</Card.Title>
                        <p>Our customer support team is available to assist you with any questions or concerns.
                        </p>
                    </Card.Body>
                </Col>
                <Col>
                    <Card.Body className='why-body'>
                        <Card.Title> WIDE range of services offered</Card.Title>
                        <p> Whether you need home repairs, office maintenance, or landscaping services, we've got you covered.
                        </p>
                    </Card.Body>

                </Col>
            </Row>
        </Container>
    )
}
