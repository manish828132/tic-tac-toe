import React from 'react'
import Square from './Square'
import './board.css'
function Board({currentSquare,handelOnClick}) {
    
    
  return (
    <div className='board'>
    <div className="row">
      <Square value={currentSquare[0]} onClickSquare={()=>{handelOnClick(0)}}/>
      <Square value={currentSquare[1]} onClickSquare={()=>{handelOnClick(1)}}/>
      <Square value={currentSquare[2]} onClickSquare={()=>{handelOnClick(2)}}/>
    </div>
    <div className="row">
    <Square value={currentSquare[3]} onClickSquare={()=>{handelOnClick(3)}}/>
    <Square value={currentSquare[4]} onClickSquare={()=>{handelOnClick(4)}}/>
    <Square value={currentSquare[5]} onClickSquare={()=>{handelOnClick(5)}}/>
        
    </div>
    <div className="row">
    <Square value={currentSquare[6]} onClickSquare={()=>{handelOnClick(6)}}/>
    <Square value={currentSquare[7]} onClickSquare={()=>{handelOnClick(7)}}/>
    <Square value={currentSquare[8]} onClickSquare={()=>{handelOnClick(8)}}/>
        
    </div>
    </div>
  )
}

export default Board