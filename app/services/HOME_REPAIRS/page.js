"use client"
import React, { useState, useEffect } from 'react';
import "react-datetime/css/react-datetime.css";
import "../card.css"
import "../page.css"
import { useRouter } from 'next/navigation';
import Booking from '../../components/Booking';

export default function HOME_REPAIRS() {

  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://127.0.0.1:8000/Craftsmans/");
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  const filteredData = data.filter(
    (craft) => craft.crafts === "HOME_REPAIRS"
  );


  return (
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
              </div>
            </div>
          </div>

        ))}
      </div>



    </>
  )
}