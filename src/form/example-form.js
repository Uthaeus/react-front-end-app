import { useState } from "react";

import Form from "./form";
import Result from "./result";



function ExampleForm() {
  const [isForm, setIsForm] = useState(true);
  const [data, setData] = useState({});
  const [notice, setNotice] = useState("");

  function passDataHandler(data) {
    setData(data);
  }

  function dataSubmitHandler() {
    setNotice("Data submitted! (not really, this is just a demo)");
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
      {notice.length > 0 && <p className="notice">{notice}</p>}
      {isForm ? (
        <Form
          submitForm={submitForm}
          passDataHandler={passDataHandler}
          data={data}
        />
      ) : (
        <Result submitForm={submitForm} data={data} dataSubmitHandler={dataSubmitHandler} />
      )}
    </div>
  );
}

export default ExampleForm;
