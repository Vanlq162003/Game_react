import React from 'react'

const Square = (props) => {
  return <div>

    <div className="bg-white h-36 w-36 border-4 border-black flex justify-center items-center" >
        <div className="text-6xl font-bold" onClick={props.onClick} > {props.value}</div> 
    </div>

    </div>

}

export default Square