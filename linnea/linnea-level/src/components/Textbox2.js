import React, {useEffect, useState} from "react";
import Textbox2Image from "./images/game-screen.png";


function Textbox2 () {

    const [alternativeText1, setAlternativeText1] = useState("Go to the kitchen");
    const [alternativeText2, setAlternativeText2] = useState("Go to the office");
    const [alternativeText3, setAlternativeText3] = useState("Go to the art hall");

    const textAlternatives = [
        { id: 1, value: "Go back to the hallway" },
        { id: 2, value: "Look at the calendar" },
        { id: 3, value: "Take pen?" }
      ];

    // useEffect(() => {
    //     // Should not ever set state during rendering, so do this in useEffect instead.
    //     setAlternativeText1(textAlternatives);
    //   }, []);

   return ( 
       
   <div id="TextBox2">

        <img src={Textbox2Image} alt="Textbox nr 2"></img>
        <div id="text-TextBox2">
            <li onClick={()=> setAlternativeText1(textAlternatives[0].value)}>{alternativeText1}</li>
            <li>{alternativeText2}</li>
            <li>{alternativeText3}</li>
        </div>
    </div>
    )
}

export default Textbox2