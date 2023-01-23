
"use client";
// import { Yanone_Kaffeesatz} from "@next/font/google";

// const yanone_kaffeesatz = Yanone_Kaffeesatz({ subsets: ["latin"] });


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
  const { tokens, logout, userInfo ,custmerID,craftsmanID} = useAuth();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState();



  return (
    <Navbar className="color-nav" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="../"
          id="nameP" >

          <Image
            alt="logo"
            src={Logo}
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
            id="navlogo"
          />
          Royal Services

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="../">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>

            <Nav.Link href="/support">Support</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {localStorage.getItem("craftsman") ? <Nav.Link href="/dashboard">Profile</Nav.Link> : localStorage.getItem("custmer") ? <Nav.Link href="/custmerprofile">Profile</Nav.Link>:<></>}
            


          </Nav>
          {localStorage.getItem("flag") ? (
            <button class="btnNav" 
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          ) : (<>
            <button class="btnNav" 
              onClick={() => router.push("/login")}
              // className="d-flex me-2"
            >
              Log in
            </button>
            <button class="btnNav" 
              onClick={() => router.push("/register")}
              // className="d-flex me-2"
            >
              Register
            </button>
          </>
          )}


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
