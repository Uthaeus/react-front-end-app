

function Form({ submitForm }) {

    function formSubmitHandler(e) {
        e.preventDefault();
        submitForm(false);
    }

    return (
        <div className="form-container">
            <form className="row g-3 my-2" onSubmit={formSubmitHandler}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <label className="form-label" htmlFor='inputService'>Preferred Streaming Service</label>
                    <select className="form-select" id='inputService'>
                        <option selected>Choose...</option>
                        <option value="Netflix">Netflix</option>
                        <option value="Disney">Disney</option>
                        <option value="Peacock">Peacock</option>
                        <option value="Hule">Hulu</option>
                        <option value="Paramount">Paramount</option>
                        <option value="Amazon Prime">Amazon Prime</option>
                        <option value="Tubi">Tubi</option>
                        <option value="Other">Other...</option>
                    </select>
                </div>
                <div className="col-12">
                    
                </div>
                <div className="col-8">
                    <label className="form-label" htmlFor='inputComment'>Comments:</label>
                    <textarea id="inputComment" className="form-control" rows={12} />
                </div>
                <div className="col-4">
                    <p>Preferred Genres:</p>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="checkDrama" />
                                <label className="form-check-label" htmlFor="checkDrama">
                                    Drama
                                </label>

                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="checkComedy" />
                                <label className="form-check-label" htmlFor="checkComedy">
                                    Comedy
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit Form</button>
                </div>
            </form>
        </div>
    );
}

export default Form;

// primary streaming service select dropdown
// primary service? radio buttons
// what categories do you use if for? checkbox
// comments textarea