"use client"
import React, { useState } from 'react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import "./card.css"
import './datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import  Mods from "../booking-model/page.js"


export default function date (){
    const [selectedTime, setSelectedTime] = useState();

const handleChange = (time) => {
    setSelectedTime(time);
    console.log(time);
}

    return(
<>

{/* <h2 > select your booking date and time</h2>
<Datetime 
  value={new Date()} 
  input={true} 
  className="custom-styles"
  onChange={handleChange}
  renderInput={(props, openCalendar) => (
    <div className="input-container">
      <input {...props} className="form-control" />
      <i className="icon" onClick={openCalendar}><FontAwesomeIcon icon={faCalendar}/></i>
    </div>
  )}
/> */}

{/* ----------------cards-------------- */}

<div class="container">
  
  <div class="card">
    <div class="box">
      <div class="content">
       
        <h3>Card Three</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
       < Mods></ Mods>
      </div>
    </div>
  </div>
  
</div>





</>
    )
}