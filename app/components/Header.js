"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import { useAuth } from "../contexts/Auth";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Header() {
  const userInfoURL = "http://127.0.0.1:8000/profile/";
  const { tokens, logout, userInfo } = useAuth();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState();

  // useEffect(() => {
  //   (async () => {
  //     if (userInfo) {
  //       if (Number.isInteger(userInfo)) {
  //         const data = await axios.get(userInfoURL + userInfo);
  //         setUserData(data.data.username);
  //       } else {
  //         const data = await axios.get(userInfoURL + userInfo.email);
  //         setUserData(data.data.username);
  //       }
  //     }
  //   })();
  // }, []);

  return (
    <Navbar className="nav" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            alt="logo"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />
          <a className="pname" href="../"><h3>Royal Services</h3></a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className="navl" href="../">Home</Nav.Link>
            <Nav.Link className="navl" href="./services">Services</Nav.Link>

            <Nav.Link className="navl" href="#support">Support</Nav.Link>
            <Nav.Link className="navl" href="/about">About</Nav.Link>
          </Nav>
          {tokens ? (
            <Button
              onClick={() => {
                logout();
              }}
              className="d-flex me-2"
              variant="outline-success"
            >
              logout
            </Button>
          ) : (
            <Button
              onClick={() => router.push("/login")}
              className="d-flex me-2"
              variant="outline-success"
            >
              Log in
            </Button>
          )}

          <Button
            href="./register"
            className="d-flex me-2"
            variant="outline-success"
          >
            Register
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
