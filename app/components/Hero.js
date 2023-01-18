"use client"
import React from 'react'
import HeroImg from '../assets/HeroImg.png'
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


export default function Hero() {
    return (
        <Row className='hero' lg={2} md={1} sm={1} xs={1}>
            <Col   >
                <Card mx-auto="true" className="border-0 bg-transparent">
                    <Card.Body>
                        <Card.Title 
                        >Connect with confidence</Card.Title>
                        <Card.Text>
                            Welcome to Royal Services, where we make it easy for you to find the right professional for the job. Our user-friendly platform connects customers with vetted service providers for a wide range of services, from home repairs to office maintenance.
                        </Card.Text>
                       
                        <Button href="./register"  variant="primary" className="btns fs-5  px-4 ">Join Today </Button>

                    </Card.Body>
                </Card>
            </Col >
            <Col   className="px-5">
                <Image className='heroImg' src={HeroImg} />
            </Col>
        </Row>
    )
}