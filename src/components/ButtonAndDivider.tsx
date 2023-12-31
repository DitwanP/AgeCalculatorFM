import ArrowIcon from "../assets/images/icon-arrow.svg";
import { ButtonAndDividerPropsInterface } from "../utility/Interfaces";
import { convertToAge } from "../utility/ConvertToAge";
import { validateInput } from "../utility/ValidateInput";

const ButtonAndDivider = (props: ButtonAndDividerPropsInterface) => {
  const handleSubmit = () => {
    const hasErrors = validateInput(props.stateSetter, props.formState);

    if (!hasErrors) {
      const age = convertToAge(props.formState);
      props.setAge({
        yearsOld: age.years,
        monthsOld: age.months,
        daysOld: age.days,
      });
    } else {
      props.setAge({
        yearsOld: "",
        monthsOld: "",
        daysOld: "",
      });
    }
  };

  return (
    <div className="relative my-12 flex w-full flex-col items-center justify-center lg:my-8 lg:items-end">
      <button
        onClick={handleSubmit}
        className="relative z-10 flex h-23 w-23 items-center justify-center 
                  rounded-full bg-purple hover:cursor-pointer hover:bg-off-black
                  lg:h-44 lg:w-44"
      >
        <img
          src={ArrowIcon}
          alt="Down Arrow"
          className="h-11 w-11 lg:h-20 lg:w-20"
        />
      </button>
      <div className="absolute h-1 w-full border-t border-light-grey"></div>
    </div>
  );
};

export default ButtonAndDivider;
