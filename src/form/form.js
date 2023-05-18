import { useEffect } from "react";
import { useForm } from "react-hook-form";

function Form({ data, submitForm, passDataHandler, resetFormHandler }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  function formSubmitHandler(formData) {
    passDataHandler(formData);
    submitForm(false);
  }

  function resetForm() {
    resetFormHandler();
    reset();
  }

  return (
    <div className="form-container">
      <form className="row g-3 my-2" onSubmit={handleSubmit(formSubmitHandler)}>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="email">email *</label>
            <input
              type="email"
              className="form-control"
              {...register("email", { required: true })}
            />
            {errors?.email && (
              <span className="form-error">This field is required</span>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="name">name *</label>
            <input
              type="text"
              className="form-control"
              {...register("name", { required: true })}
            />
            {errors?.name && (
              <span className="form-error">This field is required</span>
            )}
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <label htmlFor="address">address *</label>
            <input
              type="text"
              className="form-control"
              {...register("address", { required: true })}
            />
            {errors?.address && (
              <span className="form-error">This field is required</span>
            )}
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <label htmlFor="address2">address2</label>
            <input
              type="text"
              className="form-control"
              {...register("address2")}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="city">city *</label>
            <input
              type="text"
              className="form-control"
              {...register("city", { required: true })}
            />
            {errors?.city && (
              <span className="form-error">This field is required</span>
            )}
          </div>
        </div>

        <div className="col-md-2">
          <div className="form-group">
            <label htmlFor="state">state *</label>
            <select
              type="text"
              className="form-control"
              {...register("state", { required: true })}
            >
              <option value="">Select a state</option>
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AZ">AZ</option>
            </select>
            {errors?.state && (
              <span className="form-error">This field is required</span>
            )}
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="zip">zip *</label>
            <input
              type="text"
              className="form-control"
              {...register("zip", { required: true })}
            />
            {errors?.zip && (
              <span className="form-error">This field is required</span>
            )}
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="service">service *</label>
            <select
              className="form-control"
              {...register("service", { required: true })}
            >
              <option value="">Select a service</option>
              <option value="Netflix">Netflix</option>
              <option value="Hulu">Hulu</option>
              <option value="Amazon Prime">Amazon Prime</option>
              <option value="Disney+">Disney+</option>
            </select>
            {errors?.service && (
              <span className="form-error">This field is required</span>
            )}
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-group">
            <p>usage *</p>
            <label className="me-1" htmlFor="All">
              All:{" "}
            </label>
            <input
              className="me-3"
              type="radio"
              value="All"
              {...register("usage", { required: true })}
            />

            <label className="me-1" htmlFor="Most">
              Most:{" "}
            </label>
            <input
              className="me-3"
              type="radio"
              value="Most"
              {...register("usage", { required: true })}
            />

            <label className="me-1" htmlFor="Some">
              Some:{" "}
            </label>
            <input
              className="me-3"
              type="radio"
              value="Some"
              {...register("usage", { required: true })}
            />

            <label className="me-1" htmlFor="None">
              None:{" "}
            </label>
            <input
              type="radio"
              value="None"
              {...register("usage", { required: true })}
            />

            {errors?.usage && (
              <span className="form-error">This field is required</span>
            )}
          </div>
        </div>

        <div className="col-md-8">
          <div className="form-group">
            <label htmlFor="comment">comment</label>
            <textarea
              className="form-control"
              {...register("comment")}
              rows={6}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <p>genres</p>
            <div className="row row-cols-2 text-end">
              <div className="col">
                <label htmlFor="genres">Comedy</label>
                <input
                  type="checkbox"
                  className="mx-2"
                  value="Comedy"
                  {...register("genres")}
                />
              </div>

              <div className="col">
                <label htmlFor="genres">Drama</label>
                <input
                  type="checkbox"
                  className="mx-2"
                  value="Drama"
                  {...register("genres")}
                />
              </div>

              <div className="col">
                <label htmlFor="genres">Action</label>
                <input
                  type="checkbox"
                  className="mx-2"
                  value="Action"
                  {...register("genres")}
                />
              </div>

              <div className="col">
                <label htmlFor="genres">Horror</label>
                <input
                  type="checkbox"
                  className="mx-2"
                  value="Horror"
                  {...register("genres")}
                />
              </div>

              <div className="col">
                <label htmlFor="genres">Thriller</label>
                <input
                  type="checkbox"
                  className="mx-2"
                  value="Thriller"
                  {...register("genres")}
                />
              </div>

              <div className="col">
                <label htmlFor="genres">Romance</label>
                <input
                  type="checkbox"
                  className="mx-2"
                  value="Romance"
                  {...register("genres")}
                />
              </div>

              <div className="col">
                <label htmlFor="genres">Documentary</label>
                <input
                  type="checkbox"
                  className="mx-2"
                  value="Documentary"
                  {...register("genres")}
                />
              </div>

              <div className="col">
                <label htmlFor="genres">Animation</label>
                <input
                  type="checkbox"
                  className="mx-2"
                  value="Animation"
                  {...register("genres")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-8">
          <button type="submit" className="w-100 btn btn-primary">
            Submit
          </button>
        </div>

        <div className="col-4">
          <button
            type="button"
            className="w-100 btn btn-secondary"
            onClick={resetForm}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

// email, name, address, address2, city, state, zip, service, usage, comment, genres
