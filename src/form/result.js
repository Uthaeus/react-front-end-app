

function Result({ submitForm, data }) {

    const { email, name, address, address2, city, state, zip, service, usage, comment, genres } = data;

    return (
        <div>
            <h1>Result</h1>

            <p>Email: {email}</p>
            <p>Name: {name}</p>
            <p>Address {address}</p>
            <p>Address2 {address2}</p>
            <p>City: {city}</p>
            <p>ST: {state}</p>
            <p>Zip: {zip}</p>
            <p>Service: {service}</p>
            <p>Usage: {usage}</p>
            <p>Comment: {comment}</p>
            <p>Genres: {genres}</p>

            <button onClick={() => submitForm(true)}>Back to Form</button>
        </div>
    )
}

export default Result;