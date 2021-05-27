import React from "react"
import Textbox1Image from "./images/game-char.png";

function Textbox1 () {
    return (
    <div id="TextBox1">
        <img src={Textbox1Image} alt="Textbox nr 1"></img>
        <p id="text-TextBox1">Lorem ipsum används ofta som exempeltext inom trycksaksframställning och grafisk design för att visa hur till exempel ett dokument kommer att se ut när väl den riktiga texten är på plats.</p>
    </div>
    )
}

export default Textbox1