import { useEffect, useState } from "react";
import { FormDataInterface } from "./utility/Interfaces";

import TextInput from "./components/TextInput";
import ConvertedAge from "./components/ConvertedAge";
import Divider from "./components/Divider";

const defaultFormState: FormDataInterface = {
  day: { value: "--", hasError: false, errorType: null },
  month: { value: "--", hasError: false, errorType: null },
  year: { value: "--", hasError: false, errorType: null },
};

function App() {
  const [formState, setFormState] =
    useState<FormDataInterface>(defaultFormState);

  // const [age, setAge] = useState<AgeType>({ years: "", months: "", days: "" });

  // const convertToAge = (years: string, months: string, days: string ) => {
  // convert date to age, get the time since that date.
  // }

  // useEffect(() => {
  //   if (formState.day.value === "") {
  //     setFormState({
  //       ...formState,
  //       day: {
  //         ...formState.day,
  //         value: "--",
  //       },
  //     });
  //   }
  // }, [formState.day.value]);

  // useEffect(() => {
  //   if (formState.month.value === "") {
  //     setFormState({
  //       ...formState,
  //       month: {
  //         ...formState.month,
  //         value: "--",
  //       },
  //     });
  //   }
  // }, [formState.month.value]);

  // useEffect(() => {
  //   if (formState.year.value === "") {
  //     setFormState({
  //       ...formState,
  //       year: {
  //         ...formState.year,
  //         value: "--",
  //       },
  //     });
  //   }
  // }, [formState.year.value]);

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-off-white p-6">
      <div className="w-full max-w-4xl rounded-t-4xl rounded-bl-4xl rounded-br-9xl bg-white px-11 py-21">
        <div className="flex w-full gap-6">
          <TextInput
            label="day"
            placeholder="dd"
            formState={formState}
            stateSetter={setFormState}
          />
          <TextInput
            label="month"
            placeholder="mm"
            formState={formState}
            stateSetter={setFormState}
          />
          <TextInput
            label="year"
            placeholder="yyyy"
            formState={formState}
            stateSetter={setFormState}
          />
        </div>
        <Divider />
        <div className="flex w-full flex-col gap-2">
          <ConvertedAge value={formState.year.value} unit="years" />
          <ConvertedAge value={formState.month.value} unit="months" />
          <ConvertedAge value={formState.day.value} unit="days" />
        </div>
      </div>
    </div>
  );
}

export default App;
