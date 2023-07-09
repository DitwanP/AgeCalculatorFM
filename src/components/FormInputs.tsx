import TextInput from "./TextInput";

import { FormInputsPopsInterface } from "../utility/Interfaces";

const FormInputs = (props: FormInputsPopsInterface) => {
  return (
    <div className="flex w-full gap-6">
      <TextInput
        label="day"
        placeholder="dd"
        formState={props.formState}
        stateSetter={props.stateSetter}
        hasError={props.formState.day.hasError}
        errorType={props.formState.day.errorType}
      />
      <TextInput
        label="month"
        placeholder="mm"
        formState={props.formState}
        stateSetter={props.stateSetter}
        hasError={props.formState.month.hasError}
        errorType={props.formState.month.errorType}
      />
      <TextInput
        label="year"
        placeholder="yyyy"
        formState={props.formState}
        stateSetter={props.stateSetter}
        hasError={props.formState.year.hasError}
        errorType={props.formState.year.errorType}
        invalidYear={props.formState.year.hasError}
      />
    </div>
  );
};

export default FormInputs;
