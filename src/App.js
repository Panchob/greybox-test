import React from "react";
import "./App.css";
import { PopupButton } from "./Components/PopupButton/PopupButton";
import { displayQuestionAnswer } from "./Utils/displayQuestionAnswer"
import { Popup } from "./Components/Popup/Popup";
import DATA from "./Utils/data.json" 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PopupButton btnText="Not Feeling Well" color="secondary" popup={ <Popup content={DATA} renderer={displayQuestionAnswer} /> }/>
      </header>
    </div>
  );
}

export default App;
