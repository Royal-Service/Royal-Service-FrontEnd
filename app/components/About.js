import React from 'react'
import AboutImg from "../assets/AboutImg.png"
import Image from 'next/image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function About() {
    return (
        <Row className='about' lg={2} md={1} sm={1} xs={1}>
            <Col  lg={{ order: 'first' }} xs={{ order: 'last' }}  md={{ order: 'lsat' }} sx={{ order: 'last' }} sm={{ order: 'last' }}>
                <Image className='aboutImg' src={AboutImg} />
            </Col>
            <Col >
                <Card mx-auto className="border-0 bg-transparent">
                    <Card.Body>
                        <Card.Title className='circle'
                        >Who We Are ?</Card.Title>
                        <Card.Text>
                            We connect customers with trusted service providers for a wide range of services. Our platform is user-friendly and easy to use, making it simple to find the right professional for the job. Our service providers are vetted, licensed, insured, and have a proven track record of delivering high-quality work. Join us for a stress-free service experience and guaranteed satisfaction
                        </Card.Text>

                    </Card.Body>
                </Card>
            </Col>
        </Row>

   

    )
}

