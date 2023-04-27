import { useState } from "react";

import Form from "./form";
import Result from "./result";

const initialState = {
  email: "",
  name: "",
  address: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  service: "",
  usage: "",
  comment: "",
  genres: [],
};

function ExampleForm() {
  const [isForm, setIsForm] = useState(true);
  const [data, setData] = useState(initialState);

  function passDataHandler(data) {
    setData(data);
  }

  function submitForm(m, d = null) {
    setIsForm(m);
    if (d) {
      setData(d);
    }
  }

  function resetFormHandler() {
    setData(() => initialState);
  }

  return (
    <div className="example-form-container">
      <h1>Example Form</h1>
      {isForm ? (
        <Form
          submitForm={submitForm}
          passDataHandler={passDataHandler}
          data={data}
          resetFormHandler={resetFormHandler}
        />
      ) : (
        <Result submitForm={submitForm} data={data} />
      )}
    </div>
  );
}

export default ExampleForm;
