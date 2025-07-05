import file from "../assets/file.png";
import reload from "../assets/reload.png";
import branch from "../assets/branch.png";
import Btn from "./Btn";
import plus from "../assets/plus.png";
import Heading from "./Heading";
import hash from "../assets/hash.png"
import job from "../assets/job.png"
import date from "../assets/date.png"
import circle from "../assets/circle.png"
import user from "../assets/user.png"
import url from "../assets/internet.png"
import dArr from "../assets/dArr.png"

const MainHeader = () => {
  return (
    <div>
      <div className="h-[42px] w-full bg-white border-t-2 border-[#EEEEEE] flex justify-between items-center ">
        <div className="left ml-10 bg-[#E2E2E2] h-full w-[620px] flex items-center p-1 px-2">
          <div className="w-1/2 h-full bg-[#EEEEEE] rounded-md flex items-center px-2 gap-2">
            <img src={file} alt="" />
            <p className="text-[#545454]">Q3 Financial Overview</p>
          </div>
          <img src={reload} className="w-[20px] ml-3" alt="" />
        </div>

        <div className="right gap-1 flex items-center h-full">
          <div className="w-auto flex items-center bg-[#d2e0D4] px-2">
            <Btn
              icon={branch}
              bgColor={"#d2e0D4"}
              degree={180}
              title={"ABC"}
              txtColor={"#505450"}
              weight={500}
            />
            <div className="flex items-center gap-[2px]">
              <div className="w-1 h-1 bg-[#ffffff] rounded-full"></div>
              <div className="w-1 h-1 bg-[#ffffff] rounded-full"></div>

              <div className="w-1 h-1 bg-[#ffffff] rounded-full"></div>
            </div>
          </div>

          <div className="w-auto flex items-center bg-[#dccffc] px-2">
            <Btn
              icon={branch}
              bgColor={"#dccffc"}
              degree={180}
              title={"Answer a question"}
              txtColor={"#505450"}
              weight={500}
            />
            <div className="flex items-center gap-[2px]">
              <div className="w-1 h-1 bg-[#ffffff] rounded-full"></div>
              <div className="w-1 h-1 bg-[#ffffff] rounded-full"></div>

              <div className="w-1 h-1 bg-[#ffffff] rounded-full"></div>
            </div>
          </div>

          <div className="w-auto flex items-center bg-[#fac2af] px-2">
            <Btn
              icon={branch}
              bgColor={"#fac2af"}
              degree={180}
              title={"Extract"}
              txtColor={"#505450"}
              weight={500}
            />
            <div className="flex items-center gap-[2px]">
              <div className="w-1 h-1 bg-[#ffffff] rounded-full"></div>
              <div className="w-1 h-1 bg-[#ffffff] rounded-full"></div>

              <div className="w-1 h-1 bg-[#ffffff] rounded-full"></div>
            </div>
          </div>

          <div className="w-[150px] h-full bg-[#eeeeee] flex items-center justify-center">
            <img src={plus} className="w-[18px]" alt="" />
          </div>
        </div>
      </div>

      <div className="belowmain h-[42px] w-full bg-white flex items-center gap-[2px]">
        <Heading icon={hash} bgColor={"#eeeeee"} width={40} />
         <Heading icon={job} bgColor={"#eeeeee"} width={230} title="Job Request" textColor="gray" arrow={dArr}  />
            <Heading icon={date} bgColor={"#eeeeee"} width={150} title="Submitted" textColor="gray" arrow={dArr}  />
            <Heading icon={circle} bgColor={"#eeeeee"} width={120} title="Status" textColor="gray" arrow={dArr}  />
             <Heading icon={user} bgColor={"#eeeeee"} width={150} title="Submitter" textColor="gray" arrow={dArr}  />
            <Heading icon={url} bgColor={"#eeeeee"} width={140} title="URL" textColor="gray" arrow={dArr}  />
            <Heading bgColor={"#e8f0e9"} width={130} title="Assigned" textColor="gray"  />
             <Heading bgColor={"#eae3fc"} width={130} title="Priority" textColor="#655c80"  />
              <Heading bgColor={"#eae3fc"} width={130} title="Due Date" textColor="#655c80"  />
               <Heading bgColor={"#ffe9e0"} width={130} title="Est.Value" textColor="#8c6c62"  />



      </div>
    </div>
  );
};

export default MainHeader;
