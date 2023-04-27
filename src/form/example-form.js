import { useState } from "react";

import Form from "./form";
import Result from "./result";



function ExampleForm() {
  const [isForm, setIsForm] = useState(true);
  const [data, setData] = useState({});

  function passDataHandler(data) {
    setData(data);
  }

  function submitForm(m, d = null) {
    setIsForm(m);
    if (d) {
      setData(d);
    }
  }

  return (
    <div className="example-form-container">
      <h1>Example Form</h1>
      {isForm ? (
        <Form
          submitForm={submitForm}
          passDataHandler={passDataHandler}
          data={data}
        />
      ) : (
        <Result submitForm={submitForm} data={data} />
      )}
    </div>
  );
}

export default ExampleForm;
