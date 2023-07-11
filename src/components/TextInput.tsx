import { FormEvent } from "react";
import { InputPropsInterface } from "../utility/Interfaces";

const TextInput = ({ formState, ...props }: InputPropsInterface) => {
  let field = props.label;

  const invalidDateForMonth = formState.day.errorType === "noSuchDate";

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    props.stateSetter({
      ...formState,
      [field]: {
        ...formState[field],
        value: e.currentTarget.value,
      },
    });
  };

  return (
    <div className="flex flex-col overflow-x-hidden">
      <label
        htmlFor={props.label}
        className={`text mb-2 text-xl tracking-widest-2 lg:text-2xl lg:tracking-widest-3
        ${
          props.hasError || invalidDateForMonth
            ? "text-light-red"
            : "text-smokey-grey "
        }`}
      >
        {props.label.toUpperCase()}
      </label>
      <input
        type="number"
        id={props.label}
        onChange={handleInputChange}
        placeholder={props.placeholder.toUpperCase()}
        className={`mb-3 h-21 max-w-4xs translate-y-1 rounded-xl border border-light-grey px-5 text-4xl 
        text-off-black placeholder:-translate-y-1 placeholder:pl-3 placeholder:text-2xl 
        placeholder:text-light-grey focus-visible:outline-2 lg:h-32 lg:max-w-2xs lg:pl-8 lg:pr-4 lg:text-5xl
        lg:placeholder:-translate-y-0 lg:placeholder:text-5xl
        ${
          props.hasError || invalidDateForMonth
            ? "border-light-red focus-visible:outline-light-red"
            : "focus-visible:outline-purple"
        }`}
      />
      {props.errorType === "empty" && (
        <span className="max-w-xxs font-normal italic text-light-red lg:max-w-2xs lg:text-2xl">
          This field is required
        </span>
      )}
      {props.label !== "year" &&
        props.errorType === "invalid" &&
        !invalidDateForMonth && (
          <span className="max-w-xxs font-normal italic text-light-red lg:max-w-2xs lg:text-2xl">
            Must be a valid {props.label}
          </span>
        )}
      {props.label === "day" && invalidDateForMonth && (
        <span className="max-w-xxs font-normal italic text-light-red lg:max-w-2xs lg:text-2xl">
          Must be a valid date
        </span>
      )}
      {props.errorType !== "empty" && props.invalidYear && (
        <span className="max-w-xxs font-normal italic text-light-red lg:max-w-2xs lg:text-2xl">
          Must be in the past
        </span>
      )}
    </div>
  );
};

export default TextInput;
