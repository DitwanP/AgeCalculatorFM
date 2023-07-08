import { FormEvent } from "react";
import { validateInput } from "../utility/ValidateInput";
import { ErrorType } from "../utility/Types";
import {
  InputPropsInterface,
  InputFieldInterface,
} from "../utility/Interfaces";

const TextInput = (props: InputPropsInterface) => {
  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    props.stateSetter(
      validateInput(props.label, e.currentTarget.value, props.formState)
    );
  };

  const currentInput: InputFieldInterface = props.formState[props.label];

  let hasError: boolean = currentInput.hasError;
  let invalidYear: boolean =
    currentInput.hasError && currentInput.errorType === "invalid";
  let errorType: ErrorType = currentInput.errorType;

  return (
    <div className="flex flex-col overflow-x-hidden">
      <label
        htmlFor={props.label}
        className="text mb-2 text-xl tracking-widest-2 text-smokey-grey"
      >
        {props.label.toUpperCase()}
      </label>
      <input
        type="number"
        id={props.label}
        onChange={handleInput}
        placeholder={props.placeholder.toUpperCase()}
        aria-placeholder={props.placeholder.toUpperCase()}
        className={`mb-3 h-21 max-w-xxs rounded-xl border border-light-grey pl-3 text-3xl 
        text-off-black placeholder:-translate-y-0 placeholder:pl-3 placeholder:text-3xl 
        placeholder:text-light-grey focus-visible:outline-2 
        ${
          hasError
            ? "focus-visible:outline-light-red"
            : "focus-visible:outline-purple"
        }`}
      />
      {errorType === "empty" && (
        <span className="max-w-xxs font-normal italic text-light-red">
          This field is required
        </span>
      )}
      {props.label !== "year" && errorType === "invalid" && (
        <span className="max-w-xxs font-normal italic text-light-red">
          Must be a valid {props.label}
        </span>
      )}
      {invalidYear && (
        <span className="max-w-xxs font-normal italic text-light-red">
          Must be a valid year in the past
        </span>
      )}
    </div>
  );
};

export default TextInput;
