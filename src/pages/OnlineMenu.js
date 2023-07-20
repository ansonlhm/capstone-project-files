import React from "react";
import menu from "../../images/menu.png";

export const OnlineMenu = () =>{

   return (
    <div className="OnlineMenu">
        <div className="container">
        <h3 className="menu-title">Here you can see our latest menu</h3>
        <img src={menu} alt="menu" className="menu"/>
        </div>
    </div>
   )


};
