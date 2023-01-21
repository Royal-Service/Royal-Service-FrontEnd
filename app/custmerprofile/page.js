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


export default function CustmerProfile() {
     const { userInfo,custmerID } = useAuth();

     const userInfoURL = "http://127.0.0.1:8000/profile/";
     
   
   
     const [userData, setUserData] = useState();
     
   


     useEffect(() => {
       (async () => {
         if (Number.isInteger(custmerID)) {
           const userdata = await axios.get(userInfoURL + custmerID);
   
           setUserData(userdata.data);
   
         }
   
       })();
     }, []);
     console.log(userData)
   
     if (userData) {
          return (
          <section style={{ backgroundColor: "#eee" }}>
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
                    {/* <p className="text-muted mb-1">{userData.crafts}</p>
                    <p className="text-muted mb-4">{userData.location}</p> */}
                    <div className="d-flex justify-content-center mb-1">
                         <MDBBtn>Change Profile Picture</MDBBtn>
                    </div>
                    </MDBCardBody>
               </MDBCard>

               
                    {/* Reservation Schedule Information */}
               <MDBCard className="mb-4 mb-lg-0 custom-width">
                    <MDBCardBody className="p-50">
                    <MDBCardTitle className="text-right header-custom">Reservation schedule</MDBCardTitle>
                    <MDBListGroup flush className="rounded-3">
                         <MDBListGroupItem className="d-flex  p-3">
                         <MDBCardText className="text-right">First reservation:</MDBCardText>
                         </MDBListGroupItem>
                         <MDBListGroupItem className="d-flex align-items-center p-3">
                         <MDBIcon
                         fab
                         icon="twitter fa-lg"
                         style={{ color: "#55acee" }}
                         />
                         <MDBCardText className="text-right">Second reservation:</MDBCardText>
                         </MDBListGroupItem>
                         <MDBListGroupItem className="d-flex  align-items-center p-3">
                         <MDBIcon
                         fab
                         icon="instagram fa-lg"
                         style={{ color: "#ac2bac" }}
                         />
                         <MDBCardText className="text-right">Third reservation:</MDBCardText>
                         </MDBListGroupItem>
                         <MDBListGroupItem className="d-flex align-items-center p-3">
                         <MDBIcon
                         fab
                         icon="facebook fa-lg"
                         style={{ color: "#3b5998" }}
                         />
                         <MDBCardText className="text-right">Fourth reservation:</MDBCardText>
                         </MDBListGroupItem>
                    </MDBListGroup>
                    </MDBCardBody>
               </MDBCard>
               </MDBCol>

               {/* Custmer Information Section */}
               <MDBCol lg="8">
               <MDBCard className="mb-4">
                    <MDBCardBody>
                    <MDBRow>
                         <MDBCol sm="3">
                         <MDBCardText>Full Name</MDBCardText>
                         </MDBCol>
                         <MDBCol sm="9">
                         {/* <MDBCardText className="text-muted">
                         {userData.first_name+" "+userData.last_name}
                         </MDBCardText> */}
                         </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                         <MDBCol sm="3">
                         <MDBCardText>Email</MDBCardText>
                         </MDBCol>
                         {/* <MDBCol sm="9">
                         <MDBCardText className="text-muted">
                         {userInfo}
                         </MDBCardText>
                         </MDBCol> */}
                    </MDBRow>
                    <hr />
                    <MDBRow>
                         <MDBCol sm="3">
                         <MDBCardText>Phone</MDBCardText>
                         </MDBCol>
                         {/* <MDBCol sm="9">
                         <MDBCardText className="text-muted">
                         {userData.phone_number}
                         </MDBCardText>
                         </MDBCol> */}
                    </MDBRow>
                    <hr />
                    <MDBRow>
                         <MDBCol sm="3">
                         <MDBCardText>Location</MDBCardText>
                         </MDBCol>
                         {/* <MDBCol sm="9">
                         <MDBCardText className="text-muted">
                         {userData.location}
                         </MDBCardText>
                         </MDBCol> */}
                    </MDBRow>
                    </MDBCardBody>
               </MDBCard>


               </MDBCol>
               </MDBRow>
          </MDBContainer>
          </section>
     );
          }
     }
