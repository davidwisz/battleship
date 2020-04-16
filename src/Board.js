import React, { useState, useEffect } from 'react';
import Box from './Box';

function Board(props) {
  const [board, setBoard] = useState(null);

  return (
    <div className="Board">
      <h1>BOARD {props.id} GOES HERE </h1>
      <table cellPadding="5" cellSpacing="0" align="center" border="1">
        <tbody>
          {props.grid.map((x, xIdx) => {
            console.log(x)
            return <tr>{x.map((y, yIdx) => <Box xIdx={xIdx} yIdx={yIdx} />)}</tr>
          }
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Board;