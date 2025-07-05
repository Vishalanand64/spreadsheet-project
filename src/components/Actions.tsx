
import rightArrow from '../assets/doubleRight.png'
import hide from '../assets/hide.png'
import sort from '../assets/sort.png'
import filter from '../assets/filter.png'
import Btn from './Btn'
import shape from '../assets/Shape.png'
import imp from '../assets/import.png'
import share from '../assets/share.png'
import branch from '../assets/branch.png'

const Actions = () => {
  return (
    <div className='w-full h-[56px] items-center py-4 justify-between border-t-2 border-[#EEEEEE] flex'>
        <div className="left ml-4 flex">
        
            <div className='toolbar flex items-center'>
            <span>Tool bar</span> <span><img className='w-[16px] h-[16px] ml-2' src={rightArrow} alt="" /></span>
            <div className='w-[2px] h-8 ml-5 bg-[#EEEEEE]'></div>
            </div>

            <div className='flex items-center ml-4 gap-3'>
                <Btn icon={hide} title={"Hide fields"}/>
                <Btn icon={sort} title={"Sort"}/>
                <Btn icon={filter} title={"Filter"}/>
                <Btn icon={shape} title={"Cell view"}/>
            </div>


        </div>


        <div className="right flex justify-center gap-2 mr-2">
                <Btn icon={imp} title="Import" border="2px" bColor="#EEEEEE"/>
                <Btn icon={imp} title={"Export"} degree={180} border="2px"bColor="#EEEEEE" />
                <Btn icon={share} title="Share" border="2px" bColor="#EEEEEE"/>
                <Btn icon={branch} degree={180} title={"New Action"} bgColor={"#4B6A4F"} txtColor={"white"} />
        </div>

    </div>
  )
}

export default Actions