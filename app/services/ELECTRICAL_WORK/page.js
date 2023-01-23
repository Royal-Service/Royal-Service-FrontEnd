"use client"
import React, { useState ,useEffect} from 'react';
import "react-datetime/css/react-datetime.css";
import "../card.css"
import "../page.css"
import Booking from '../../components/Booking';
import Showcraftsman from '../../components/Showcraftsman';

export default function ELECTRICAL_WORK (){

  const [data, setData] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://127.0.0.1:8000/Craftsmans/");
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  const filteredData = data.filter(
    (craft) => craft.crafts === "ELECTRICAL_WORK"
  );








    return(
<>

<div class="container">

{filteredData.map(d => (

  <div key={d.id} class="card">
    <div class="box">
      <div class="content">

        <h3>{d.first_name} {d.last_name}</h3>
        <p>Phone: {d.phone_number}</p>
        <p>Location: {d.location}</p>

        <p>Price: {d.price}JD/hour</p>
        <Booking id={d.id}></Booking>
        <Showcraftsman d={d}></Showcraftsman>
      </div>
    </div>
  </div>

))}
</div>

</>
    )
}