// import './dashboard.css'
"use client"
import "./login.css"
import React from 'react';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBInput,
} from 'mdb-react-ui-kit';
import Image from "next/image";

export default function login() {
    return (
        <MDBContainer fluid className="p-3 my-5 h-custom">

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
                </MDBCol>

                <MDBCol col='4' md='6'>



                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">Login to your Account</p>
                    </div>

                    <MDBInput wrapper="true" Class='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
                    <MDBInput wrapper="true" Class='mb-4' label='Password' id='formControlLg' type='password' size="lg" />

                    

                    <div className='text-center text-md-start mt-4 pt-2'>
                        <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
                        <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
                    </div>

                </MDBCol>

            </MDBRow>


     </MDBContainer>

    )
}