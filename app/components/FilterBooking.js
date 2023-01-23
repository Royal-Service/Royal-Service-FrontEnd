"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/Auth";
import Showcustmer from "./Showcustmer";
function FilterBooking() {
  const [data, setData] = useState([]);

  const { craftsmanID } = useAuth();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://127.0.0.1:8000/api/booking/");

      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);


  const filteredData = data.filter(
    (booking) => booking.craftsman.id === craftsmanID
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
           <h5> you have reservation in {d.day} at {d.time}</h5>
            <Showcustmer datac={d}></Showcustmer>
          </div>
          <hr />
        </>
      ))
      }
    </div >
  );
}

export default FilterBooking;
