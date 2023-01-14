import React from "react";

export default function Search() {
  return (
    <>
      <div class="flexbox">
        <div class="search">
          <h1>One Search, Many Services</h1>
          <h3>Click on search icon, then type your keyword.</h3>
          <div>
            <input type="text" placeholder="Search for services . . . ." />
            <div class="sub-main">
               <button class="button-three">Search</button>
               </div>
          </div>
        </div>
      </div>
    </>
  );
}
