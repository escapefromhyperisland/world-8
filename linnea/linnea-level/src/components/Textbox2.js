import React from "react";
import Textbox2Image from "./images/game-screen.png";


function Textbox2 ({functionChangeRoom, alternativeText1, alternativeText2, alternativeText3}) {


    // functionChangeRoom2 = () => {
    //     this.props.functionChangeRoom()
    // }
    
   return ( 
       
   <div id="TextBox2">

        <img src={Textbox2Image} alt="Textbox nr 2"></img>
        <div id="text-TextBox2">
            <button onClick={() => functionChangeRoom()}>{alternativeText1}</button>
            <button onClick={() => functionChangeRoom()}>{alternativeText2}</button>
            <button onClick={() => functionChangeRoom()}>{alternativeText3}</button>

        </div>
    </div>
    )
}

export default Textbox2

// 