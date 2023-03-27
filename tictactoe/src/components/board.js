import React from 'react'
import Square from './Square'

const Board = (props) => {
  // console.log(props)
  return (
    <div className="grid grid-cols-3 gap-3">

        {props.cells.map((item,index)=>(
          <Square key={index} value= {item} onClick={()=>props.onClick(index)}
          className = {item==="X"? "is-x": item==="O"?"is-o": ""}
          ></Square>
        )) }
    </div>
  )
}

export default Board