import React, {useState} from "react";
import './App.css';
import Textbox1 from "./components/Textbox1";
import Textbox2 from "./components/Textbox2";
import Background from "./components/Background";

import MirrorImg from "./components/images/mirror.jpg"
import WallpaperImg from "./components/images/wallpaper.jpg";
import KitchenImg from "./components/images/kitchen.jpg";
import OfficeImg from "./components/images/Office.jpg";



//Import all images and things, put functions to change things in here. Send them in as props. Just render in the componetns
// puss och lycka till :)
function App() {

  //Setting the text
  const [alternativeText1, setAlternativeText1] = useState("Go to the kitchen");
  const [alternativeText2, setAlternativeText2] = useState("Go to the office");
  const [alternativeText3, setAlternativeText3] = useState("Go to the art gallery");

  const [instructionText, setInstructionText] = useState("MAN this house is old... But I get the feeling I’m on the right track. There got to be a clue to where that damn button is somewhere... Where should I start? ");

  // const textAlternatives = [
  //   { id: 1, value: "Go back to the hallway" },
  //   { id: 2, value: "Look at the calendar" },
  //   { id: 3, value: "Take pen?" }
  // ]; //Remove the id and value and just have the value in there

  //Setting background images
  const [background, setBackground] = useState (MirrorImg);

  //Keeping track on what room you're in
  const roomArray = ["Hallway", "Office", "Kitchen", "Art"];
  const [whatRoom, setWhatRoom] = useState (roomArray[0]);

  console.log(whatRoom);

//if hallway is true do X, if whatRoom state is "kitchen" do something else


const changeRoom1 = () => {
//Go to kitchen
  if (whatRoom === "Hallway") {
    setAlternativeText1("Look at calender on the wall");
    setAlternativeText2("Look at the old letter");
    setAlternativeText3("Go back");
    setBackground(KitchenImg);
    setInstructionText("It smells like mold here... but I'm still getting kinda hungry. NO. FOCUS. Food can wait, the sun CANNOT!")
    setWhatRoom(roomArray[2]);
  }
}

const changeRoom2 = () => {
  if (whatRoom === "Hallway") {
    setAlternativeText1("Look at the old safe");
    setAlternativeText2("Search the desk");
    setAlternativeText3("Go back");
    setBackground(OfficeImg);
    setInstructionText("Ah all these books, reminds me of all the studying I didn't do at uni. Good times.")
    setWhatRoom(roomArray[1]);
  }
}

const changeRoom3 = () => {
  if (whatRoom === "Hallway") {
    setAlternativeText1("Investigate the first painting");
    setAlternativeText2("Investigate the second painting");
    setAlternativeText3("Go back");
    setBackground(WallpaperImg);
    setInstructionText("The fact that this was considered art before...")
    setWhatRoom(roomArray[3]);
  } else {
    setAlternativeText1("Go to the kitchen");
    setAlternativeText2("Go to the office");
    setAlternativeText3("Go to the art gallery");
    setBackground(MirrorImg);
    setWhatRoom(roomArray[0])
  }
}


  return (
    <div className="App">
      <Textbox1 instructionText={instructionText}/>
      <Background Background={background} />
      <Textbox2 functionChangeRoom1={changeRoom1} functionChangeRoom2={changeRoom2} functionChangeRoom3={changeRoom3}  alternativeText1={alternativeText1} alternativeText2={alternativeText2} alternativeText3={alternativeText3} />
    </div>
  );
}

export default App;

