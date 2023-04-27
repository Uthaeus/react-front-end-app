

function Result({ submitForm, data }) {

    const { email, name, address, address2, city, state, zip, service, usage, comment, genres } = data;

    function returnToForm() {
        submitForm(true, data);
    }

    return (
        <div className="card result-card">
            <div className="row">
                <div className="col-12 result-title">
                    <h1>Result</h1>
                </div>

                <div className="col-md-6">
                    <div className="result-label">
                        Email: <span className="result-data">{email}</span>
                    </div>
                    <div className="result-label">
                        Name: <span className="result-data">{name}</span>
                    </div>
                    <div className="result-label">
                        Address: <span className="result-data">{address}</span>
                    </div>
                    {address2.length > 0 && <div className="result-label">Address2: <span className="result-data">{address2}</span></div>}
                    <div className="result-label">
                        City: <span className="result-data">{city}</span>
                    </div>
                    <div className="result-label">
                        State: <span className="result-data">{state}</span>
                    </div>
                    <div className="result-label">
                        Zip: <span className="result-data">{zip}</span>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="result-label">
                        Service: <span className="result-data">{service}</span>
                    </div>
                    <div className="result-label">
                        Usage: <span className="result-data">{usage}</span>
                    </div>
                    <div className="result-label">
                        Genres: 
                        <div className="row row-cols-3 m-2">
                            {genres.map(genre => <p key={genre} className="col result-genre">{genre}</p>)}
                        </div>
                    </div>
                    
                </div>

                <div className="result-label">
                    Comments:
                    <p className="result-comment">{comment}</p>
                </div>

                <button className="result-btn" onClick={returnToForm}>Back to Form</button>
            </div>
        </div>
    )
}

export default Result;