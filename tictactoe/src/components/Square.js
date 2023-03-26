import React from 'react'

const Square = ({value,onClick}) => {
  return <div>
        <div className="h-[50px] w-[50px] text-xl text-white border-0 bg-[#14bdac] flex justify-center items-center" onClick={onClick} > {value}</div> 
    </div>

}

export default Square