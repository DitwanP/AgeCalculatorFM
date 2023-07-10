import { FormDataInterface } from "./Interfaces";
import moment from "moment";

export const convertToAge = (formInfo: FormDataInterface) => {
  const day = Number(formInfo.day.value);
  const month = Number(formInfo.month.value) - 1; //js months are 0 indexed so - 1 fixes off by one
  const year = Number(formInfo.year.value);

  const birthDate = new Date(year, month, day);
  birthDate.setUTCFullYear(0);

  const bdayInMs = birthDate.getTime();
  const currentDate = new Date().getTime();
  const timeBetweenDatesInMs = currentDate - bdayInMs;
  const duration = moment.duration(timeBetweenDatesInMs);

  return {
    years: String(duration.years()),
    months: String(duration.months()),
    days: String(duration.days()),
  };
};
