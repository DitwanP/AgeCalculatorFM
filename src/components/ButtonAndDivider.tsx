import ArrowIcon from "../assets/images/icon-arrow.svg";
import { ButtonAndDividerPropsInterface } from "../utility/Interfaces";
import { convertToAge } from "../utility/ConvertToAge";
import { validateInput } from "../utility/ValidateInput";

const ButtonAndDivider = (props: ButtonAndDividerPropsInterface) => {
  const handleSubmit = () => {
    const hasErrors: boolean = validateInput(
      props.stateSetter,
      props.formState
    );
    console.log("Is valid:", hasErrors);
    if (!hasErrors) {
      const birthday = props.formState;
      convertToAge(birthday, props.setAge);
    }
  };

  return (
    <div className="relative my-12 flex w-full flex-col items-center justify-center">
      <button
        onClick={handleSubmit}
        className="relative z-10 flex h-23 w-23 items-center justify-center 
        rounded-full bg-purple hover:cursor-pointer hover:bg-off-black"
      >
        <img src={ArrowIcon} alt="Down Arrow" className="h-11 w-11" />
      </button>
      <div className="absolute h-1 w-full border-t border-light-grey"></div>
    </div>
  );
};

export default ButtonAndDivider;
