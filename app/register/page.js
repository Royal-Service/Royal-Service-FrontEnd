"use client";
import React, { useState } from 'react';
import './reg.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    age: '',
    country: '',
    gender: '',
    occupation: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission here
  };

  return (


    <div class="section">
      <div class="container1">
        <div class="row full-height justify-content-center">
          <div class="col-12 text-center align-self-center py-5">
            <div class="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 class="mb-0 pb-3"><span>Client</span><span>Craftsman</span></h6>
              <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
              <label for="reg-log"></label>
              <div class="card-3d-wrap mx-auto">
                <div class="card-3d-wrapper">
                  <div class="card-front">
                    <div class="center-wrap">
                      <div class="section text-center">
                        <h4 class="mb-4 pb-3">Sign Up</h4>
                        <div class="form-group">
                          <input type="text" name="logemail" class="form-style" placeholder="First Name" id="logemail" autocomplete="off"></input>
                          <i class="input-icon uil uil-at"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input type="text" name="logpass" class="form-style" placeholder="Last Name" id="logpass" autocomplete="off"></input>
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>
                        <div class="form-group">
                          <input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"></input>
                          <i class="input-icon uil uil-at"></i>
                        </div>
                        <div class="form-group">
                          <input type="tel" name="logemail" class="form-style" placeholder="Phone Number" id="logemail" autocomplete="off"></input>
                          <i class="input-icon uil uil-at"></i>
                        </div>
                        <div class="form-group">
                          <input type="email" name="logemail" class="form-style" placeholder="Password" id="logemail" autocomplete="off"></input>
                          <i class="input-icon uil uil-at"></i>
                        </div>

                        <div class="form-group">

                          <label >
                            <select name="location" class="form-style" id="select">
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





                        <a href="#" class="btn1 mt-4">submit</a>

                      </div>
                    </div>
                  </div>


                  {/* -------------------serves brovider ------------------------ */}
                  <div class="card-back">
                    <div class="center-wrap">
                      <div class="section text-center">
                        <h4 class="mb-4 pb-3">Sign Up</h4>
                        <div class="form-group">
                          <input type="text" name="logemail" class="form-style" placeholder="First Name" id="logemail" autocomplete="off"></input>
                          <i class="input-icon uil uil-at"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input type="text" name="logpass" class="form-style" placeholder="Last Name" id="logpass" autocomplete="off"></input>
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>
                        <div class="form-group">
                          <input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"></input>
                          <i class="input-icon uil uil-at"></i>
                        </div>
                        <div class="form-group">
                          <input type="tel" name="logemail" class="form-style" placeholder="Phone Number" id="logemail" autocomplete="off"></input>
                          <i class="input-icon uil uil-at"></i>
                        </div>
                        <div class="form-group">
                          <input type="email" name="logemail" class="form-style" placeholder="Password" id="logemail" autocomplete="off"></input>
                          <i class="input-icon uil uil-at"></i>
                        </div>

                        <div class="form-group">

                          <label >
                            <select name="location" class="form-style" id="select">
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
                        
                        <div class="form-group">

                          <label >
                            <select name="crafts" class="form-style" id="select">
                              <option value="">Crafts</option>
                              <option value="PLUMBING_WORK">Plumbing Work</option>
                              <option value="ELECTRICAL_WORK">Electrical Work</option>
                              <option value="MOVING_AND_PACKING">Moving and packing</option>
                              <option value="HOME_REPAIRS">Home Repairs</option>
                              <option value="POWER_WASHING">Power Washing</option>
                              <option value="PAINTING">Painting</option>
                              <option value="CARPENTRY">Carpentry</option>
                              <option value="HVAC_REPAIR">HVAC_repair</option>
                            
                            </select>
                          </label>
                        </div>






                        <a href="#" class="btn1 mt-4">submit</a>

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