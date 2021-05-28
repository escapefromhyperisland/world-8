import React, {useState} from "react"
import Textbox1Image from "./images/game-char.png";

function Textbox1 () {

    const [instructionText, setInstructionText] = useState("MAN this house is old... But I get the feeling I’m on the right track. There got to be a clue to where that damn button is somewhere... Where should I start? ");

    return (
    <div id="TextBox1">
        <img src={Textbox1Image} alt="Textbox nr 1"></img>
        <p id="text-TextBox1">{instructionText}</p>
    </div>
    )
}

export default Textbox1