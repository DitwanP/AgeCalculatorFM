import { UnitType } from "./Types";
import { ErrorType } from "./Types";

export interface InputFieldInterface {
  value: string;
  hasError: boolean;
  errorType: ErrorType;
}

export interface FormInputsPopsInterface {
  formState: FormDataInterface;
  stateSetter: (value: FormDataInterface) => void;
}

export interface InputPropsInterface {
  label: UnitType;
  placeholder: string;
  hasError: boolean;
  errorType: ErrorType;
  invalidYear?: boolean;
  formState: FormDataInterface;
  stateSetter: (value: FormDataInterface) => void;
}

export interface FormDataInterface {
  [key: string]: InputFieldInterface;
  day: InputFieldInterface;
  month: InputFieldInterface;
  year: InputFieldInterface;
}

export interface ButtonAndDividerPropsInterface {
  stateSetter: (value: FormDataInterface) => void;
  formState: FormDataInterface;
  setAge: (value: ConvertedAgeInterface) => void;
}

export interface ConvertedAgePropsInterface {
  value: string;
  unit: string;
}

export interface ConvertedAgeInterface {
  [key: string]: string;
  yearsOld: string;
  monthsOld: string;
  daysOld: string;
}
