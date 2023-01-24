// import './dashboard.css'
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
import { useRouter } from "next/navigation";
import "./dashboard.css";
import Editcraftsman from "../editcraftsman/page";
import FilterBooking from "../components/FilterBooking";
import Review from "../components/Review";
import Rate from "../components/Rate";
export default function Profile() {
  const { userInfo, craftsmanID } = useAuth();

  const userInfoURL = "http://127.0.0.1:8000/Craftsmans/profile/";
  let reviewURL = "http://127.0.0.1:8000/review/craftsman/";

  const [userData, setUserData] = useState();
  const [rate, setRate] = useState();
  const [allReview, setAllReview] = useState();
  const [rateflag,setRateFlag]=useState(false)

  const filterReview = (arr) => {
    let reviews = arr[2].reviews;
    // let Reviews = reviews.map((item) => item.review);
    setAllReview(reviews);
    return reviews;
  };
  useEffect(() => {
    (async () => {
      if (Number.isInteger(craftsmanID)) {
        const userdata = await axios.get(userInfoURL + craftsmanID);
        const rate = await axios.get(reviewURL + craftsmanID + "/");

        setUserData(userdata.data);
        setRate(rate.data);
        filterReview(rate.data);
      }
    })();
  }, []);
  console.log(rate +"outtttttttt")
  if (userData) {
    return (
      <div className="imgbg"  style={{ backgroundImage:" url('https://cdn.discordapp.com/attachments/1023858495428235294/1067370789831184494/DALLE_2023-01-23_12.52.13_-_wooden_background.png')"
    , paddingTop:"150px"  }}>

       <section className="imgbg" style={{ backgroundImage:" url('https://cdn.discordapp.com/attachments/1023858495428235294/1067370789831184494/DALLE_2023-01-23_12.52.13_-_wooden_background.png')"
    }}>
       
        <MDBContainer className="py-5" style={{textAlign: "center"  }}>
       

          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4" style={{ backgroundColor: "#AA894E" }}>
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />
                  <p className="text-muted mb-1">{userData.crafts}</p>
                  <p className="text-muted mb-4">{userData.location}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <Editcraftsman userData={userData}></Editcraftsman>
                   
                  </div>
                </MDBCardBody>
              </MDBCard>


              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0" style={{ backgroundColor: "#AA894E" }}>
                  <MDBListGroup flush className="rounded-3" >
                    <MDBListGroupItem className="d-flex  align-items-center p-3"  style={{ backgroundColor: "#AA894E" }}>
                      <MDBIcon fas icon="globe fa-lg text-warning" />
                      <MDBCardText  style={{ backgroundColor: "#AA894E" ,textAlign: "left" ,fontSize: "1.2em" }}  >
                         <h4>Average rating : {rate[1].toFixed(1)} </h4>

                      </MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex  align-items-center p-3"   style={{ backgroundColor: "#AA894E" }}>
                      <MDBIcon
                        fab
                        icon="github fa-lg"
                        style={{ color: "#333333" }}
                      />
                      <MDBCardText id="revis2" style={{ backgroundColor: "#AA894E" }}>





                        <Review allReview={allReview}>
                        
                        </Review>
                    




                      </MDBCardText>
                    </MDBListGroupItem>
                  </MDBListGroup>

                </MDBCardBody>
              </MDBCard>
              
         

            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4"  style={{ backgroundColor: "#AA894E" }}>
                <MDBCardBody  style={{ backgroundColor: "#AA894E" }}>
                  <MDBRow  style={{ backgroundColor: "#AA894E" }}>
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
                      <MDBCardText>Price </MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {userData.price} JD/hour
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>location</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {userData.location}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>

              <MDBRow>
                <MDBCol md="12">
                  <MDBCard className="mb-4 mb-md-0" style={{ backgroundColor: "#AA894E" }}>
                    <MDBCardBody>
                      <FilterBooking></FilterBooking>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
       
      </section>
      </div>
    );
  } else {
    return (
      <div class="gearbox">
        <div class="overlay"></div>
        <div class="gear one">
          <div class="gear-inner">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </div>
        <div class="gear two">
          <div class="gear-inner">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </div>
        <div class="gear three">
          <div class="gear-inner">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </div>
        <div class="gear four large">
          <div class="gear-inner">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </div>
      </div>
    );
  }
}
