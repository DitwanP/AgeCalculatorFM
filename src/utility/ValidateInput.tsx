import { FormDataInterface, InputFieldInterface } from "./Interfaces";
import { UnitType } from "./Types";

export const validateInput = (
  stateSetter: (value: FormDataInterface) => void,
  currentState: FormDataInterface
): boolean => {
  const dayInfo: InputFieldInterface = validateDay(currentState);
  const monthInfo: InputFieldInterface = validateMonth(currentState);
  const yearInfo: InputFieldInterface = validateYear(currentState);
  const newState = { day: dayInfo, month: monthInfo, year: yearInfo };
  const hasError: boolean =
    dayInfo.hasError || monthInfo.hasError || yearInfo.hasError;

  const birthdate = new Date(
    Number(currentState.year.value),
    Number(currentState.month.value) - 1,
    Number(currentState.day.value)
  );

  if (
    Number(dayInfo.value) > 0 &&
    Number(dayInfo.value) <= 31 &&
    birthdate.getDate() !== Number(dayInfo.value)
  ) {
    stateSetter({
      ...newState,
      day: {
        ...newState.day,
        hasError: true,
        errorType: "noSuchDate",
      },
    });
    return true;
  }

  stateSetter(newState);
  return hasError;
};

// Checks that the entered day is between 1 and 31.
const validateDay = (currentState: FormDataInterface): InputFieldInterface => {
  const dayValue = currentState.day.value;

  if (dayValue === "") {
    return { value: "", hasError: true, errorType: "empty" };
  } else if (Number(dayValue) < 1 || Number(dayValue) > 31) {
    return { value: dayValue, hasError: true, errorType: "invalid" };
  } else {
    return { value: dayValue, hasError: false, errorType: null };
  }
};

// Checks that the entered month is between 1 and 12.
const validateMonth = (
  currentState: FormDataInterface
): InputFieldInterface => {
  const monthValue = currentState.month.value;

  if (monthValue === "") {
    return { value: "", hasError: true, errorType: "empty" };
  } else if (Number(monthValue) < 1 || Number(monthValue) > 12) {
    return { value: monthValue, hasError: true, errorType: "invalid" };
  } else {
    return { value: monthValue, hasError: false, errorType: null };
  }
};

// Checks that the entered year is between 0 and the current year.
const validateYear = (currentState: FormDataInterface): InputFieldInterface => {
  const currentYear = new Date().getFullYear();
  let yearValue: string = currentState.year.value;

  if (yearValue === "") {
    return { value: "", hasError: true, errorType: "empty" };
  }

  if (Number(yearValue) < 0 || Number(yearValue) > currentYear) {
    return { value: String(yearValue), hasError: true, errorType: "invalid" };
  } else {
    return { value: String(yearValue), hasError: false, errorType: null };
  }
};

export const resetInputState = (
  unit: UnitType,
  currentValue: string,
  currentState: FormDataInterface
) => {
  const defaultState = { value: "", hasError: false, errorType: null };

  if (currentValue === "") {
    return {
      ...currentState,
      [unit]: defaultState,
    };
  }

  return currentState;
};
