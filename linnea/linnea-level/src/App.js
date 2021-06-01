import React, {useState} from "react";
import './App.css';
import Textbox1 from "./components/Textbox1";
import Textbox2 from "./components/Textbox2";
import Background from "./components/Background";

import MirrorImg from "./components/images/mirror.jpg"
import WallpaperImg from "./components/images/wallpaper.jpg";

//Import all images and things, put functions to change things in here. Send them in as props. Just render in the componetns
// puss och lycka till :)
function App() {
  const [alternativeText1, setAlternativeText1] = useState("Go to the old wall");
  const [alternativeText2, setAlternativeText2] = useState("Go to the office");
  const [alternativeText3, setAlternativeText3] = useState("Go to the art hall");

  const [instructionText, setInstructionText] = useState("MAN this house is old... But I get the feeling I’m on the right track. There got to be a clue to where that damn button is somewhere... Where should I start? ");


  const [background, setBackground] = useState (MirrorImg);

  const [whatRoom, setWhatRoom] = useState ("Hallway (fick into variable)");

//if hallway is true do X, if whatRoom state is "kitchen" do something else


  const textAlternatives = [
    { id: 1, value: "Go back to the hallway" },
    { id: 2, value: "Look at the calendar" },
    { id: 3, value: "Take pen?" }
  ];

  const changeRoom = () => {
    setAlternativeText1(textAlternatives[0].value);
    setBackground(WallpaperImg);
    setInstructionText("... I could have sworn there was supposed to be some paintings here? Looks like SOMEONE forgot to add them....")
  }


  return (
    <div className="App">
      <Textbox1 instructionText={instructionText}/>
      <Background Background={background} />
      <Textbox2 functionChangeRoom={changeRoom} alternativeText1={alternativeText1} alternativeText2={alternativeText2} alternativeText3={alternativeText3} />
    </div>
  );
}

export default App;

