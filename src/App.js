import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './Board';
import Game from "./classes/battleship";

const battleship = new Game();

function App() {
  const [game, setGame] = useState(battleship);
  const [board1, setBoard1] = useState(game.board1);
  const [board2, setBoard2] = useState(game.board2);

  useEffect(() => {
    setBoard1(game.board1);
    setBoard2(game.board2);
  }, [game, board1, board2])
  console.log(board1[0][0]);
  
  const handleStart = () => {
    game.fillBoards();
    setGame(game);
    setBoard1(game.board1);
    setBoard2(game.board2);
    console.log(board1[0][0]);
  }
  return (
    <div className="App">

      <h1>BATTLESHIP!</h1>
      <button onClick={handleStart}>Start Game!</button>

      <Board id="1" grid={board1} />
      <Board id="2" grid={board2} />
    </div>
  );
}

export default App;
