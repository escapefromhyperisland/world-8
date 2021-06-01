import React, {useState} from "react"
import Textbox1Image from "./images/game-char.png";

function Textbox1 ({instructionText}) {


    return (
    <div id="TextBox1">
        <img src={Textbox1Image} alt="Textbox nr 1"></img>
        <p id="text-TextBox1">{instructionText}</p>
    </div>
    )
}

export default Textbox1