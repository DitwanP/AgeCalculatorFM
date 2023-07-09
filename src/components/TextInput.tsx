import { FormEvent } from "react";
import { InputPropsInterface } from "../utility/Interfaces";

const TextInput = (props: InputPropsInterface) => {
  const field = props.label;

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    props.stateSetter({
      ...props.formState,
      [field]: {
        ...props.formState[field],
        value: e.currentTarget.value,
      },
    });
  };

  return (
    <div className="flex flex-col overflow-x-hidden">
      <label
        htmlFor={props.label}
        className={`text mb-2 text-xl tracking-widest-2 
        ${props.hasError ? "text-light-red" : "text-smokey-grey "}`}
      >
        {props.label.toUpperCase()}
      </label>
      <input
        type="number"
        id={props.label}
        onChange={handleInputChange}
        // onBlur={props.handleReset}
        placeholder={props.placeholder.toUpperCase()}
        aria-placeholder={props.placeholder.toUpperCase()}
        className={`mb-3 h-21 max-w-xxs translate-y-1 rounded-xl border border-light-grey px-6 text-4xl 
        text-off-black placeholder:-translate-y-1 placeholder:pl-3 placeholder:text-3xl 
        placeholder:text-light-grey focus-visible:outline-2 
        ${
          props.hasError
            ? "border-light-red focus-visible:outline-light-red"
            : "focus-visible:outline-purple"
        }`}
      />
      {props.errorType === "empty" && (
        <span className="max-w-xxs font-normal italic text-light-red">
          This field is required
        </span>
      )}
      {props.label !== "year" && props.errorType === "invalid" && (
        <span className="max-w-xxs font-normal italic text-light-red">
          Must be a valid {props.label}
        </span>
      )}
      {props.errorType !== "empty" && props.invalidYear && (
        <span className="max-w-xxs font-normal italic text-light-red">
          Must be a valid year in the past
        </span>
      )}
    </div>
  );
};

export default TextInput;
