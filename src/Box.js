import React, {useState, useEffect} from 'react';

function Box({rowIdx, colIdx, val}) {
  const [hasShip, setHasShip] = useState(val.hasShip);
  const [isPegged, setisPegged] = useState(val.isPegged);
  useEffect(()=>{

  },[val]);
  return (
    <td>[{rowIdx},{colIdx}] 
    pegged:{val.isPegged.toString()} ship:{val.hasShip.toString()}</td>
  )
}

export default Box;
