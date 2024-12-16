import React from 'react'
import './square.css'
function Square({value,onClickSquare}) {
  return (
   
        <div onClick={onClickSquare}  className='square'>{value}</div>
    
  )
}

export default Square;