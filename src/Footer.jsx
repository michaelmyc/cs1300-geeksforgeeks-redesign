import React from 'react';
import './Footer.css';
// import { Button, Form, FormControl } from 'react-bootstrap';

function Footer() {
  return (
    <div className="header-footer footer">
      <div className="address">
        <img src="assets/white-logo.png" alt="white logo"></img>
        <p>5th Floor, A-118,</p>
        <p>Sector-136, Noida, Uttar Pradesh - 201305</p>
        <p><a href="mailto://feedback@geeksforgeeks.org" target="_blank" rel="noopener noreferrer">feedback@geeksforgeeks.org</a></p>
      </div>
      <div className="social-media">
        <a href="mailto://feedback@geeksforgeeks.org" target="_blank" rel="noopener noreferrer"><img src="assets/email.svg" alt="email"></img></a>
        <a href="https://facebook.com/geeksforgeeks.org" target="_blank" rel="noopener noreferrer"><img src="assets/facebook.svg" alt="facebook"></img></a>
        <a href="https://twitter.com/geeksforgeeks" target="_blank" rel="noopener noreferrer"><img src="assets/twitter.svg" alt="twitter"></img></a>
        <a href="https://youtube.com/geeksforgeeksvideos" target="_blank" rel="noopener noreferrer"><img src="assets/youtube.svg" alt="youtube"></img></a>
        <a href="https://linkedin.com/company/geeksforgeeks" target="_blank" rel="noopener noreferrer"><img src="assets/linkedin.svg" alt="linkedin"></img></a>
      </div>
    </div>
  );
}

export default Footer;