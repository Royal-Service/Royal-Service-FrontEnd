"use client";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBCardTitle,
  MDBModalBody,
  MDBModal,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { useAuth } from "../contexts/Auth";
import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import "./custmerprofile.css"
import Modal2 from "./Modal";
import FilterReservation from "../components/FilterReservation";

export default function CustmerProfile() {
     const { userInfo,custmerID } = useAuth();
     const [modalOpen, setModalOpen] = useState(false);
     const userInfoURL = "http://127.0.0.1:8000/profile/";
     
   
   
     const [userData, setUserData] = useState();
     const [formData, setFormData] = useState({
          first_name: '',
          last_name: '',
          phone_number: '',
          location: '',
       });
   


     useEffect(() => {
       (async () => {
         if (Number.isInteger(custmerID)) {
          const userdata = await axios.get(userInfoURL + custmerID + "/");
          
          setUserData(userdata.data);
          
         }
   
       })();
     },[]);
     console.log(userData)
     
     // const handleFormChange = (e) => {
     //      setFormData({
     //          ...formData,
     //          [e.target.name]: e.target.value
     //      });
     //  }

     //  const handleFormSubmit = async (e) => {
     //      e.preventDefault();
     //      try {
     //          await axios.put(userInfoURL + custmerID + "/", formData);
     //          setModalOpen(false);
     //      } catch (error) {
     //          console.log(error);
     //      }
     //  }

     
     if (userData) {
          return (
            <div class="bg-dark">
            <section  style={{ backgroundColor: "#eee" }}>
              <MDBContainer className="py-5">
                <br></br>
                <br></br>
                <br></br>

                {/* Profile Picture Section */}
                <MDBRow>
                  <MDBCol lg="4">
                    <MDBCard className="mb-4">
                      <MDBCardBody className="text-center">
                        <MDBCardImage
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                          alt="avatar"
                          className="rounded-circle"
                          style={{ width: "150px" }}
                          fluid
                        />
                        <p className="text-muted mb-4">{userData.location}</p>
                        <div className="d-flex justify-content-center mb-1">
                        <Modal2 userData={userData} />
                        </div>
                      </MDBCardBody>
                    </MDBCard>

                    {/* Reservation Schedule Information */}
                    <MDBCard className="mb-4 mb-lg-0 custom-width">
                      <MDBCardBody className="p-50">
                        <MDBCardTitle className="text-left header-custom">
                          Reservation schedule:
                        </MDBCardTitle>
                        <MDBListGroup flush className="rounded-3">


                          <MDBListGroupItem className="d-flex  p-3">
                            <MDBCardText className="text-left">
                              <FilterReservation />
                            </MDBCardText>
                          </MDBListGroupItem>


                        </MDBListGroup>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                  {/* Custmer Information Section */}
                  <MDBCol lg="8">
                    {/* <MDBBtn >Edit</MDBBtn> */}
                    
                    <MDBCard className="mb-4">
                      <MDBCardBody>
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>Full Name</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">
                              {userData.first_name + " " + userData.last_name}
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>Email</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">
                              {userInfo}
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>Phone</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">
                              {userData.phone_number}
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>Location</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">
                              {userData.location}
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                    </MDBCard>

                    {/* <MDBModalBody>
                      <form>
                        <input
                          type="text"
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleFormChange}
                        />
                        <input
                          type="text"
                          name="phone_number"
                          value={formData.phone_number}
                          onChange={handleFormChange}
                        />
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleFormChange}
                        />
                        <MDBBtn onClick={handleFormSubmit}>Save</MDBBtn>
                      </form>
                      <MDBBtn onClick={() => setModalOpen(false)}>Close</MDBBtn>
                    </MDBModalBody> */}
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

          </div>
          );
          }
     }
