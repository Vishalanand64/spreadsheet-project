import  { useState } from 'react'

const Input = (props : any) => {
    const [input , setInput] = useState("")
  return (
    <div className='h-full border-r-2 border-[#eeeeee] flex items-center px-1' style={{width:props.width}}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className='outline-none'  />
    </div>
  )
}

export default Input