import { ConvertedAgeInterface, FormDataInterface } from "./Interfaces";

export const convertToAge = (
  birthday: FormDataInterface,
  setAge: (value: ConvertedAgeInterface) => void
) => {
  const day = Number(birthday.day.value);
  const month = Number(birthday.month.value) - 1;
  const year = Number(birthday.year.value);

  const date = new Date(year, month, day);
  console.log("Input data:", birthday);
  console.log("New 'Date' object: ", date);
  console.log("New 'Date'.time: ", date.getTime());
};
