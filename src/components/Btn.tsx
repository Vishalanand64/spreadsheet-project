
const Btn = (props : any) => {
  return (
    <div className='flex items-center gap-2 py-[6px] px-3 rounded-md cursor-pointer' 
     style={{
    backgroundColor: props.bgColor,
    borderWidth: props.border,           
    borderColor: props.bColor,
    borderStyle: 'solid'                
  }}
    >
        <img className='w-[20px] h-[20px]' src={props.icon} alt="" style={{ transform: `rotate(${props.degree}deg)` }} />
        <p style={{color:props.txtColor , fontWeight:props.weight}}>{props.title}</p>
    </div>
  )
}

export default Btn