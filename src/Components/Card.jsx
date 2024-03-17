import React from 'react'

const Card = ({Data}) => {
  return (
    <div className=' w-52 shadow-2xl py-3'>
        <div className="box">
            <div>
                <img src={Data?.img} alt="" />
            </div>
            <div className=" text-center flex flex-col gap-2 px-5">
                <p className=' font-semibold'>{Data?.Name}</p>
                <p>{Data?.price}</p>
                <button className='px-3 rounded-lg bg-blue-100'>Buy</button>
            </div>
        </div>
    </div>
  )
}

export default Card