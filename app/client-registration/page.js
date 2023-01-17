"use client"
import { useState } from "react";
import axios from "axios";
import "./client.css"
import React from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox,
    MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem,
} from "mdb-react-ui-kit";


function Basic() {
    const [formData, setFormData] = useState({"role":"Custmer","crafts":"MOVING_AND_PACKING"});
    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
        }));
      }
    async function handleSubmit(event) {
        event.preventDefault();
        try {
          const response = await axios.post('http://127.0.0.1:8000/register/', formData);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <form onSubmit={handleSubmit}>
        <MDBContainer  fluid>
            <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol
                            md="10"
                            lg="6"
                            className="order-2 order-lg-1 d-flex flex-column align-items-center"
                        >
                            <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                Sign up
                            </p>

                            <div className="d-flex flex-row align-items-center mb-4 ">
                                <MDBIcon fas icon="user me-3" size="lg" />
                                <MDBInput onChange={handleChange}
                                    label="First Name"
                                    id="form1"
                                    type="text"
                                    name="first_name"
                                    className="w-100"
                                />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size="lg" />
                                <MDBInput onChange={handleChange} label="Last Name" id="form2" type="text" name="last_name" />
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size="lg" />
                                <MDBInput onChange={handleChange} label="Your Email" id="form2" type="email" name="email" />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="lock me-3" size="lg" />
                                <MDBInput onChange={handleChange} label="Password" id="form3" type="password" name="password"/>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="key me-3" size="lg" />
                                <MDBInput onChange={handleChange}
                                    label="Your Phone Number"
                                    id="form4"
                                    type="tel"
                                    name="phone_number"
                                />
                            </div>

                            
                            <div class="d-flex flex-row align-items-center mb-4 ">
                                <div className="select">
                                    <label class="form-label" for="form1" >City</label>
                                    <select onChange={handleChange} name="location" class="form-control w-100"
                                    >
                                        <option value="">Select</option>
                                        <option value="AMMAN">Amman</option>
                                        <option value="ZARQA">Zarqa</option>
                                        <option value="IRBID">Irbid</option>
                                        <option value="AQAPA">Aqaba</option>
                                        <option value="MAFRAQ">Mafraq</option>
                                        <option value="MADABA">Madaba</option>
                                        <option value="BALQA">As-Salt</option>
                                        <option value="JERASH">Jerash</option>
                                        <option value="MAAN">Ma'an</option>
                                        <option value="KARAK">Karak</option>
                                        <option value="TAFILAH">Tafilah</option>
                                        <option value="AJLOUN">Ajloun</option>
                                    </select>
                                </div>
                                </div>
                                

                                <MDBBtn type="submit" className="mb-4" size="lg">
                                    Register
                                </MDBBtn>
                        </MDBCol>

                        <MDBCol
                            md="10"
                            lg="6"
                            className="order-1 order-lg-2 d-flex align-items-center"
                        >
                            <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                fluid
                            />
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
        </form>
    );
}

export default Basic;