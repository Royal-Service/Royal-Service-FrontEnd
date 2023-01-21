"use client"
import React, { useState } from 'react';
import "./about.css"
export default function Search() {
    return (
//     <div>
//         <script>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />

// </script>
//         <script>
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link></script>
// <div class="container">
//   <div class="row">
    
//     <div class="col-sm-6 col-md-4">
//       <div class="card">
//         <img src="https://media.discordapp.net/attachments/1062648819801653329/1066070060663308349/photo_2022-07-24_15-15-50.jpg" class="card-img-top" alt="Card image"></img>
//         <div class="card-body">
//   <h5 class="card-title">Ismail Al-amir</h5>
//   <a href="#"> <i class="fab fa-facebook-square"></i> </a>
//   <a href="#"> <i class="fab fa-twitter-square"></i> </a>
//   <a href="#"> <i class="fab fa-instagram-square"></i> </a>
//   <a href="#"> <i class="fab fa-linkedin"></i> </a>
// </div>
//       </div>
//     </div>
    
//     <div class="col-sm-6 col-md-4">
//       <div class="card">
//         <img src="https://media.discordapp.net/attachments/1062648819801653329/1066071598299357266/tareq.jpeg?width=395&height=662" class="card-img-top" alt="Card image"></img>
//         <div class="card-body">
//           <h5 class="card-title">Tareq Zoubii</h5>
//           <a href="#"> <i class="fab fa-facebook-square"></i> </a>
//   <a href="#"> <i class="fab fa-twitter-square"></i> </a>
//   <a href="#"> <i class="fab fa-instagram-square"></i> </a>
//   <a href="#"> <i class="fab fa-linkedin"></i> </a>
//         </div>
//       </div>
//     </div>
    
//     <div class="col-sm-6 col-md-4">
//       <div class="card">
//         <img src="https://avatars.githubusercontent.com/u/109727654?v=4" class="card-img-top" alt="Card image"></img>
//         <div class="card-body">
//           <h5 class="card-title">Abdallah Mosa</h5>
//           <a href="#"> <i class="fab fa-facebook-square"></i> </a>
//   <a href="#"> <i class="fab fa-twitter-square"></i> </a>
//   <a href="#"> <i class="fab fa-instagram-square"></i> </a>
//   <a href="#"> <i class="fab fa-linkedin"></i> </a>
//         </div>
//       </div>
//     </div>
    
//     <div class="col-sm-6 col-md-4">
//       <div class="card">
//         <img src="https://avatars.githubusercontent.com/u/86146219?v=4" class="card-img-top" alt="Card image"></img>
//         <div class="card-body">
//           <h5 class="card-title">Monther Al-tamimi</h5>
//           <a href="#"> <i class="fab fa-facebook-square"></i> </a>
//   <a href="#"> <i class="fab fa-twitter-square"></i> </a>
//   <a href="#"> <i class="fab fa-instagram-square"></i> </a>
//   <a href="#"> <i class="fab fa-linkedin"></i> </a>
//         </div>
//       </div>
//     </div>

//     <div class="col-sm-6 col-md-4">
//       <div class="card">
//         <img src="https://media.discordapp.net/attachments/1062648819801653329/1066082165814722692/WhatsApp_Image_2023-01-20_at_22.48.28.jpeg?width=398&height=662" class="card-img-top" alt="Card image"></img>
//         <div class="card-body">
//           <h5 class="card-title">Omar Darwish</h5>
//           <a href="#"> <i class="fab fa-facebook-square"></i> </a>
//   <a href="#"> <i class="fab fa-twitter-square"></i> </a>
//   <a href="#"> <i class="fab fa-instagram-square"></i> </a>
//   <a href="#"> <i class="fab fa-linkedin"></i> </a>
//         </div>
//       </div>
//     </div>

//     </div>
//     </div>
//     </div>    
<div class="card">
<div class="card-info">
<div ><img class="card-avatar" src="https://avatars.githubusercontent.com/u/109903994?v=4"></img></div>
<div class="card-title">Steve Jobs</div>
<div class="card-subtitle">CEO &amp; Co-Founder</div>
</div>
<ul class="card-social">
<li class="card-social__item">
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
</svg></li>
<li class="card-social__item">
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"></path>
</svg></li>
<li class="card-social__item">
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
</svg>
</li>
</ul>


</div>

    )
    };
