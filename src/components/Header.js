import React from "react";
import { ReactComponent as Logo } from '../images/Logo.svg';
import { Link } from 'react-router-dom'; 



export default function Header (){
    return (
        <div className="container">
        <nav className="navigation">
         <Logo className="logo"/>
         <ul className="navigation">
            <li><Link to="/" className="menu">Home</Link></li>
            <li><Link to="/about" className="menu">About</Link></li>
            <li><Link to="/menu" className="menu">Menu</Link></li>
            <li><Link to="/reservation" className="menu">Reservation</Link></li>
            <li><Link to="/order" className="menu">Order online</Link></li>
            <li><Link to="/login" className="menu">Login</Link></li>
         </ul>
        </nav>
        </div>
    )
};
