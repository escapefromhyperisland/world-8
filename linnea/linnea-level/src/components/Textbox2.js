import React, {useState} from "react";
import Textbox2Image from "./images/game-screen.png";


function Textbox2 () {

    const [alternativeText1, setAlternativeText1] = useState("Go to the kitchen");
    const [alternativeText2, setAlternativeText2] = useState("Go to the office");
    const [alternativeText3, setAlternativeText3] = useState("Go to the art hall");



   return ( 
   <div id="TextBox2">
        <img src={Textbox2Image} alt="Textbox nr 2"></img>
        <div id="text-TextBox2">
            <li>{alternativeText1}</li>
            <li>{alternativeText2}</li>
            <li>{alternativeText3}</li>
        </div>
    </div>)
}

export default Textbox2