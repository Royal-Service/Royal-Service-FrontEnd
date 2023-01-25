"use client";

import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

import { useState, useEffect } from "react";
import axios from "axios";

import "../dashboard/dashboard.css";

import Review from "../components/Review";
import Re from "../components/Re"

function Showcraftsman({ d }) {
    const data = d  
  const values = true;
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const userInfoURL = "http://127.0.0.1:8000/Craftsmans/profile/";
  let reviewURL = "http://127.0.0.1:8000/review/craftsman/";
  
  
  const [allReview, setAllReview] = useState();

  const filterReview = (arr) => {
    let reviews = arr[2].reviews;
    // let Reviews = reviews.map((item) => item.review);
    setAllReview(reviews);
    return reviews;
  };
//   useEffect(() => {
//     (async () => {
//       if (Number.isInteger(d.id)) {
        
//         const rate = await axios.get(reviewURL + d.id + "/");

        
//         filterReview(rate.data);
//       }
//     })();
//   }, []);
// console.log(data)
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      <Button className="me-2 mb-2" onClick={() => handleShow(values)}>
        show Profile
      </Button>

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton style={{backgroundColor: "rgb(46, 23, 8)" ,color:"white"}}>
          <Modal.Title>{d.first_name + " " + d.last_name} Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#AA894E" ,color:"whitesmoke" }}>
          {d && (
            <>
              <section style={{ backgroundColor: "#AA894E" ,color:"whitesmoke" }}>
                <MDBContainer className="py-5"  style={{  backgroundColor: "#AA894E" }}>
                  <MDBRow>

                  </MDBRow>

                  <MDBRow>
                    <MDBCol lg="4">
                      <MDBCard className="mb-4" >
                        <MDBCardBody className="text-center" style={{ backgroundColor: "rgb(170, 137, 78)" ,borderRadius:"20%",  margin: "20px"}}>
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                            alt="avatar"
                            className="rounded-circle"
                            style={{ width: "150px" }}
                            fluid
                          />
                          <hr></hr>
                          <h5 className="text-muted mb-1"> Craft : {d.crafts}</h5>
                          <hr></hr>
                          <h5 className="text-muted mb-4">Location : {d.location}</h5>
 
                        </MDBCardBody>
                      </MDBCard>

                      <MDBCard className="mb-4 mb-lg-0">
                        <MDBCardBody className="p-0" >
                          <MDBListGroup flush className="rounded-3" style={{ width: "900px" }}>
                            <MDBListGroupItem className="d-flex  align-items-center p-3" style={{ backgroundColor: "#2E1708" ,color:"white"}}>
                              <MDBIcon fas icon="globe fa-lg text-warning" />
                              <MDBCardText style={{marginLeft: "40%"}} >
                                Average rating : 
                              </MDBCardText>
                            </MDBListGroupItem>
                            <MDBListGroupItem className="d-flex  align-items-center p-3" style={{ backgroundColor:"#3C2A21"}}>
                              <MDBIcon
                                fab
                                icon="github fa-lg"
                                style={{ color: "#333333" }}
                              />
                              <MDBCardText >
                                
                                <Re id={data.id}></Re>
                              </MDBCardText>
                            </MDBListGroupItem>
                          </MDBListGroup>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol lg="8">
                      <MDBCard className="mb-4">
                        <MDBCardBody style={{ backgroundColor: "rgb(170, 137, 78)",borderRadius:"20%"  , margin: "20px"}}>
                          <MDBRow style={{ marginLeft: "25px"}}>
                            <MDBCol sm="3">
                              <MDBCardText>Full Name</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                              <MDBCardText className="text-muted" >
                                {d.first_name + " " + d.last_name}
                              </MDBCardText>
                            </MDBCol>
                          </MDBRow>
                          <hr />
                          {/* <MDBRow style={{ marginLeft: "25px"}}>
                            <MDBCol sm="3">
                              <MDBCardText>Email</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                              <MDBCardText className="text-muted">
                                {d.email}
                              </MDBCardText>
                            </MDBCol>
                          </MDBRow>
                          <hr /> */}
                          <MDBRow style={{ marginLeft: "25px"}}>
                            <MDBCol sm="3">
                              <MDBCardText>Phone</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                              <MDBCardText className="text-muted" >
                                {d.phone_number}
                              </MDBCardText>
                            </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow style={{ marginLeft: "25px"}}>
                            <MDBCol sm="3">
                              <MDBCardText>Price </MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                              <MDBCardText className="text-muted">
                                {d.price} JD/hour
                              </MDBCardText>
                            </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow style={{ marginLeft: "25px"}}>
                            <MDBCol sm="3">
                              <MDBCardText>location</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                              <MDBCardText className="text-muted">
                                {d.location}
                              </MDBCardText>
                            </MDBCol>
                          </MDBRow>
                        </MDBCardBody>
                      </MDBCard>

   
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </section>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Showcraftsman;
