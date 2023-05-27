import { useState } from "react";
import { set } from "react-hook-form";

function BlogLoginForm({ loginHandler }) {
    const [username, setUsername] = useState("");

    function usernameChangeHandler(event) {
        setUsername(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        loginHandler(username);
        setUsername("");
    }

    return (
        <div className="blog-login-form-container">
            <div className="blog-login-form-header">
                <p className="login-form-title">log on in!</p>
            </div>

            <div className="form-group mb-3">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" className="form-control" onChange={usernameChangeHandler} value={username}  />
            </div>

            <button onClick={submitHandler} className="btn btn-secondary">Login</button>
        </div>
    );
}

export default BlogLoginForm;