import { UnitType } from "./Types";
import { ErrorType } from "./Types";

export interface InputFieldInterface {
  value: string;
  hasError: boolean;
  errorType: ErrorType;
}

// export interface ErrorInterface {
//   isError: boolean;
//   errorType: ErrorType;
// }

export interface FormDataInterface {
  day: InputFieldInterface;
  month: InputFieldInterface;
  year: InputFieldInterface;
}

export interface AgeInterface {
  years: string;
  months: string;
  days: string;
}

export interface ConvertedAgeInterface {
  value: string;
  unit: string;
}

export interface InputPropsInterface {
  label: UnitType;
  placeholder: string;
  formState: FormDataInterface;
  stateSetter: (value: FormDataInterface) => void;
}
