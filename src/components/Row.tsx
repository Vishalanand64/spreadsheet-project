import Input from "./Input";
import Options from "./Options";

const Row = (props: any) => {
  return (
    <div className="w-full h-[42px]  border-[#eeeeee] border-b-2 flex items-center">
      <div className="w-[41px] h-full flex items-center justify-center border-[#eeeeee] border-r-1">
        {props.num}
      </div>
      <Input width={233} />
      <Input width={152} />
      <Options type="status" width="120px" />
      <Input width={154} />
      <Input width={142} />
      <Input width={132} />
      <Options type="priority" width="132px" />
      <Input width={132} />
      <Input width={130} />
    </div>
  );
};

export default Row;
