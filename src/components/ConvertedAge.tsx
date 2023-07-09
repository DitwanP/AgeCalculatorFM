import { ConvertedAgePropsInterface } from "../utility/Interfaces";

const ConvertedAge = (props: ConvertedAgePropsInterface) => {
  return (
    <div className="flex justify-start gap-4 text-9xl font-extrabold italic md:text-18xl">
      <span className="text-purple">{props.value ? props.value : "- -"}</span>
      <span className="text-off-black">{props.unit}</span>
    </div>
  );
};

export default ConvertedAge;
