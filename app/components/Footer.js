import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Image from 'next/image';
import Fa from "../assets/Fa.png";
import Linked from "../assets/linked.png";
import github from "../assets/github.png";

export default function Footer() {
  return (
    <div className="footer-basic">
      <footer className="pt-5">
        <Container>
          <Row className="justify-content-between">
            <Col md={5} className="mb-3">
              <h5>Who We Are ?</h5>
              <p>
                We connect customers with trusted service providers for a wide range of services. Our platform is user-friendly and easy to use, making it simple to find the right professional for the job. Our service providers are vetted, licensed, insured, and have a proven track record of delivering high-quality work.
              </p>
            </Col>

            <Col md={2} className="mb-3">
            </Col>
            <Col md={2} className="mb-3">
              <h5>Quick Links</h5>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="../">Home</a>
                </li>
                <li className="list-inline-item">
                  <a href="/services">Services</a>
                </li>
                <li className="list-inline-item">
                  <a href="/about">About</a>
                </li>

                <li className="list-inline-item">
                  <a href="/support">Support</a>
                </li>
              </ul>
            </Col>
            <Col md={2} className="mb-3">
              <h5>Contact Us</h5>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="../">962 79 0520 759</a>
                </li>
                <li className="list-inline-item">
                  <a href="/services"> Amman  , Jordan</a>
                </li>
              </ul>
            </Col>
          </Row>

          <Row className=" py-4 border-top " style={{ borderTopColor: 'black' }}>
            <Col sm={10} >
              <p>© 2023 Royal Service . All rights reserved.</p>
            </Col>
            <Col sm={2} >
              <a href="https://facebook.com">
                <Image className="mx-1" src={Fa} />
              </a>
              <a href="https://linkedin.com">
                <Image className="mx-1" src={Linked} />
              </a>


              <a href="https://github.com/Royal-Service">
                <Image className="mx-1" src={github} />
              </a>

          </Col>
        </Row>
      </Container>
    </footer >

    </div >

  );
}

