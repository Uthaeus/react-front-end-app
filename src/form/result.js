

function Result({ submitForm }) {

    return (
        <div>
            <h1>Result</h1>

            <button onClick={() => submitForm(true)}>Back to Form</button>
        </div>
    )
}

export default Result;