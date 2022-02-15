import "./App.css";
import React, {useState} from "react";
import MainMenu from "./Components/MainMenu";

function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
      <h1>Quiz App</h1>

      {gameState === "menu" && <MainMenu />}
    </div>
  );
}

export default App;
