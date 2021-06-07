import React, {useState} from "react";
import './App.css';

//Components
import Textbox1 from "./components/Textbox1";
import Textbox2 from "./components/Textbox2";
import Background from "./components/Background";

//Imported images
import MirrorImg from "./components/images/mirror.jpg"
import WallpaperImg from "./components/images/paintings.jpg";
import Painting1 from "./components/images/paintings1.jpg";
import Painting2 from "./components/images/paintings2.jpg";
import KitchenImg from "./components/images/kitchen3.png";
import LetterBackground from "./components/images/letter.png"
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
  const [whatThing, setWhatThing] = useState (thingsArray[0]);


  //Functions controling the safe ---------------------------------
 const safeInput = () => {
    var code = prompt("Please enter the 4 digit ode to the safe", "");
    if (code == null || code !== "5482") {
      wrongCode();
    } else {
        correctCode();
    } 
  }

  const wrongCode = () => {
    console.log("wrong code")
    setInstructionText("Oh this is the wrong code... It must be hidden somewhere around the house.");
    setWhatThing(thingsArray[0]);
  }

  const correctCode = () => {
    console.log("correctCode");
    setInstructionText("YES GIRL! The second half of the letter!! I have to get to the old factory ASAP!!");
    //Add confirmation button and call next level when that 
  }

// -------------------------------------------------------------------

//CONTROLS BUTTON 1
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

  //KITCHEN
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

  //OFFICE

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

  // ART GALLERY

  //Look at painting 1
  if (whatRoom === "Art" && whatThing !== "Art1") {
    setAlternativeText1("Stop looking at the first painting");
    setAlternativeText2("Investigate the second painting");
    setAlternativeText3("Go back");
    setBackground(Painting1);
    console.log("Looking at painting 1")
    setInstructionText("It's all so primitive... Nothing is moving?! I'm getting boored.  ")
    setWhatRoom(roomArray[3]);
    setWhatThing(thingsArray[3]);
  }

  //Stop looking at painting 1
  else if (whatRoom === "Art" && whatThing === "Art1") {
    setAlternativeText1("Investigate the first painting");
    setAlternativeText2("Investigate the second painting");
    setAlternativeText3("Go back to the hallway");
    setBackground(WallpaperImg);
    setInstructionText("Where did all the painting go??")
    setWhatRoom(roomArray[3]);
    setWhatThing(thingsArray[0]);
    console.log("No painting");
  }
}

// -----------------------------------------------------------------------------------------------------

//CONTROLS BUTTON 2
const changeRoom2 = () => {
  //Go to office
  if (whatRoom === "Hallway") {
    setAlternativeText1("Look at the old safe");
    setAlternativeText2("Search the desk");
    setAlternativeText3("Go back");
    setBackground(OfficeImg);
    setInstructionText("Ah all these books, reminds me of all the studying I didn't do at uni. Good times.")
    setWhatRoom(roomArray[1]);
  }

   //Office

   else if (whatRoom === "Office") {
    setAlternativeText1("Look at the old safe");
    setAlternativeText2("Search the desk");
    setAlternativeText3("Go back");
    setBackground(OfficeImg);
    setInstructionText("There seems to be nothing of interest here. I can barely read all these handwritten scribbles! God bless monitors")
    setWhatRoom(roomArray[1]);
  }

  //KITCHEN
  //Look at letter
  else if (whatRoom==="Kitchen" && whatThing!=="Letter")  {
    setAlternativeText1("Look at calender on the wall");
    setAlternativeText2("Put down the old letter");
    setAlternativeText3("Go back");
    setBackground(LetterBackground);
    setInstructionText("OH NO!!! Great great great great great great great great great granny! What did you do! Why is the letter torn in half!! And at the important bit as well! The other half MUST be in the house somehwere!!")
    setWhatThing(thingsArray[2])
    setWhatRoom(roomArray[2]);
  } 


  //Put away letter
  else if (whatRoom === "Kitchen" && whatThing === "Letter") {
    setAlternativeText1("Look at calender on the wall");
    setAlternativeText2("Look at the old letter");
    setAlternativeText3("Go back to the hallway");
    setBackground(KitchenImg);
    setInstructionText("Wonder what that ment....")
    setWhatRoom(roomArray[2]);
    setWhatThing(thingsArray[0]);
    console.log("No Letter");
  }

  //ART

  //Look at painting 2
  if (whatRoom === "Art" && whatThing !== "Art2") {
    setAlternativeText1("Investigate the first painting");
    setAlternativeText2("Stop looking at the second painting");
    setAlternativeText3("Go back");
    setBackground(Painting2);
    console.log("Looking at painting 2")
    setInstructionText("Oh this one is moving!! Or wait... Thats a SPIDER?! Or wait... There seems to be something on the painting?   ")
    setWhatRoom(roomArray[3]);
    setWhatThing(thingsArray[4]);
  }
  
    //Stop looking at painting 2
    else if (whatRoom === "Art" && whatThing === "Art2") {
      setAlternativeText1("Investigate the first painting");
      setAlternativeText2("Investigate the second painting");
      setAlternativeText3("Go back to the hallway");
      setBackground(WallpaperImg);
      setInstructionText("Where did all the painting go??")
      setWhatRoom(roomArray[3]);
      setWhatThing(thingsArray[0]);
      console.log("No painting");
    }
}

// -----------------------------------------------------------------------------------------------------

//CONTROLS BUTTON 3
const changeRoom3 = () => {
     //Go to art Hall
  if (whatRoom === "Hallway") {
    setAlternativeText1("Investigate the first painting");
    setAlternativeText2("Investigate the second painting");
    setAlternativeText3("Go back");
    setBackground(WallpaperImg);
    setInstructionText("Where did all the painting go??")
    setWhatRoom(roomArray[3]);
  } 
  //Go back to Hallway
  else {
    setAlternativeText1("Go to the kitchen");
    setAlternativeText2("Go to the office");
    setAlternativeText3("Go to the art gallery");
    setInstructionText("Okay focus... There must be some clues hidden somewhere in this old old old old old old old old old old house")
    setBackground(MirrorImg);
    setWhatRoom(roomArray[0])
  }
}

// --------------------------------------------------------------------------------------------------------

  return (
    <div className="App">
      <Textbox1 instructionText={instructionText}/>
      <Background Background={background} />
      <Textbox2 functionChangeRoom1={changeRoom1} functionChangeRoom2={changeRoom2} functionChangeRoom3={changeRoom3}  alternativeText1={alternativeText1} alternativeText2={alternativeText2} alternativeText3={alternativeText3} />
    </div>
  );
}

export default App;

