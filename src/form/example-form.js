import { useState } from "react";

import Form from "./form";
import Result from "./result";

function ExampleForm() {
    const [isForm, setIsForm] = useState(true);

    function submitForm(m) {
        setIsForm(m);
    }

    return (
        <div className="example-form-container">
            <h1>Example Form</h1>
            {isForm ? <Form submitForm={submitForm} /> : <Result submitForm={submitForm} />}
        </div>
    );
}

export default ExampleForm;


