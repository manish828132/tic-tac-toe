import React from 'react'
import Board from './Board'
import GameInfo from './GameInfo'
import { useState } from 'react'
import './game.css'
import Square from './Square'
function Game() {
    const [isNextX,setIsNextX]=useState(true)
    const [currentSquare,setCurrentSquare]=useState(Array(9).fill(null));

    function handelOnClick(i)
    {
        if(findWinner(currentSquare)|| currentSquare[i])
            return
        const nextSquare=currentSquare.slice();
        if(isNextX)
        nextSquare[i]='X';
        else
        nextSquare[i]='O';
        
        setIsNextX(!isNextX)
       
        setCurrentSquare(nextSquare);
    }
    const y=(isNextX)?"X":"O"
    let msg="";
    const isWinner=findWinner(currentSquare);
    if(isWinner)
    {
        msg="WINNER IS "+isWinner;
    }

    else{
        msg="NEXT TURN :"+y;
    }

function findWinner(currentSquare)
{
    const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i=0;i<lines.length;i++)
    {
        const [a,b,c]=lines[i];
        if(currentSquare[a]&& currentSquare[a]===currentSquare[b] && currentSquare[a]===currentSquare[c]){
            return currentSquare[a];
        }
    }
    return null
}


  return (

    <>
    <div className="status" style={{textAlign:"center",fontSize:"30px",padding:"6px"}}>{msg}</div>
    <div className='game'>
    <Board currentSquare={currentSquare}handelOnClick={handelOnClick}></Board>
    <GameInfo></GameInfo>

    </div>
    </>
  )
}

export default Game