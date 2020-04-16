import React, { useState, useEffect } from 'react';
import Box from './Box';

function Board(props) {
  const [board, setBoard] = useState(null);

  return (
    <div className="Board">
      <h1>BOARD {props.id} GOES HERE </h1>
      <table cellPadding="5" cellSpacing="0" align="center" border="1">
        <tbody>
          {props.grid.map((row, rowIdx) => (
            <tr>{row.map((col, colIdx) => (
              <Box val={col} rowIdx={rowIdx} colIdx={colIdx} />
            ))}</tr>
          )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Board;