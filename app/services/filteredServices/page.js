"use client"
import React, { useState } from 'react';
import "react-datetime/css/react-datetime.css";
import "./card.css"
import './datepicker.css';
import { useRouter  } from 'next/navigation';


export default function booking (){

  const [data, setData] = useState([]);
  const router = useRouter();
  const { craft = "" } = router.query;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://127.0.0.1:8000/Craftsmans/`);
      const json = await res.json();
      setData(json);
      console.log(craft)

    }
    fetchData();
  }, [craft]);




    return(
<>


{/* ----------------cards-------------- */}
<div></div>
<div class="container">
  <div class="card">
    <div class="box">
      <div class="content">
       
        <h3>Card One</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
   
        <h3>Card Two</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
       
        <h3>Card Three</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="box">
      <div class="content">
       
        <h3>Card Three</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="box">
      <div class="content">
       
        <h3>Card Three</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="box">
      <div class="content">
       
        <h3>Card Three</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="box">
      <div class="content">
       
        <h3>Card Three</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
</div>





</>
    )
}