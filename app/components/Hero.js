"use client"
import React from 'react'
import HeroImg from '../assets/HeroImg.png'
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


export default function Hero() {
    return (
        <Container className='hero'>
            <Row>
                <Col >
                <h3>Connect with confidence</h3>

                <div className='box'>
                    <p>Welcome to Royal Services, where we make it easy for you to find the right professional for the job. Our user-friendly platform connects customers with vetted service providers for a wide range of services, from home repairs to office maintenance.
                    </p>
                    <button class="outline"
                        onClick={() => router.push("/login")}
                    >
                        Join Us
                    </button>
</div>
                </Col>
                <Col></Col>
            </Row>

        </Container>



    )
}