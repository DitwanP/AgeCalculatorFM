import { useState } from "react";
import { ConvertedAgeInterface, FormDataInterface } from "./utility/Interfaces";

import FormInputs from "./components/FormInputs";
import ConvertedAge from "./components/ConvertedAge";
import ButtonAndDivider from "./components/ButtonAndDivider";

const defaultFormState: FormDataInterface = {
  day: { value: "", hasError: false, errorType: null },
  month: { value: "", hasError: false, errorType: null },
  year: { value: "", hasError: false, errorType: null },
};

const defaultAgeState: ConvertedAgeInterface = {
  yearsOld: "",
  monthsOld: "",
  daysOld: "",
};

function App() {
  const [formState, setFormState] =
    useState<FormDataInterface>(defaultFormState);
  const [age, setAge] = useState<ConvertedAgeInterface>(defaultAgeState);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-off-white p-6">
      <div
        className="w-full max-w-[425px] rounded-t-4xl rounded-bl-4xl rounded-br-9xl bg-white px-11 py-23 
                  shadow-xl lg:max-w-9xl lg:rounded-br-18xl lg:px-23"
      >
        <FormInputs formState={formState} stateSetter={setFormState} />
        <ButtonAndDivider
          setAge={setAge}
          formState={formState}
          stateSetter={setFormState}
        />
        <div className="flex w-full flex-col gap-2">
          <ConvertedAge value={age.yearsOld} unit="years" />
          <ConvertedAge value={age.monthsOld} unit="months" />
          <ConvertedAge value={age.daysOld} unit="days" />
        </div>
      </div>
    </div>
  );
}

export default App;
