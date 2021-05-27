import React from "react";
import Textbox2Image from "./images/game-screen.png";


function Textbox2 () {
   return ( 
   <div id="TextBox2">
        <img src={Textbox2Image} alt="Textbox nr 2"></img>
        <div id="text-TextBox2">
            <li>Do this</li>
            <li>Or this</li>
            <li>Or maybe this?</li>
        </div>
    </div>)
}

export default Textbox2