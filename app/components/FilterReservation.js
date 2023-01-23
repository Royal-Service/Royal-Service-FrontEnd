"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/Auth";
import EditBooking from "./EditBooking";
function FilterReservation() {


  const [data, setData] = useState([]);
  const { custmerID } = useAuth();


  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://127.0.0.1:8000/api/booking/");

      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);


  const filteredData = data.filter(
    (booking) => booking.custmer === custmerID
  );

  return (
    <div class="container">
      {filteredData.map((d) => (
        <>
          <div key={d.id} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
          >
           <h5> you book a reservation in {d.day} at {d.time} for {d.craftsman.crafts}</h5>
            <EditBooking bookInfo={d}></EditBooking>
          </div>
          <hr />
        </>
      ))
      }
    </div >
  );
}

export default FilterReservation;

