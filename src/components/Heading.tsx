import React from 'react'

const Heading = (props : any) => {
  return (
    <div className='p-2 h-full min-w-auto justify-between flex items-center' style={{width:props.width , backgroundColor:props.bgColor}}>
       <div className='flex items-center justify-center gap-2'>
         <img src={props.icon} className='w-[18px]' alt="" />
         <p style={{color:props.textColor}} className='font-semibold'>{props.title}</p>
       </div>
       <img className='w-[16px]' src={props.arrow} alt="" />

    </div>
  )
}

export default Heading