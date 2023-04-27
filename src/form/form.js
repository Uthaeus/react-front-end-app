import { useState } from 'react';

const initialState = {
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    service: '',
    usage: '',
    comment: '',
    genres: [],
};

function Form({ submitForm }) {
    const [formState, setFormState] = useState(initialState);

    function changeHandler(e) {
        console.log('change', e.target.id, e.target.value);
        setFormState({ ...formState, [e.target.id]: e.target.value });
    }

    function formSubmitHandler(e) {
        e.preventDefault();
        submitForm(false);
    }

    return (
        <div className="form-container">
            <form className="row g-3 my-2" onSubmit={formSubmitHandler}>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={formState.email} onChange={changeHandler} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={formState.name} onChange={changeHandler} />
                </div>
                <div className="col-12">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" value={formState.address} onChange={changeHandler} />
                </div>
                <div className="col-12">
                    <label htmlFor="address2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="address2" placeholder="Apartment, studio, or floor" value={formState.address2} onChange={changeHandler} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" value={formState.city} onChange={changeHandler} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="state" className="form-label">State</label>
                    <select id="state" className="form-select" onChange={changeHandler}>
                        <option value="">Choose...</option>
                        <option value="UT">UT</option>
                        <option value="CO">CO</option>
                        <option value="CA">CA</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="zip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="zip" value={formState.zip} onChange={changeHandler} />
                </div>
                <div className="col-12">
                    <label className="form-label" htmlFor='service'>Preferred Streaming Service</label>
                    <select className="form-select" id='service' onChange={changeHandler}>
                        <option value="">Choose...</option>
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
                    <p>How much of your streaming is on this service?</p>
                    <input type='radio' id='radio-all' value='all' name='usage' />
                    <label className="me-3" htmlFor="radio-all">: All</label>

                    <input type='radio' id='radio-most' value='most' name='usage' />
                    <label className="form-label me-3" htmlFor="radio-most">: Most</label>

                    <input type='radio' id='radio-some' value='some' name='usage' />
                    <label className="form-label me-3" htmlFor="radio-some">: Some</label>

                    <input type='radio' id='radio-none' value='none' name='usage' />
                    <label className="form-label" htmlFor="radio-none">: None</label>
                </div>
                <div className="col-8">
                    <label className="form-label" htmlFor='comment'>Comments:</label>
                    <textarea id="comment" className="form-control" rows={12} value={formState.comment} onChange={changeHandler} />
                </div>
                <div className="col-4">
                    <p>Preferred Genres:</p>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="checkDrama" name="genres" value='Drama' />
                                <label className="form-check-label" htmlFor="checkDrama">
                                    Drama
                                </label>
                            </div>

                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="checkCrime" name="genres" value='Crime' />
                                <label className="form-check-label" htmlFor="checkCrime">
                                    Crime
                                </label>
                            </div>

                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="checkWestern" name="genres" value='Western' />
                                <label className="form-check-label" htmlFor="checkWestern">
                                    Western
                                </label>
                            </div>

                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="checkRomance" name="genres" value='Romance' />
                                <label className="form-check-label" htmlFor="checkRomance">
                                    Romance
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="checkHorror" name="genres" value='Horror' />
                                <label className="form-check-label" htmlFor="checkHorror">
                                    Horror
                                </label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="checkComedy" name="genres" value='Comedy' />
                                <label className="form-check-label" htmlFor="checkComedy">
                                    Comedy
                                </label>
                            </div>

                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="checkSciFi" name="genres" value='SciFi' />
                                <label className="form-check-label" htmlFor="checkSciFi">
                                    SciFi
                                </label>
                            </div>

                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="checkMystery" name="genres" value='Mystery' />
                                <label className="form-check-label" htmlFor="checkMystery">
                                    Mystery
                                </label>
                            </div>

                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="checkAnime" name="genres" value='Anime' />
                                <label className="form-check-label" htmlFor="checkAnime">
                                    Anime
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="checkAction" name="genres" value='Action' />
                                <label className="form-check-label" htmlFor="checkAction">
                                    Action
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