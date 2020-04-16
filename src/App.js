import React, { useState } from 'react';
import './App.css';
import Board from './Board';
import Game from "./classes/battleship";

const battleship = new Game();

function App() {
  const [game, setGame] = useState(battleship);
  const [board1, setBoard1] = useState(game.board1);
  const [board2, setBoard2] = useState(game.board2);
  return (
    <div className="App">

      <h1>BATTLESHIP!</h1>

      <Board id="1" grid={board1} />
      <Board id="2" grid={board2} />
    </div>
  );
}

export default App;
