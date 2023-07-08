import { ConvertedAgeInterface } from "../utility/Interfaces";

const ConvertedAge = (props: ConvertedAgeInterface) => {
  return (
    <div className="flex justify-start gap-4 text-9xl font-extrabold italic">
      <span className="text-purple">{props.value ? props.value : "--"}</span>
      <span className="text-off-black">{props.unit}</span>
    </div>
  );
};

export default ConvertedAge;
