import React, {useState} from "react";
import './App.css';

//Components
import Textbox1 from "./components/Textbox1";
import Textbox2 from "./components/Textbox2";
import Background from "./components/Background";

//Imported images
import MirrorImg from "./components/images/mirror.jpg"
import WallpaperImg from "./components/images/wallpaper.jpg";
import KitchenImg from "./components/images/kitchen2.png";
import OfficeImg from "./components/images/Office.jpg";
import CalendarBackgrund from "./components/images/calendarBackgrund.png";


// puss och lycka till :)

function App() { //Might be able to clean this up by putting all of the 
                //imports and consts and functions in one file, and passing 
              //it as a prop to here? Might f with the rest of the props thou?

  //Setting the text
  const [alternativeText1, setAlternativeText1] = useState("Go to the kitchen");
  const [alternativeText2, setAlternativeText2] = useState("Go to the office");
  const [alternativeText3, setAlternativeText3] = useState("Go to the art gallery");
  const [instructionText, setInstructionText] = useState("MAN this house is old... But I get the feeling I’m on the right track. There got to be a clue to where that damn button is somewhere... Where should I start? ");

  //Setting background images
  const [background, setBackground] = useState (MirrorImg);

  //Keeping track on what room you're in
  const roomArray = ["Hallway", "Office", "Kitchen", "Art"];
  const [whatRoom, setWhatRoom] = useState (roomArray[0]);
  console.log(whatRoom);
  
  //Keeping track on what you have done ish
  const thingsArray = ["Empty", "Calendar", "Letter", "Art1", "Art2", "Safe"];
  const [whatThing, setWhatThing] = useState (roomArray[0]);

 const safeInput = () => {
    var txt;
    var code = prompt("Please enter the code to the safe", "");
    if (code == null || code !== "5428") {
      txt = "WRONG INPUT";
      console.log(txt);
    } else {
      txt = "CORRECT CODE";
      console.log(txt);
    } 
  }


//Controls button 1
const changeRoom1 = () => {
//Command: Go to kitchen
  if (whatRoom === "Hallway") {
    setAlternativeText1("Look at calender on the wall");
    setAlternativeText2("Look at the old letter");
    setAlternativeText3("Go back");
    setBackground(KitchenImg);
    setInstructionText("It smells like mold here... but I'm still getting kinda hungry. NO. FOCUS. Food can wait, the sun CANNOT!")
    setWhatRoom(roomArray[2]);
  }

  //Look at calendar on the wall
  else if (whatRoom === "Kitchen" && whatThing !== "Calendar") {
    setAlternativeText1("Put down calendar");
    setAlternativeText2("Look at the old letter");
    setAlternativeText3("Go back to the hallway");
    setBackground(CalendarBackgrund);
    setInstructionText("That big ring... Todays date. I wish I would have remembered this earlier. Feels like I'm letting my family down... But NO! I'll keep on pushing forward!")
    setWhatRoom(roomArray[2]);
    setWhatThing(thingsArray[1]);
  }
  //Putting down calendar
  else if (whatRoom === "Kitchen" && whatThing === "Calendar") {
    setAlternativeText1("Look at calender on the wall");
    setAlternativeText2("Look at the old letter");
    setAlternativeText3("Go back to the hallway");
    setBackground(KitchenImg);
    setInstructionText("Wonder what that ment....")
    setWhatRoom(roomArray[2]);
    setWhatThing(thingsArray[0]);
    console.log("No Calendar");
  }

  //Office

  //Look at old safe
  else if (whatRoom === "Office" && whatThing!== "Safe") {
    setAlternativeText1("Stop looking at the old safe");
    setAlternativeText2("Search the desk");
    setAlternativeText3("Go back");
    setBackground(OfficeImg);
    setInstructionText("OH. This sparks my interest. What could the code be?? It has to be hidden somewhere around here...")
    setWhatRoom(roomArray[1]);
    //Add function that pops up safe and an input field
    safeInput();
    setWhatThing(thingsArray[5]);
  }
}

//Controls button 2
const changeRoom2 = () => {
  if (whatRoom === "Hallway") {
    setAlternativeText1("Look at the old safe");
    setAlternativeText2("Search the desk");
    setAlternativeText3("Go back");
    setBackground(OfficeImg);
    setInstructionText("Ah all these books, reminds me of all the studying I didn't do at uni. Good times.")
    setWhatRoom(roomArray[1]);
  } else if (whatRoom === "Office") {
    setAlternativeText1("Look at the old safe");
    setAlternativeText2("Search the desk");
    setAlternativeText3("Go back");
    setBackground(OfficeImg);
    setInstructionText("There seems to be nothing of interest here. I can barely read all these handwritten scribbles! God bless monitors")
    setWhatRoom(roomArray[1]);
  }
}

//Controls button 3
const changeRoom3 = () => {
  if (whatRoom === "Hallway") {
    setAlternativeText1("Investigate the first painting");
    setAlternativeText2("Investigate the second painting");
    setAlternativeText3("Go back");
    setBackground(WallpaperImg);
    setInstructionText("Where did all the painting go??")
    setWhatRoom(roomArray[3]);
  } else {
    setAlternativeText1("Go to the kitchen");
    setAlternativeText2("Go to the office");
    setAlternativeText3("Go to the art gallery");
    setInstructionText("Okay focus... There must be some clues hidden somewhere in this old old old old old old old old old old house")
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

