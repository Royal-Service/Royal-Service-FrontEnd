import React from "react";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css%22%3E"
/>;

export default function Footer() {
  return (
    <div className="footer-basic">
      <footer>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="../">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="/services">Services</a>
          </li>
          <li className="list-inline-item">
            <a href="/about">About</a>
          </li>

          <li className="list-inline-item">
            <a href="/support">Support</a>
          </li>
        </ul>

        <p className="copyright">Royal Service © 2023</p>
      </footer>
    </div>
  );
}
