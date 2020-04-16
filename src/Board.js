import React, {useState} from 'react';
import Box from './Box';

function Board(props) {
  const [board, setBoard] = useState(null);
  
  return (
    <div className="Board">
      <h1>BOARD {props.id} GOES HERE </h1>
      <table cellPadding="5" cellSpacing="0" align="center" border="1">
        {props.grid.map((x) => {
          return <tr> {x.map(y => <Box />)}</tr>
        }
        )}
      </table>
    </div>
  )
}

export default Board;