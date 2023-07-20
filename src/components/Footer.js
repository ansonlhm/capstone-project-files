import React from "react";
import logoFooter from "../images/logo-footer.png";

export default function Footer (){
    return (
      <div className="footer-section">
      <div className="container">
      <nav className="footer-navigation">
       <a href="/home"><img src={logoFooter} alt="logo"className="footer-logo"/></a>
       <ul className="footer-nav">
          <li className="footer-nav-title">Doormat Navigation</li>
          <li><a href="/home" className="footer-menu">Home</a></li>
          <li><a href="/about" className="footer-menu">About</a></li>
          <li><a href="/menu" className="footer-menu">Menu</a></li>
          <li><a href="/reservation" className="footer-menu">Reservation</a></li>
          <li><a href="/order" className="footer-menu">Order online</a></li>
          <li><a href="/login" className="footer-menu">Login</a></li>
          </ul>
          <ul className="footer-nav">
          <li className="footer-nav-title">Contacts</li>
          <li><a href="/address" className="footer-menu">Address</a></li>
          <li><a href="/phone" className="footer-menu">phone number</a></li>
          <li><a href="/email" className="footer-menu">email</a></li>
          </ul>
          <ul className="footer-nav">
          <li className="footer-nav-title">Socials Media links</li>
          <li><a href="/address" className="footer-menu">Address</a></li>
          <li><a href="/phone" className="footer-menu">phone number</a></li>
          <li><a href="/email" className="footer-menu">email</a></li>
          </ul>
      </nav>
      </div>
      </div>
        )
};
