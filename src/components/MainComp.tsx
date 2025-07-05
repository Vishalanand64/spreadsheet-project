import React, { useState } from 'react'
import MainHeader from './MainHeader'
import Row from './Row'
import plus from "../assets/plus.png"


const MainComp = () => {
  const [rows, setRows] = useState([1, 2, 3, 4 , 5 , 6 ])

  const handleAddRow = () => {
    setRows(prev => [...prev, prev.length + 1])
  }

  return (
    <div className='min-w-full w-auto h-screen relative'>
      <MainHeader />
      <div>
        {rows.map((num) => (
          <Row key={num} num={num} />
        ))}
      </div>

      <button
        onClick={handleAddRow}
        className='absolute top-11 w-[140px] right-2 bg-blue-200 font-medium text-blue-600 px-3 py-2  cursor-pointer'
      >
        Add row
      </button>

       <div className='w-full h-10 bg-[#ffffff] bottom-0 sticky flex items-center pl-4 gap-2'>
    <div className='bg-[#e8f0e9] py-[7px] px-2 border-[#3e5741] border-t-3'>
      <p className='text-[#3e5741]'>All Orders</p>
    </div>

    <div className='py-[7px] px-2 '>
      <p className='text-[#757575]'>Pending</p>
    </div>

    <div className='py-[7px] px-2 '>
      <p className='text-[#757575]'>Reviewed</p>
    </div>

    <div className='py-[7px] px-2 '>
      <p className='text-[#757575]'>Arrived</p>
    </div>

    <img src={plus} className='w-[18px]' alt="" />

   </div>
    </div>
  )
}

export default MainComp
