import { useState } from "react";

import Form from "./form";
import Result from "./result";

function ExampleForm() {
    const [isForm, setIsForm] = useState(true);
    const [data, setData] = useState({});

    function passDataHandler(data) {
        setData(data);
    }

    function submitForm(m) {
        setIsForm(m);
    }

    return (
        <div className="example-form-container">
            <h1>Example Form</h1>
            {isForm ? <Form submitForm={submitForm} passDataHandler={passDataHandler} /> : <Result submitForm={submitForm} data={data} />}
        </div>
    );
}

export default ExampleForm;


