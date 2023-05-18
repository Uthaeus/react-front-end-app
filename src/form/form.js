
import { useForm } from "react-hook-form";


function Form({}) {


  function formSubmitHandler(e) {
  }

  return (
    <div className="form-container">
      <form className="row g-3 my-2" onSubmit={formSubmitHandler}>
        
      </form>
    </div>
  );
}

export default Form;

// email, name, address, address2, city, state, zip, service, usage, comment, genres