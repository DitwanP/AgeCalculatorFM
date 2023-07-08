import { FormDataInterface } from "./Interfaces";
import { UnitType } from "./Types";

export const validateInput = (
  unit: UnitType,
  currentValue: string,
  currentState: FormDataInterface
): FormDataInterface => {
  if (currentValue === "") {
    return {
      ...currentState,
      [unit]: {
        isError: true,
        errorType: "empty",
      },
    };
  }

  switch (unit) {
    case "day":
      return validateDay(currentValue, currentState);
    case "month":
      return validateMonth(currentValue, currentState);
    case "year":
      return validateYear(currentValue, currentState);
  }
};

// Checks that the entered day is between 1 and 31.
const validateDay = (
  currentDayValue: string,
  currentState: FormDataInterface
): FormDataInterface => {
  if (Number(currentDayValue) < 1 || Number(currentDayValue) > 31) {
    return {
      ...currentState,
      day: {
        value: currentDayValue,
        hasError: true,
        errorType: "invalid",
      },
    };
  } else {
    return {
      ...currentState,
      day: {
        value: currentDayValue,
        hasError: false,
        errorType: null,
      },
    };
  }
};

// Checks that the entered month is between 1 and 12.
const validateMonth = (
  currentMonthValue: string,
  currentState: FormDataInterface
): FormDataInterface => {
  if (Number(currentMonthValue) < 1 || Number(currentMonthValue) > 12) {
    return {
      ...currentState,
      month: {
        value: currentMonthValue,
        hasError: true,
        errorType: "invalid",
      },
    };
  } else {
    return {
      ...currentState,
      month: {
        value: currentMonthValue,
        hasError: false,
        errorType: null,
      },
    };
  }
};

// Checks that the entered year is between 1 and the current year.
const validateYear = (
  currentYearValue: string,
  currentState: FormDataInterface
): FormDataInterface => {
  let currentYear = new Date().getFullYear();

  if (Number(currentYearValue) < 1 || Number(currentYearValue) > currentYear) {
    return {
      ...currentState,
      year: {
        value: currentYearValue,
        hasError: true,
        errorType: "invalid",
      },
    };
  } else {
    return {
      ...currentState,
      year: {
        value: currentYearValue,
        hasError: false,
        errorType: null,
      },
    };
  }
};
