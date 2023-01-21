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
    // <div className="container">
    //   <div className="row">

    //     <div className="col-sm-6 col-md-4">
    //       <div className="card">
    //         <img src="https://media.discordapp.net/attachments/1062648819801653329/1066070060663308349/photo_2022-07-24_15-15-50.jpg" className="card-img-top" alt="Card image"></img>
    //         <div className="card-body">
    //   <h5 className="card-title">Ismail Al-amir</h5>
    //   <a href="#"> <i className="fab fa-facebook-square"></i> </a>
    //   <a href="#"> <i className="fab fa-twitter-square"></i> </a>
    //   <a href="#"> <i className="fab fa-instagram-square"></i> </a>
    //   <a href="#"> <i className="fab fa-linkedin"></i> </a>
    // </div>
    //       </div>
    //     </div>

    //     <div className="col-sm-6 col-md-4">
    //       <div className="card">
    //         <img src="https://media.discordapp.net/attachments/1062648819801653329/1066071598299357266/tareq.jpeg?width=395&height=662" className="card-img-top" alt="Card image"></img>
    //         <div className="card-body">
    //           <h5 className="card-title">Tareq Zoubii</h5>
    //           <a href="#"> <i className="fab fa-facebook-square"></i> </a>
    //   <a href="#"> <i className="fab fa-twitter-square"></i> </a>
    //   <a href="#"> <i className="fab fa-instagram-square"></i> </a>
    //   <a href="#"> <i className="fab fa-linkedin"></i> </a>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="col-sm-6 col-md-4">
    //       <div className="card">
    //         <img src="https://avatars.githubusercontent.com/u/109727654?v=4" className="card-img-top" alt="Card image"></img>
    //         <div className="card-body">
    //           <h5 className="card-title">Abdallah Mosa</h5>
    //           <a href="#"> <i className="fab fa-facebook-square"></i> </a>
    //   <a href="#"> <i className="fab fa-twitter-square"></i> </a>
    //   <a href="#"> <i className="fab fa-instagram-square"></i> </a>
    //   <a href="#"> <i className="fab fa-linkedin"></i> </a>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="col-sm-6 col-md-4">
    //       <div className="card">
    //         <img src="https://avatars.githubusercontent.com/u/86146219?v=4" className="card-img-top" alt="Card image"></img>
    //         <div className="card-body">
    //           <h5 className="card-title">Monther Al-tamimi</h5>
    //           <a href="#"> <i className="fab fa-facebook-square"></i> </a>
    //   <a href="#"> <i className="fab fa-twitter-square"></i> </a>
    //   <a href="#"> <i className="fab fa-instagram-square"></i> </a>
    //   <a href="#"> <i className="fab fa-linkedin"></i> </a>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="col-sm-6 col-md-4">
    //       <div className="card">
    //         <img src="https://media.discordapp.net/attachments/1062648819801653329/1066082165814722692/WhatsApp_Image_2023-01-20_at_22.48.28.jpeg?width=398&height=662" className="card-img-top" alt="Card image"></img>
    //         <div className="card-body">
    //           <h5 className="card-title">Omar Darwish</h5>
    //           <a href="#"> <i className="fab fa-facebook-square"></i> </a>
    //   <a href="#"> <i className="fab fa-twitter-square"></i> </a>
    //   <a href="#"> <i className="fab fa-instagram-square"></i> </a>
    //   <a href="#"> <i className="fab fa-linkedin"></i> </a>
    //         </div>
    //       </div>
    //     </div>

    //     </div>
    //     </div>
    //     </div>   
    <div className="cards">

      <div className="card">
        <div className="card-info">
          <div ><img className="card-avatar" src="https://avatars.githubusercontent.com/u/109727654?v=4"></img></div>
          <div className="card-title">Abdallah Mosa</div>
          <div className="card-subtitle">Software Developer</div>
        </div>
        <ul className="card-social">
          <li className="card-social__item" ><a href="https://www.linkedin.com/in/abdallah-mosa-b75b57194/">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
            </svg></a></li>
          <li className="card-social__item"><a href="https://github.com/AbdallahMosa">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg></a></li>
          <li className="card-social__item"><a href="https://www.facebook.com/abdallah.m.mosa">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
            </svg></a>
          </li>
        </ul>
      </div>
      <div className="card">
        <div className="card-info">
          <div ><img className="card-avatar" src="https://media.discordapp.net/attachments/1062648819801653329/1066071598299357266/tareq.jpeg?width=395&height=662"></img></div>
          <div className="card-title">Tareq Zoubi</div>
          <div className="card-subtitle">Software Developer</div>
        </div>
        <ul className="card-social">
          <li className="card-social__item" ><a href="https://www.linkedin.com/in/tareq-zoubii-baa1b8240/">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
            </svg></a></li>
          <li className="card-social__item"><a href="https://github.com/tareqzoubii">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg></a></li>
          <li className="card-social__item"><a href="">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
            </svg></a>
          </li>
        </ul>
      </div>

      <div className="card">
        <div className="card-info">
          <div ><img className="card-avatar" src="https://media.discordapp.net/attachments/1062648819801653329/1066082165814722692/WhatsApp_Image_2023-01-20_at_22.48.28.jpeg?width=398&height=662"></img></div>
          <div className="card-title">Omar Darwish</div>
          <div className="card-subtitle">Software Developer</div>
        </div>
        <ul className="card-social">
          <li className="card-social__item" ><a href="https://www.linkedin.com/in/omar-darweesh-a033571a8/">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
            </svg></a></li>
          <li className="card-social__item"><a href="https://github.com/dee-desu">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg></a></li>
          <li className="card-social__item"><a href="https://www.facebook.com/omar.darweesh.50">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
            </svg></a>
          </li>
        </ul>
      </div>
      <div className="card">
        <div className="card-info">
          <div ><img className="card-avatar" src="https://avatars.githubusercontent.com/u/86146219?v=4"></img></div>
          <div className="card-title">Monther AlTamimi</div>
          <div className="card-subtitle">Software Developer</div>
        </div>
        <ul className="card-social">
          <li className="card-social__item" ><a href="https://www.linkedin.com/in/monther-al-tamimi-a5a198215/">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
            </svg></a></li>
          <li className="card-social__item"><a href="https://github.com/monther123c">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg></a></li>
          <li className="card-social__item"><a href="https://www.facebook.com/monther.tamimi.7">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
            </svg></a>
          </li>
        </ul>
      </div>
      <div className="card">
        <div className="card-info">
          <div ><img className="card-avatar" src="https://avatars.githubusercontent.com/u/109903994?v=4"></img></div>
          <div className="card-title">Ismail AlAmir</div>
          <div className="card-subtitle">Software Developer</div>
        </div>
        <ul className="card-social">
          <li className="card-social__item" ><a href="https://www.linkedin.com/in/isalamir/">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
            </svg></a></li>
          <li className="card-social__item"><a href="https://github.com/IsmailAlamir">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg></a></li>
          <li className="card-social__item"><a href="https://www.facebook.com/ismaeelalamir/">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
            </svg></a>
          </li>
        </ul>
      </div>





    </div>
  )
};