import React from 'react'
import rightArrow from '../assets/rightArrow.png'
import search from '../assets/search.png'
import bell from '../assets/bell.png'
import profile from '../assets/profile.jpg'


const Header = () => {
  return (
    <div className='h-[56px] w-full flex justify-between items-center my-2'>
        <div className="left h-full w-50flex p-4 gap-6 flex items-center ">
            <div className='w-[30px] h-[24px] bg-[#618666] rounded-md relative'>
                <div className='w-[17px] h-[80%] top-[50%] transform -translate-y-1/2 rounded-l-sm ml-[2px] absolute left-0 bg-white'></div>
            </div>
            <div className='flex items-center gap-1'>
                <span className='text-[#AFAFAF] font-[400] '>Workspace</span>
                <span><img className='w-[12px] pt-1' src={rightArrow} alt="right arrow" /></span>
                <span className='text-[#AFAFAF] font-[400] '>Folder 2</span>
                <span><img className='w-[12px] pt-1' src={rightArrow} alt="right arrow" /></span>
                                <span className='text-black font-medium'>Spreadsheet 3</span>
                                <div className='flex ml-4 gap-[2.5px] items-center'> 
                                    <div className='w-1 h-1 rounded-full bg-[#AFAFAF]'></div>
                                    <div className='w-1 h-1 rounded-full bg-[#AFAFAF]'></div>
                                    <div className='w-1 h-1 rounded-full bg-[#AFAFAF]'></div>
                                </div>




            </div>
            
        </div>
        <div className="right flex items-center mr-6">

            <div className='rounded-md bg-[#F6F6F6] px-4 py-2 flex items-center w-[220px]'>
            <img className='w-[25px] h-[25px]' src={search} alt="" />
            <input type="text" placeholder='Search within sheet ' className=' px-4 py-2 outline-none' />
            </div>

            <div className='ml-2 relative'>
                <img className='w-[28px] ' src={bell} alt="" />
                <div className='absolute w-[24px] h-[24px] bg-[#4B6A4F] border-3 border-white -top-2 -right-2 rounded-full flex justify-center items-center'>
                    <p className='text-white text-[10px] font-semibold'>2</p>
                </div>
            </div>

            <div className='ml-4 flex items-center gap-2'>
                <img className='w-[40px] h-[40px] rounded-full' src={profile} alt="" />
                <div>
                    <p className='text-xl -leading-[5]'>John Doe</p>
                    <p className='text-gray-400'>john.doe...</p>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Header