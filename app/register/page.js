"use client";
import React, { useState } from 'react';
import './reg.css';

function RegistrationForm() {
  const [flag,setFlag]=useState(false)
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone_number: '',
    location: '',
    crafts: "MOVING_AND_PACKING",
    role: 'Customer',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      role: flag ? 'Craftsman' : 'Customer',

    });
  };
  const handelFlag =()=>{
    if(flag){
      setFlag(false)
    }else{
      setFlag(true)
    }
    setFormData({
      ...formData,
      role: flag ? 'Customer':'Craftsman',

    });
    console.log(flag)
    console.log("hi")
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    fetch('http://127.0.0.1:8000/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
      //   {

      //   "email": "msadmm@admin.com",
      //   "password": "adminadmin",
      //   "first_name": "asdasdas",
      //   "last_name": "alsd",
      //   "role": "Craftsman",
      //   "phone_number": "0712345678",
      //   "location": "IRBID",
      //   "crafts": "MOVING_AND_PACKING"
      // }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };



  return (


    <div className="section">
      <div className="container1">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3"><span>Client</span><span>Craftsman</span></h6>
              <input onClick={handelFlag}
                className="checkbox" type="checkbox" id="reg-log" name="role" value="Custmer" />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">


                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Sign Up</h4>
                        <form onSubmit={handleSubmit} method="post">

                          <div className="form-group">
                            <input onChange={handleChange}
                              type="text" name="first_name" className="form-style" placeholder="First Name" id="first_name" autoComplete="off"></input>
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              onChange={handleChange}
                              type="text" name="last_name" className="form-style" placeholder="Last Name" last_name="logpass" autoComplete="off"></input>
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <div className="form-group">
                            <input
                              onChange={handleChange}
                              type="tel" name="phone_number" className="form-style" placeholder="Phone Number" id="phone_number" autoComplete="off"></input>
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group">
                            <input type="email"
                              onChange={handleChange}
                              name="email" className="form-style" placeholder="Your Email" id="email" autoComplete="off"></input>
                            <i className="input-icon uil uil-at"></i>
                          </div>

                          <div className="form-group">
                            <input
                              onChange={handleChange}
                              type="Password" name="password" className="form-style" placeholder="Password" id="password" autoComplete="off"></input>
                            <i className="input-icon uil uil-at"></i>
                          </div>


                          <div className="form-group">

                            <label >
                              <select
                                onChange={handleChange}
                                name="location" className="form-style" id="select">
                                <option value="">Select Location</option>
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
                            </label>
                          </div>





                          <button type="submit" className="btn1 mt-4">submit</button>
                        </form>
                      </div>
                    </div>
                  </div>


                  {/* -------------------services provider ------------------------ */}


                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Sign Up</h4>

                        <form onSubmit={handleSubmit} method="post">

                          <div className="form-group">
                            <input
                              onChange={handleChange}
                              type="text" name="first_name" className="form-style" placeholder="First Name" id="first_name" autoComplete="off"></input>
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              onChange={handleChange}
                              type="text" name="last_name" className="form-style" placeholder="Last Name" id="last_name" autoComplete="off"></input>
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <div className="form-group">

                            <input onChange={handleChange}
                              type="email" name="email" className="form-style" placeholder="Your Email" id="email" autoComplete="off"></input>
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group">
                            <input onChange={handleChange}
                              type="tel" name="phone_number" className="form-style" placeholder="Phone Number" id="phone_number" autoComplete="off"></input>
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group">
                            <input onChange={handleChange}
                              type="Password" name="password" className="form-style" placeholder="Password" id="password" autoComplete="off"></input>
                            <i className="input-icon uil uil-at"></i>
                          </div>

                          <div className="form-group">

                            <label >
                              <select onChange={handleChange}
                                name="location" className="form-style" id="select">
                                <option value="">Select Location</option>
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
                            </label>
                          </div>

                          <div className="form-group">

                            <label >
                              <select onChange={handleChange}
                                name="crafts" className="form-style" id="select">
                                <option value="">Crafts</option>
                                <option value="PLUMBING_WORK">Plumbing Work</option>
                                <option value="ELECTRICAL_WORK">Electrical Work</option>
                                <option value="MOVING_AND_PACKING">Moving and packing</option>
                                <option value="HOME_REPAIRS">Home Repairs</option>
                                <option value="POWER_WASHING">Power Washing</option>
                                <option value="PAINTING">Painting</option>
                                <option value="CARPENTRY">Carpentry</option>
                                <option value="HVAC_REPAIR">HVAC repair</option>

                              </select>
                            </label>
                          </div>
                          <button type="submit" className="btn1 mt-4">submit</button>
                        </form>




                      </div>

                    </div>
                  </div>







                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default RegistrationForm;